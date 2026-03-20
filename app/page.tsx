import Link from "next/link";
import AnnouncementBar from "@/components/announcement-bar";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import CategoryCard from "@/components/category-card";
import ProductGrid from "@/components/product-grid";
import Footer from "@/components/footer";
import NewsletterForm from "@/components/newsletter-form";
import { getAllProducts, getCategories } from "@/lib/products";

export default function Home() {
  const allProducts = getAllProducts();
  const categories = getCategories();
  const featuredProducts = allProducts.slice(0, 4);

  return (
    <>
      <AnnouncementBar
        message="Free shipping on orders over $50"
        link={{ text: "Shop now", href: "/products" }}
      />
      <Header />

      <main>
        {/* Hero */}
        <HeroSection />

        {/* Category Grid */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl sm:text-4xl text-center mb-8 sm:mb-12">
              Everything you need — nothing you&apos;ll waste
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {categories.map((category) => (
                <CategoryCard key={category.slug} category={category} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="w-full bg-secondary py-12 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-3xl sm:text-4xl text-center mb-8 sm:mb-12">
              Bestsellers worth reaching for
            </h2>
            <ProductGrid products={featuredProducts} />
            <div className="mt-8 text-center">
              <Link
                href="/products"
                className="text-sm font-medium font-body text-primary underline underline-offset-4 hover:text-primary/80 transition-colors duration-150"
              >
                View all products &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Value Props */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl">Built to last</h3>
                <p className="font-body text-sm text-muted-foreground mt-2 max-w-xs mx-auto">
                  Every product is made from premium materials — stainless steel,
                  borosilicate glass, FSC-certified bamboo — designed to handle
                  years of daily use.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2 2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl">Honestly made</h3>
                <p className="font-body text-sm text-muted-foreground mt-2 max-w-xs mx-auto">
                  No vague claims. We tell you exactly what each product is made
                  from, where it&apos;s sourced, and how long it&apos;ll last.
                  Specific materials, specific benefits.
                </p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-10 h-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="7" rx="2" />
                    <path d="M16 3h-8v4h8z" />
                    <path d="M12 11v4" />
                  </svg>
                </div>
                <h3 className="font-heading text-xl">Free shipping over $50</h3>
                <p className="font-body text-sm text-muted-foreground mt-2 max-w-xs mx-auto">
                  Orders over $50 ship free across the US. Carefully packed,
                  promptly shipped, beautifully delivered.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="w-full bg-primary py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto text-center">
              <h2 className="font-heading text-3xl text-primary-foreground">
                Good things, straight to your inbox
              </h2>
              <p className="font-body text-sm text-primary-foreground/80 mt-3">
                New arrivals, restocks, and the occasional behind-the-scenes
                story. No spam, no guilt trips — just things worth knowing about.
              </p>
              <NewsletterForm />
              <p className="text-xs font-body text-primary-foreground/60 mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
