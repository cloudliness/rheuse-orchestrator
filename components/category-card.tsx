import Link from "next/link";

interface CategoryCardProps {
  category: { name: string; slug: string; count: number };
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group relative block rounded-xl overflow-hidden aspect-square focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      aria-label={`Shop ${category.name} — ${category.count} products`}
    >
      {/* Placeholder image background */}
      <div className="w-full h-full bg-muted transition-transform duration-300 ease-in-out motion-safe:group-hover:scale-105" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-colors duration-300" />

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <span className="text-lg font-heading text-white block">
          {category.name}
        </span>
        <span className="text-sm font-body text-white/80">
          {category.count} {category.count === 1 ? "product" : "products"}
        </span>
      </div>
    </Link>
  );
}
