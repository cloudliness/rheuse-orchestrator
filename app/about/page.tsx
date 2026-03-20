import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "About Rheuse — Why We Make Things That Last",
  description:
    "Rheuse makes premium reusable products from stainless steel, bamboo, glass, and organic cotton. Real materials, honest claims, built for daily life.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
          Why we make things that last
        </h1>

        <div className="max-w-2xl space-y-8">
          <section>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              We started Rheuse with a simple observation: the products you use
              every single day — your water bottle, your coffee cup, your
              shopping bags — shouldn&apos;t be designed to be thrown away. They
              should be designed to be kept.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
              Not kept out of obligation, but because they&apos;re genuinely
              better. Better materials, better in your hand, better for your
              morning and your commute and your kitchen counter. The kind of
              things you&apos;d choose even if sustainability weren&apos;t part
              of the equation.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
              That&apos;s the bar we set for every product in our collection. It
              has to feel like an upgrade — from the weight of the stainless
              steel to the grain of the FSC-certified bamboo. Because the most
              sustainable products are the ones people actually want to use, day
              after day, year after year.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl sm:text-3xl text-foreground mb-4">
              What makes us different
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-xl text-foreground">
                  Materials-first design
                </h3>
                <p className="font-body text-base text-muted-foreground mt-2 leading-relaxed">
                  We start with the material, not the price point. Every product
                  in our range is built around premium, proven materials — 18/8
                  stainless steel, borosilicate glass, GOTS-certified organic
                  cotton, FSC-certified bamboo. We choose what lasts, then
                  design around it.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-foreground">
                  Honest claims, always
                </h3>
                <p className="font-body text-base text-muted-foreground mt-2 leading-relaxed">
                  You won&apos;t find &ldquo;eco-friendly&rdquo; slapped on a
                  label here. Every sustainability claim we make is specific and
                  verifiable: the exact material, the certification, the
                  performance rating. If we can&apos;t back it up, we don&apos;t
                  say it.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-foreground">
                  Designed for real routines
                </h3>
                <p className="font-body text-base text-muted-foreground mt-2 leading-relaxed">
                  Our products are for people with busy mornings, packed bags,
                  and full dishwashers. Leak-proof lids, machine-washable
                  fabrics, dishwasher-safe everything we can manage. Beautiful,
                  yes — but practical first.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-xl text-foreground">
                  Quality that pays for itself
                </h3>
                <p className="font-body text-base text-muted-foreground mt-2 leading-relaxed">
                  A single Rheuse bottle replaces hundreds of disposable ones. A
                  set of silicone food bags is rated for over 3,000 uses each.
                  The upfront cost is fair because the long-term value is
                  enormous.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl sm:text-3xl text-foreground mb-4">
              Our materials promise
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              We&apos;re specific about materials because specifics build trust.
              Every product page lists exactly what it&apos;s made from — the
              grade of steel, the certification on the cotton, the type of
              silicone. We reference industry standards (GOTS, FSC, BPA-free
              ratings) because they mean something verifiable, not just
              &ldquo;green.&rdquo;
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed mt-4">
              We&apos;re not perfect, and we&apos;ll tell you that too. Some of
              our products use nylon bristles or recycled ABS plastic because a
              fully compostable alternative doesn&apos;t exist yet at the
              quality standard we require. When better options emerge,
              we&apos;ll switch. Until then, we&apos;ll be upfront about it.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
