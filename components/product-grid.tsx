import ProductCard from "@/components/product-card";
import { type Product } from "@/lib/products";

interface ProductGridProps {
  products: Product[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground font-body">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.sku} product={product} />
      ))}
    </div>
  );
}
