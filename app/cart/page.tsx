"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import CartItemRow from "@/components/cart-item";
import OrderSummary from "@/components/order-summary";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";

export default function CartPage() {
  const { cartItems, cartCount } = useCart();

  useEffect(() => {
    document.title = "Your Bag | Rheuse";
  }, []);

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Cart title */}
        <div className="pt-6 sm:pt-8 pb-6 sm:pb-8">
          <h1 className="font-heading text-3xl sm:text-4xl text-foreground">
            Your bag
          </h1>
          {cartCount > 0 && (
            <p className="text-sm text-muted-foreground font-body mt-1">
              ({cartCount} {cartCount === 1 ? "item" : "items"})
            </p>
          )}
        </div>

        {cartItems.length === 0 ? (
          /* Empty state */
          <div className="text-center py-16">
            <ShoppingBag className="mx-auto size-20 text-muted-foreground/50" />
            <h2 className="font-heading text-2xl text-foreground mt-4">
              Your bag is empty
            </h2>
            <p className="font-body text-sm text-muted-foreground mt-2">
              Looks like you haven&apos;t added anything yet. Browse our
              collection to find reusables you&apos;ll reach for every day.
            </p>
            <Button
              variant="primary"
              size="default"
              className="mt-6"
              render={<Link href="/products" />}
            >
              Shop the collection
            </Button>
          </div>
        ) : (
          <>
            {/* Cart content */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">
              {/* Items list */}
              <ul aria-label="Cart items">
                {cartItems.map((item) => (
                  <CartItemRow key={item.product.sku} item={item} />
                ))}
              </ul>

              {/* Order summary */}
              <OrderSummary editable />
            </div>

            {/* Continue shopping */}
            <div className="py-8 text-center">
              <Link
                href="/products"
                className="text-sm font-medium text-primary font-body underline underline-offset-4 hover:text-primary/80 transition-colors duration-150"
              >
                &larr; Continue shopping
              </Link>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
