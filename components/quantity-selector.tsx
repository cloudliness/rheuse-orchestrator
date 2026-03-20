"use client";

import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
  productName: string;
}

export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
  productName,
}: QuantitySelectorProps) {
  return (
    <div
      className="inline-flex items-center h-8 rounded-lg border border-foreground/20"
      aria-label={`Quantity for ${productName}`}
    >
      <button
        type="button"
        className="flex items-center justify-center w-8 h-8 text-foreground hover:bg-secondary rounded-l-lg transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        <Minus className="size-3.5" />
      </button>
      <span className="flex items-center justify-center w-8 h-8 text-sm font-medium font-body text-foreground select-none">
        {value}
      </span>
      <button
        type="button"
        className="flex items-center justify-center w-8 h-8 text-foreground hover:bg-secondary rounded-r-lg transition-colors duration-150 disabled:opacity-50 disabled:pointer-events-none"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        <Plus className="size-3.5" />
      </button>
    </div>
  );
}
