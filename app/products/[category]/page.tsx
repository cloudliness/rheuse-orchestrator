import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductGrid from "@/components/product-grid";
import {
  getProductsByCategory,
  getCategories,
  getCategoryName,
} from "@/lib/products";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return getCategories().map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryName = getCategoryName(category);
  if (!categoryName) return {};

  return {
    title: `${categoryName} — Rheuse`,
    description: `Shop premium reusable ${categoryName.toLowerCase()}. Built to last from quality materials.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryName = getCategoryName(category);

  if (!categoryName) {
    notFound();
  }

  const products = getProductsByCategory(category);

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="pt-4 pb-2 text-sm font-body text-muted-foreground"
        >
          <ol className="flex items-center">
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
                href="/products"
                className="hover:text-foreground transition-colors duration-150"
              >
                Products
              </Link>
            </li>
            <li>
              <span className="mx-1.5 text-muted-foreground/50">›</span>
            </li>
            <li>
              <span className="text-foreground font-medium">{categoryName}</span>
            </li>
          </ol>
        </nav>

        {/* Category header */}
        <div className="pt-2 pb-6 sm:pb-8">
          <h1 className="font-heading text-3xl sm:text-4xl text-foreground">
            {categoryName}
          </h1>
          <p className="text-sm text-muted-foreground font-body mt-1">
            {products.length} {products.length === 1 ? "product" : "products"}
          </p>
        </div>

        {/* Product grid */}
        <div className="pb-12 sm:pb-16 lg:pb-20">
          <ProductGrid products={products} />
        </div>
      </main>
      <Footer />
    </>
  );
}
