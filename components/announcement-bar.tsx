"use client";

import { useCallback, useSyncExternalStore } from "react";
import { X } from "lucide-react";
import Link from "next/link";

const STORAGE_KEY = "rheuse-announcement-dismissed";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): boolean {
  return sessionStorage.getItem(STORAGE_KEY) === "true";
}

function getServerSnapshot(): boolean {
  return false;
}

interface AnnouncementBarProps {
  message: string;
  link?: { text: string; href: string };
}

export default function AnnouncementBar({
  message,
  link,
}: AnnouncementBarProps) {
  const dismissed = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const dismiss = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    window.dispatchEvent(new Event("storage"));
  }, []);

  if (dismissed) return null;

  return (
    <div
      role="banner"
      aria-label="Site announcement"
      className="relative w-full bg-primary text-primary-foreground px-4 py-2"
    >
      <p className="text-xs sm:text-sm font-body font-medium text-center pr-8">
        {message}
        {link && (
          <>
            {" — "}
            <Link
              href={link.href}
              className="underline hover:no-underline"
            >
              {link.text}
            </Link>
          </>
        )}
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label="Dismiss announcement"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground transition-colors duration-150"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
