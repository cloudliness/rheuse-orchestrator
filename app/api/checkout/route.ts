import { NextResponse, type NextRequest } from "next/server";
import { stripe } from "@/lib/stripe";
import { createOrder, type Order } from "@/lib/orders";

interface CheckoutLineItem {
  sku: string;
  name: string;
  price: number;
  quantity: number;
}

interface CheckoutBody {
  lineItems: CheckoutLineItem[];
  email: string;
  shippingAddress: {
    firstName: string;
    lastName: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zip: string;
  };
}

const FREE_SHIPPING_THRESHOLD = 50;
const SHIPPING_COST_CENTS = 599; // $5.99

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CheckoutBody;

    // Validate required fields
    if (
      !body.lineItems?.length ||
      !body.email ||
      !body.shippingAddress?.firstName ||
      !body.shippingAddress?.lastName ||
      !body.shippingAddress?.address1 ||
      !body.shippingAddress?.city ||
      !body.shippingAddress?.state ||
      !body.shippingAddress?.zip
    ) {
      return NextResponse.json(
        { error: "Missing required checkout fields" },
        { status: 400 }
      );
    }

    // Build Stripe line items
    const stripeLineItems = body.lineItems.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          metadata: { sku: item.sku },
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    // Calculate subtotal for shipping logic
    const subtotal = body.lineItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shippingCostCents =
      subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST_CENTS;

    // Add shipping as a line item if applicable
    if (shippingCostCents > 0) {
      stripeLineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: "Standard Shipping (5–7 business days)",
            metadata: { sku: "SHIPPING" },
          },
          unit_amount: shippingCostCents,
        },
        quantity: 1,
      });
    }

    // Generate a short order ID
    const orderId = `RH-${Date.now().toString(36).toUpperCase()}`;

    const origin = request.nextUrl.origin;

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      customer_email: body.email,
      line_items: stripeLineItems,
      metadata: { orderId },
      success_url: `${origin}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout`,
    });

    // Create order in our store (status: pending until webhook confirms)
    const shipping = shippingCostCents / 100;
    const total = subtotal + shipping;

    const order: Order = {
      id: orderId,
      stripeSessionId: session.id,
      email: body.email,
      shippingAddress: body.shippingAddress,
      lineItems: body.lineItems.map((item) => ({
        sku: item.sku,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      subtotal,
      shipping,
      total,
      status: "pending",
      createdAt: new Date().toISOString(),
    };

    createOrder(order);

    return NextResponse.json({ url: session.url, orderId });
  } catch (err) {
    console.error("[checkout] Error creating session:", err);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
