"use client";

import { type FormEvent } from "react";
import { Button } from "@/components/ui/button";

interface NewsletterFormProps {
  variant?: "default" | "footer";
}

export default function NewsletterForm({
  variant = "default",
}: NewsletterFormProps) {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  if (variant === "footer") {
    return (
      <form
        onSubmit={handleSubmit}
        aria-label="Newsletter signup"
        className="flex flex-col sm:flex-row gap-2"
      >
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          type="email"
          required
          placeholder="Your email"
          className="flex-1 h-10 px-3 py-2 rounded-lg border border-background/20 bg-background text-foreground text-base sm:text-sm font-body placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors duration-200"
        />
        <Button type="submit" variant="secondary" size="default">
          Subscribe
        </Button>
      </form>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Newsletter signup"
      className="mt-6 flex flex-col sm:flex-row gap-3"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Your email"
        className="flex-1 h-10 px-3 py-2 rounded-lg bg-background text-foreground text-base sm:text-sm font-body placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors duration-200"
      />
      <Button type="submit" variant="secondary" size="default">
        Sign up
      </Button>
    </form>
  );
}
