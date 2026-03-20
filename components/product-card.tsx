import Link from "next/link";
import { type Product, getCategorySlug } from "@/lib/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const categorySlug = getCategorySlug(product.category);

  return (
    <div className="group relative flex flex-col rounded-xl bg-background shadow hover:shadow-md transition-shadow duration-200 ease-in-out overflow-hidden">
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <div className="w-full h-full bg-muted transition-transform duration-300 ease-in-out motion-safe:group-hover:scale-105" />
      </div>

      {/* Content area */}
      <div className="flex flex-col gap-2 p-4">
        {/* Title with stretched link */}
        <Link
          href={`/products/${categorySlug}/${product.slug}`}
          className="text-sm font-medium text-foreground font-body line-clamp-2 after:absolute after:inset-0"
        >
          {product.name}
        </Link>

        {/* Eco claim badge */}
        <span className="inline-flex items-center self-start rounded-full px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 text-xs font-medium font-body truncate max-w-full">
          {product.ecoClaim.split(";")[0].trim()}
        </span>

        {/* Price */}
        <span className="text-lg font-bold text-foreground font-body">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
