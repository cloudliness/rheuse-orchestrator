import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] flex items-center bg-secondary">
      <div className="relative mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight">
            Beautiful routines start with better things.
          </h1>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl font-body text-foreground/80 max-w-lg">
            Premium reusables designed for real life. Gorgeous materials, lasting
            quality, and nothing you&apos;ll ever throw away.
          </p>
          <div className="mt-6 sm:mt-8">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 rounded-lg font-body font-bold tracking-wide whitespace-nowrap transition-colors duration-150 ease-in-out outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 h-12 px-6 py-3 text-base"
            >
              Shop the collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
