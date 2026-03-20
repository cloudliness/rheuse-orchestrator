import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductCard from "@/components/product-card";
import { Button } from "@/components/ui/button";
import {
  getAllProducts,
  getProductBySlug,
  getProductsByCategory,
  getCategoryName,
  getCategorySlug,
} from "@/lib/products";

interface ProductPageProps {
  params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
  return getAllProducts().map((product) => ({
    category: getCategorySlug(product.category),
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProductBySlug(category, slug);
  if (!product) return {};

  return {
    title: `${product.name} — Rheuse`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { category, slug } = await params;
  const product = getProductBySlug(category, slug);

  if (!product) {
    notFound();
  }

  const categoryName = getCategoryName(category);
  const relatedProducts = getProductsByCategory(category)
    .filter((p) => p.sku !== product.sku)
    .slice(0, 4);

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="pt-4 pb-4 sm:pb-6 text-sm font-body text-muted-foreground"
        >
          <ol className="flex items-center flex-wrap">
            <li>
              <Link
                href="/"
                className="hover:text-foreground transition-colors duration-150"
              >
                Home
              </Link>
            </li>
            <li>
              <span className="mx-1.5 text-muted-foreground/50">›</span>
            </li>
            <li>
              <Link
                href={`/products/${category}`}
                className="hover:text-foreground transition-colors duration-150"
              >
                {categoryName}
              </Link>
            </li>
            <li>
              <span className="mx-1.5 text-muted-foreground/50">›</span>
            </li>
            <li>
              <span className="text-foreground font-medium">
                {product.name}
              </span>
            </li>
          </ol>
        </nav>

        {/* Product main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start pb-12 sm:pb-16">
          {/* Image */}
          <div className="aspect-square rounded-xl overflow-hidden bg-muted" />

          {/* Info */}
          <div>
            {/* Category badge */}
            <span className="inline-flex items-center rounded-full px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium font-body">
              {categoryName}
            </span>

            {/* Product name */}
            <h1 className="font-heading text-2xl sm:text-3xl text-foreground mt-2">
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-lg font-bold text-foreground font-body mt-2">
              ${product.price.toFixed(2)}
            </p>

            {/* Short description */}
            <p className="font-body text-base text-muted-foreground mt-3">
              {product.shortDescription}
            </p>

            {/* Eco claims */}
            <div className="flex flex-wrap gap-1.5 mt-3">
              {product.ecoClaim.split(";").map((claim) => (
                <span
                  key={claim.trim()}
                  className="inline-flex items-center rounded-full px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 text-xs font-medium font-body"
                >
                  {claim.trim()}
                </span>
              ))}
            </div>

            {/* Material */}
            <div className="mt-6 pt-6 border-t border-foreground/10">
              <h2 className="text-sm font-bold font-body text-foreground uppercase tracking-wider">
                Material
              </h2>
              <p className="font-body text-sm text-muted-foreground mt-1">
                {product.material}
              </p>
            </div>

            {/* Add to cart (disabled) */}
            <Button
              variant="primary"
              size="lg"
              className="w-full mt-6"
              disabled
            >
              Coming Soon
            </Button>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="pb-12 sm:pb-16 lg:pb-20">
            <h2 className="font-heading text-2xl sm:text-3xl text-foreground mb-6 sm:mb-8">
              You might also like
            </h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 xl:grid-cols-4">
              {relatedProducts.map((p) => (
                <ProductCard key={p.sku} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
