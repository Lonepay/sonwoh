"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/crypto", label: "Crypto" },
  { href: "/gift-cards", label: "Giftcards" },
  { href: "/refill", label: "Refill" },
  { href: "/about", label: "About Us" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-lilac/80 px-4 pt-4 pb-3 backdrop-blur-md sm:px-6 lg:px-[100px]">
      <nav className="mx-auto flex h-[66px] max-w-[1240px] items-center justify-between rounded-full bg-white px-5 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.25)] lg:h-[78px] lg:px-6">
        <Logo />

        <ul className="hidden items-center gap-[50px] lg:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-[16px] transition-colors hover:text-brand ${
                    active ? "font-bold text-ink" : "font-medium text-ink/70"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            href="#get-the-app"
            className="hidden h-11 w-[176px] items-center justify-center rounded-full bg-ink text-[16px] font-bold text-white transition-colors hover:bg-ink-soft sm:inline-flex"
          >
            Get App
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" strokeWidth={2} stroke="currentColor" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        hidden={!open}
        className="mx-auto mt-2 max-w-[1240px] overflow-hidden rounded-3xl bg-white p-4 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.25)] lg:hidden"
      >
        <ul className="flex flex-col">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-3 text-[16px] font-medium text-ink hover:bg-lilac"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="#get-the-app"
          onClick={() => setOpen(false)}
          className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full bg-ink text-[16px] font-bold text-white"
        >
          Get App
        </Link>
      </div>
    </header>
  );
}
