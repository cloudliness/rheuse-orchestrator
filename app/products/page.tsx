import type { Metadata } from "next";
import AnnouncementBar from "@/components/announcement-bar";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductGrid from "@/components/product-grid";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "All Products — Rheuse",
  description:
    "Browse our full collection of premium reusable essentials. Bottles, cups, utensils, straws, wraps, bags, and personal care — all built to last.",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <>
      <AnnouncementBar
        message="Free shipping on orders over $50"
        link={{ text: "Shop now", href: "/products" }}
      />
      <Header />
      <main className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="font-heading text-3xl sm:text-4xl text-foreground mb-8 sm:mb-12">
          All products
        </h1>
        <p className="text-sm text-muted-foreground font-body mb-6">
          {products.length} products
        </p>
        <ProductGrid products={products} />
      </main>
      <Footer />
    </>
  );
}
