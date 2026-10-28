import Link from "next/link";
import { LogoMark } from "./Logo";
import { SOCIAL, CONTACT } from "@/lib/content";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#what-you-can-do" },
      { label: "Security", href: "/#why-sonwoh" },
      { label: "How it works", href: "/#how-it-works" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Community",
    links: SOCIAL.map((s) => ({ ...s })),
  },
  {
    title: "Help",
    links: [
      { label: "Live chat", href: "/#contact" },
      { label: "FAQs", href: "/#faqs" },
      { label: CONTACT.support, href: `mailto:${CONTACT.support}` },
      { label: CONTACT.phone, href: CONTACT.phoneHref },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of service", href: "/legal/terms" },
      { label: "Privacy policy", href: "/legal/privacy" },
      { label: "Risk disclosure", href: "/legal/risk-disclosure" },
      { label: "File", href: "/legal/file" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="bg-lilac">
      {/* the green-to-blue hairline that caps the footer in the design */}
      <div className="h-[3px] w-full bg-gradient-to-r from-brand via-brand to-accent" />

      <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-6 lg:px-0 lg:py-[60px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,260px)_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Sonwoh home">
              <LogoMark className="h-10 w-10" />
              <span className="font-display text-[28px] font-bold tracking-tight text-ink">
                sonwoh
              </span>
            </Link>
            <p className="mt-5 max-w-[240px] text-[14px] leading-[1.6] text-ink/80">
              One app for crypto, gift cards, and everyday bills. Built for how
              people actually move money.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h2 className="text-[15px] font-bold text-ink">{col.title}</h2>
                <ul className="mt-5 space-y-[18px]">
                  {col.links.map((link) => {
                    const external = link.href.startsWith("http");
                    const className =
                      "text-[14px] text-ink/80 transition-colors hover:text-brand";
                    return (
                      <li key={link.label}>
                        {external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={className}
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link href={link.href} className={className}>
                            {link.label}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 h-[2px] w-full bg-gradient-to-r from-brand to-ink" />

        <div className="mt-7 flex flex-col gap-4 text-[14px] text-ink/80 lg:flex-row lg:items-start lg:justify-between">
          <p>© 2026 Sonwoh. All rights reserved.</p>
          <p className="max-w-[460px] leading-[1.6]">
            Cryptocurrency products carry risk, including loss of value. Please
            read our{" "}
            <Link
              href="/legal/risk-disclosure"
              className="underline underline-offset-2 transition-colors hover:text-brand"
            >
              risk disclosure
            </Link>{" "}
            and{" "}
            <Link
              href="/legal/terms"
              className="underline underline-offset-2 transition-colors hover:text-brand"
            >
              terms
            </Link>{" "}
            before using Sonwoh.
          </p>
        </div>
      </div>
    </footer>
  );
}
