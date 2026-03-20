"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart";
import { Button } from "@/components/ui/button";
import QuantitySelector from "@/components/quantity-selector";
import type { Product } from "@/lib/products";

interface AddToCartButtonProps {
  product: Product;
}

export default function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addToCart(product, quantity);
    setAdded(true);
    setQuantity(1);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="mt-6 space-y-4">
      <QuantitySelector
        value={quantity}
        onChange={setQuantity}
        productName={product.name}
      />
      <Button
        variant="primary"
        size="lg"
        className="w-full"
        onClick={handleAdd}
        disabled={added}
      >
        {added ? "Added!" : "Add to bag"}
      </Button>
    </div>
  );
}
