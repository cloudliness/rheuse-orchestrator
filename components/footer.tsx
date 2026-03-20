"use client";

import Link from "next/link";
import NewsletterForm from "@/components/newsletter-form";

const SHOP_LINKS = [
  { label: "Bottles", href: "/products/bottles" },
  { label: "Cups", href: "/products/cups" },
  { label: "Utensils", href: "/products/utensils" },
  { label: "Straws", href: "/products/straws" },
  { label: "Wraps", href: "/products/wraps" },
  { label: "Bags", href: "/products/bags" },
  { label: "Personal Care", href: "/products/personal-care" },
];

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground py-12 sm:py-16 lg:py-20" role="contentinfo">
      <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Shop */}
          <nav aria-label="Shop links">
            <h3 className="text-sm font-bold font-body text-background uppercase tracking-wider mb-4">
              Shop
            </h3>
            <ul className="space-y-2">
              {SHOP_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-background/70 hover:text-background transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <h3 className="text-sm font-bold font-body text-background uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-body text-background/70 hover:text-background transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Brand info */}
          <div>
            <h3 className="text-sm font-bold font-body text-background uppercase tracking-wider mb-4">
              About Rheuse
            </h3>
            <p className="text-sm font-body text-background/70">
              Premium reusables designed for real life. Gorgeous materials,
              lasting quality, and nothing you&apos;ll ever throw away.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-heading text-background mb-2">
              Stay in the loop
            </h3>
            <p className="text-sm font-body text-background/70 mb-4">
              New arrivals, restocks, and behind-the-scenes stories.
            </p>
            <NewsletterForm variant="footer" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-background/10 text-center">
          <p className="text-xs font-body text-background/50">
            &copy; {new Date().getFullYear()} Rheuse. Made to be kept.
          </p>
        </div>
      </div>
    </footer>
  );
}
