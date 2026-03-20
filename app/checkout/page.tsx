"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Lock, RotateCcw, Truck, ShieldCheck } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import OrderSummary from "@/components/order-summary";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
  "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",
  "DC",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ZIP_RE = /^[0-9]{5}(-[0-9]{4})?$/;

interface FormErrors {
  email?: string;
  firstName?: string;
  lastName?: string;
  address1?: string;
  city?: string;
  state?: string;
  zip?: string;
}

export default function CheckoutPage() {
  const { cartItems, shipping } = useCart();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Checkout | Rheuse";
  }, []);

  // Redirect to cart if empty
  useEffect(() => {
    if (cartItems.length === 0) {
      router.replace("/cart");
    }
  }, [cartItems.length, router]);

  function validate(): FormErrors {
    const e: FormErrors = {};
    if (!email.trim()) e.email = "This field is required.";
    else if (!EMAIL_RE.test(email)) e.email = "Please enter a valid email address.";
    if (!firstName.trim()) e.firstName = "This field is required.";
    if (!lastName.trim()) e.lastName = "This field is required.";
    if (!address1.trim()) e.address1 = "This field is required.";
    if (!city.trim()) e.city = "This field is required.";
    if (!state) e.state = "Please select a state.";
    if (!zip.trim()) e.zip = "This field is required.";
    else if (!ZIP_RE.test(zip)) e.zip = "Please enter a valid ZIP code.";
    return e;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    const validationErrors = validate();
    setErrors(validationErrors);
  }

  if (cartItems.length === 0) return null;

  const inputClass =
    "h-10 w-full px-3 py-2 rounded-lg border border-foreground/20 bg-background text-foreground text-base sm:text-sm font-body placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none";
  const errorInputClass =
    "h-10 w-full px-3 py-2 rounded-lg border-2 border-destructive bg-background text-foreground text-base sm:text-sm font-body placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none";

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Checkout title */}
        <div className="pt-6 sm:pt-8 pb-6 sm:pb-8">
          <h1 className="font-heading text-3xl sm:text-4xl text-foreground">
            Checkout
          </h1>
        </div>

        {/* Checkout content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">
          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            {/* Contact Information */}
            <fieldset>
              <legend className="font-heading text-xl text-foreground mb-4">
                Contact information
              </legend>
              <div>
                <label
                  htmlFor="checkout-email"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Email address
                </label>
                <input
                  id="checkout-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={
                    submitted && errors.email ? errorInputClass : inputClass
                  }
                  aria-required="true"
                  aria-invalid={submitted && !!errors.email}
                  aria-describedby="email-helper email-error"
                />
                <p id="email-helper" className="text-xs text-muted-foreground mt-1">
                  We&apos;ll send your order confirmation here
                </p>
                {submitted && errors.email && (
                  <p id="email-error" className="text-sm text-destructive mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
            </fieldset>

            {/* Shipping Address */}
            <fieldset>
              <legend className="font-heading text-xl text-foreground mb-4">
                Shipping address
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First name */}
                <div>
                  <label
                    htmlFor="checkout-first-name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    First name
                  </label>
                  <input
                    id="checkout-first-name"
                    type="text"
                    autoComplete="given-name"
                    placeholder="Jane"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className={
                      submitted && errors.firstName
                        ? errorInputClass
                        : inputClass
                    }
                    aria-required="true"
                    aria-invalid={submitted && !!errors.firstName}
                    aria-describedby="first-name-error"
                  />
                  {submitted && errors.firstName && (
                    <p
                      id="first-name-error"
                      className="text-sm text-destructive mt-1"
                    >
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last name */}
                <div>
                  <label
                    htmlFor="checkout-last-name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Last name
                  </label>
                  <input
                    id="checkout-last-name"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Appleseed"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className={
                      submitted && errors.lastName
                        ? errorInputClass
                        : inputClass
                    }
                    aria-required="true"
                    aria-invalid={submitted && !!errors.lastName}
                    aria-describedby="last-name-error"
                  />
                  {submitted && errors.lastName && (
                    <p
                      id="last-name-error"
                      className="text-sm text-destructive mt-1"
                    >
                      {errors.lastName}
                    </p>
                  )}
                </div>

                {/* Address line 1 */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="checkout-address1"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Address
                  </label>
                  <input
                    id="checkout-address1"
                    type="text"
                    autoComplete="address-line1"
                    placeholder="123 Main St"
                    value={address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    className={
                      submitted && errors.address1
                        ? errorInputClass
                        : inputClass
                    }
                    aria-required="true"
                    aria-invalid={submitted && !!errors.address1}
                    aria-describedby="address1-error"
                  />
                  {submitted && errors.address1 && (
                    <p
                      id="address1-error"
                      className="text-sm text-destructive mt-1"
                    >
                      {errors.address1}
                    </p>
                  )}
                </div>

                {/* Address line 2 */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="checkout-address2"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Apartment, suite, etc. (optional)
                  </label>
                  <input
                    id="checkout-address2"
                    type="text"
                    autoComplete="address-line2"
                    placeholder="Apt 4B"
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    className={inputClass}
                  />
                </div>

                {/* City */}
                <div>
                  <label
                    htmlFor="checkout-city"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    City
                  </label>
                  <input
                    id="checkout-city"
                    type="text"
                    autoComplete="address-level2"
                    placeholder="Portland"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className={
                      submitted && errors.city ? errorInputClass : inputClass
                    }
                    aria-required="true"
                    aria-invalid={submitted && !!errors.city}
                    aria-describedby="city-error"
                  />
                  {submitted && errors.city && (
                    <p
                      id="city-error"
                      className="text-sm text-destructive mt-1"
                    >
                      {errors.city}
                    </p>
                  )}
                </div>

                {/* State */}
                <div>
                  <label
                    htmlFor="checkout-state"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    State
                  </label>
                  <select
                    id="checkout-state"
                    autoComplete="address-level1"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className={
                      submitted && errors.state
                        ? "h-10 w-full px-3 py-2 rounded-lg border-2 border-destructive bg-background text-foreground text-base sm:text-sm font-body focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                        : "h-10 w-full px-3 py-2 rounded-lg border border-foreground/20 bg-background text-foreground text-base sm:text-sm font-body focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none"
                    }
                    aria-required="true"
                    aria-invalid={submitted && !!errors.state}
                    aria-describedby="state-error"
                  >
                    <option value="" disabled>
                      Select state
                    </option>
                    {US_STATES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {submitted && errors.state && (
                    <p
                      id="state-error"
                      className="text-sm text-destructive mt-1"
                    >
                      {errors.state}
                    </p>
                  )}
                </div>

                {/* ZIP code */}
                <div>
                  <label
                    htmlFor="checkout-zip"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    ZIP code
                  </label>
                  <input
                    id="checkout-zip"
                    type="text"
                    autoComplete="postal-code"
                    inputMode="numeric"
                    placeholder="97201"
                    value={zip}
                    onChange={(e) => setZip(e.target.value)}
                    className={
                      submitted && errors.zip ? errorInputClass : inputClass
                    }
                    aria-required="true"
                    aria-invalid={submitted && !!errors.zip}
                    aria-describedby="zip-error"
                  />
                  {submitted && errors.zip && (
                    <p
                      id="zip-error"
                      className="text-sm text-destructive mt-1"
                    >
                      {errors.zip}
                    </p>
                  )}
                </div>

                <p className="text-xs text-muted-foreground mt-2 sm:col-span-2">
                  Currently shipping within the United States only
                </p>
              </div>
            </fieldset>

            {/* Shipping Method */}
            <fieldset>
              <legend className="font-heading text-xl text-foreground mb-4">
                Shipping method
              </legend>
              <div className="rounded-xl border border-foreground/10 p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="shipping-method"
                    value="standard"
                    defaultChecked
                    className="mt-0.5"
                  />
                  <div className="flex-1">
                    <span className="text-sm font-medium text-foreground font-body">
                      Standard Shipping
                    </span>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      5–7 business days
                    </p>
                  </div>
                  <span className="text-sm font-medium text-foreground font-body flex-shrink-0">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </span>
                </label>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                Free shipping on orders over $50
              </p>
            </fieldset>

            {/* Place Order */}
            <Button
              type="submit"
              variant="accent"
              size="lg"
              className="w-full mt-8"
              aria-disabled="true"
              disabled
            >
              Checkout coming soon
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-2">
              We&apos;re putting the finishing touches on our checkout
              experience. Hang tight — it&apos;ll be worth the wait.
            </p>
          </form>

          {/* Order Summary (read-only) */}
          <OrderSummary editable={false} />
        </div>

        {/* Trust Signals */}
        <div className="py-8 flex flex-wrap justify-center gap-6 sm:gap-8">
          <span className="flex items-center gap-2 text-xs text-muted-foreground font-body">
            <Lock className="size-4 text-muted-foreground" />
            Secure checkout
          </span>
          <span className="flex items-center gap-2 text-xs text-muted-foreground font-body">
            <RotateCcw className="size-4 text-muted-foreground" />
            Free returns within 30 days
          </span>
          <span className="flex items-center gap-2 text-xs text-muted-foreground font-body">
            <Truck className="size-4 text-muted-foreground" />
            Free shipping over $50
          </span>
          <span className="flex items-center gap-2 text-xs text-muted-foreground font-body">
            <ShieldCheck className="size-4 text-muted-foreground" />
            Stripe-powered payments
          </span>
        </div>
      </main>
      <Footer />
    </>
  );
}
