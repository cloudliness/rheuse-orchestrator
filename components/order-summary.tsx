"use client";

import Link from "next/link";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";

interface OrderSummaryProps {
  editable?: boolean;
}

const FREE_SHIPPING_THRESHOLD = 50;

export default function OrderSummary({ editable = true }: OrderSummaryProps) {
  const { cartItems, subtotal, shipping, total } = useCart();
  const amountToFreeShipping = FREE_SHIPPING_THRESHOLD - subtotal;

  return (
    <aside
      className="bg-secondary rounded-xl p-6 lg:sticky lg:top-24"
      aria-label="Order summary"
    >
      <h2 className="font-heading text-xl text-foreground mb-4">
        {editable ? "Order summary" : "Your order"}
      </h2>

      {/* Read-only item list (checkout view) */}
      {!editable && (
        <ul className="mb-4">
          {cartItems.map((item) => (
            <li
              key={item.product.sku}
              className="flex gap-4 py-3 border-b border-foreground/10 last:border-b-0"
            >
              <div className="w-16 h-16 rounded-lg bg-muted flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground font-body line-clamp-1">
                  {item.product.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Qty: {item.quantity}
                </p>
              </div>
              <span className="text-sm font-medium text-foreground flex-shrink-0 self-start">
                ${(item.product.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Cost breakdown */}
      <div aria-live="polite">
        <div className="flex justify-between text-sm font-body">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm font-body mt-2">
          <span>Shipping</span>
          <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
        </div>

        {/* Free shipping messaging */}
        {subtotal > 0 && amountToFreeShipping > 0 && (
          <p className="text-xs text-muted-foreground mt-2">
            You&apos;re ${amountToFreeShipping.toFixed(2)} away from free
            shipping.
          </p>
        )}
        {subtotal > 0 && amountToFreeShipping <= 0 && (
          <p className="text-xs text-primary font-medium mt-2">
            You&apos;ve earned free shipping.
          </p>
        )}

        <div className="border-t border-foreground/10 my-4" />

        <div className="flex justify-between text-base font-bold font-body">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      {/* CTA (cart page only) */}
      {editable && (
        <>
          <Button
            variant="accent"
            size="lg"
            className="w-full mt-6"
            render={<Link href="/checkout" />}
          >
            Continue to checkout
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Secure checkout powered by Stripe
          </p>
        </>
      )}
    </aside>
  );
}
