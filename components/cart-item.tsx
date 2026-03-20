"use client";

import Link from "next/link";
import { useCart, type CartItem as CartItemType } from "@/lib/cart";
import { getCategorySlug } from "@/lib/products";
import QuantitySelector from "@/components/quantity-selector";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  const categorySlug = getCategorySlug(product.category);
  const linePrice = product.price * quantity;

  return (
    <li className="flex gap-4 py-6 border-b border-foreground/10">
      {/* Image placeholder */}
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-muted flex-shrink-0" />

      {/* Info area */}
      <div className="flex-1 min-w-0">
        <Link
          href={`/products/${categorySlug}/${product.slug}`}
          className="text-sm font-medium text-foreground font-body line-clamp-2 hover:underline hover:underline-offset-4"
        >
          {product.name}
        </Link>
        <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
          {product.ecoClaim.split(";")[0].trim()}
        </p>

        {/* Bottom row */}
        <div className="flex items-center justify-between mt-3">
          <QuantitySelector
            value={quantity}
            onChange={(n) => updateQuantity(product.sku, n)}
            productName={product.name}
          />
          <span className="text-sm font-bold text-foreground font-body">
            ${linePrice.toFixed(2)}
          </span>
        </div>

        {/* Remove */}
        <button
          type="button"
          className="text-xs text-muted-foreground underline hover:text-destructive mt-1 transition-colors duration-150"
          onClick={() => removeFromCart(product.sku)}
          aria-label={`Remove ${product.name} from bag`}
        >
          Remove
        </button>
      </div>
    </li>
  );
}
