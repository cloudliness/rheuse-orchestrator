import { NextResponse, type NextRequest } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import {
  getOrderBySessionId,
  updateOrderStatus,
} from "@/lib/orders";
import { sendOrderConfirmation } from "@/lib/email";

const WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  if (!WEBHOOK_SECRET) {
    console.error("[webhook] Missing STRIPE_WEBHOOK_SECRET");
    return NextResponse.json(
      { error: "Webhook secret not configured" },
      { status: 500 }
    );
  }

  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      { error: "Missing stripe-signature header" },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, WEBHOOK_SECRET);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[webhook] Signature verification failed:", message);
    return NextResponse.json(
      { error: `Webhook signature verification failed: ${message}` },
      { status: 400 }
    );
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const order = getOrderBySessionId(session.id);

      if (order) {
        updateOrderStatus(order.id, "paid", {
          paidAt: new Date().toISOString(),
          stripePaymentIntentId: session.payment_intent as string,
        });

        // Fire-and-forget email (don't block webhook response)
        sendOrderConfirmation({ ...order, status: "paid" }).catch((err) =>
          console.error("[webhook] Failed to send confirmation email:", err)
        );
      } else {
        console.warn(
          `[webhook] No order found for session ${session.id}`
        );
      }
      break;
    }

    case "checkout.session.expired": {
      const session = event.data.object as Stripe.Checkout.Session;
      const order = getOrderBySessionId(session.id);
      if (order) {
        updateOrderStatus(order.id, "cancelled");
      }
      break;
    }

    default:
      // Unhandled event type — acknowledge silently
      break;
  }

  return NextResponse.json({ received: true });
}
