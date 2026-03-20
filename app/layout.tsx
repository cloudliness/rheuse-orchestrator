import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { CartProvider } from "@/lib/cart";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rheuse | Premium Reusable Essentials — Made to Be Kept",
  description:
    "Shop beautifully designed reusable bottles, utensils, cups, bags, and more. Premium materials, built to last. Free US shipping over $50.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn(
        dmSerifDisplay.variable,
        dmSans.variable,
        jetBrainsMono.variable
      )}
    >
      <body className="font-body antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
