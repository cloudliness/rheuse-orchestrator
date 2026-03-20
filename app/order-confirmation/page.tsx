import { notFound } from "next/navigation";
import { CheckCircle, Package, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";

interface OrderConfirmationPageProps {
  searchParams: Promise<{ session_id?: string }>;
}

export const metadata = {
  title: "Order Confirmed | Rheuse",
  description: "Your Rheuse order has been confirmed. Thank you for choosing reusable!",
};

export default async function OrderConfirmationPage({
  searchParams,
}: OrderConfirmationPageProps) {
  const params = await searchParams;
  const sessionId = params.session_id;

  if (!sessionId) {
    notFound();
  }

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ["line_items"],
    });
  } catch {
    notFound();
  }

  if (session.payment_status !== "paid") {
    notFound();
  }

  const orderId = session.metadata?.orderId ?? "—";
  const email = session.customer_email ?? session.customer_details?.email ?? "";
  const lineItems = session.line_items?.data ?? [];
  const amountTotal = (session.amount_total ?? 0) / 100;

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[700px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-primary/10 p-4">
            <CheckCircle className="size-12 text-primary" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-heading text-3xl sm:text-4xl text-foreground text-center">
          Thank you for your order!
        </h1>
        <p className="text-center text-muted-foreground mt-3 font-body">
          Order <span className="font-medium text-foreground">{orderId}</span> has
          been confirmed.
        </p>

        {/* Email notice */}
        <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground font-body">
          <Mail className="size-4" />
          <span>A confirmation has been sent to <strong className="text-foreground">{email}</strong></span>
        </div>

        {/* Order details */}
        <div className="mt-10 rounded-xl border border-foreground/10 bg-secondary p-6">
          <h2 className="font-heading text-lg text-foreground mb-4">Order details</h2>

          <ul className="divide-y divide-foreground/10">
            {lineItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between py-3 text-sm font-body"
              >
                <span className="text-foreground">
                  {item.description}{" "}
                  <span className="text-muted-foreground">×{item.quantity}</span>
                </span>
                <span className="text-foreground font-medium">
                  ${((item.amount_total ?? 0) / 100).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <div className="border-t border-foreground/10 mt-2 pt-4 flex justify-between text-base font-bold font-body">
            <span>Total</span>
            <span>${amountTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* What's next */}
        <div className="mt-8 rounded-xl border border-foreground/10 p-6 space-y-4">
          <h2 className="font-heading text-lg text-foreground">What happens next</h2>
          <div className="flex items-start gap-3 text-sm font-body text-muted-foreground">
            <Package className="size-5 text-primary mt-0.5 flex-shrink-0" />
            <p>
              We&apos;re preparing your order for shipment. You&apos;ll receive tracking
              information via email within 1–2 business days.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
          <Button variant="accent" size="lg" render={<Link href="/products" />}>
            Continue shopping
            <ArrowRight className="size-4" />
          </Button>
          <Button variant="outline" size="lg" render={<Link href="/" />}>
            Back to home
          </Button>
        </div>

        {/* Eco affirmation */}
        <p className="text-center text-xs text-muted-foreground mt-10 font-body">
          Every Rheuse product you choose means fewer single-use items in our
          landfills. Thank you for making a difference. 🌿
        </p>
      </main>
      <Footer />
    </>
  );
}
