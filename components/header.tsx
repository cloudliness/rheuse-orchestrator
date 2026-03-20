"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";

const NAV_LINKS = [
  { label: "Shop", href: "/products" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-20 w-full border-b border-foreground/5 bg-background/95 backdrop-blur-sm transition-shadow duration-200">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 -ml-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
          aria-expanded={mobileNavOpen}
          aria-controls="mobile-nav"
          aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          {mobileNavOpen ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 font-heading text-xl sm:text-2xl text-foreground"
        >
          Rheuse
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          className="hidden lg:flex items-center gap-6"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium font-body text-foreground/80 hover:text-foreground hover:underline hover:underline-offset-4 hover:decoration-primary hover:decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Cart icon */}
        <Link
          href="/cart"
          className="relative p-2 -mr-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
          aria-label={`Shopping bag${cartCount > 0 ? `, ${cartCount} items` : ''}`}
        >
          <ShoppingBag className="size-5" />
          {cartCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-accent text-accent-foreground text-xs font-bold font-body">
              {cartCount > 99 ? '99+' : cartCount}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile nav drawer */}
      {mobileNavOpen && (
        <>
          <div
            className="fixed inset-0 top-16 z-40 bg-foreground/20"
            onClick={() => setMobileNavOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-nav"
            aria-label="Main navigation"
            className="fixed left-0 top-16 z-50 w-64 h-[calc(100vh-64px)] bg-background shadow-lg p-6"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="text-base font-medium font-body text-foreground/80 hover:text-foreground py-3 transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
