"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQS } from "@/lib/content";

export default function Faqs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" className="bg-lilac py-20 lg:py-[110px]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,380px)_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-[44px] font-black leading-[1.1] text-ink lg:text-[52px]">
              FAQs
            </h2>
            <p className="mt-6 max-w-[380px] text-[16px] leading-[1.7] text-ink/70">
              Didn&apos;t find the answer you need? Contact our support team,
              and we&apos;ll get back to you promptly.
            </p>
            <Link
              href="#contact"
              className="mt-8 inline-flex h-[60px] w-[262px] items-center justify-center rounded-full bg-brand text-[16px] font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Contact Us
            </Link>
          </div>

          <ul className="divide-y divide-ink/10 rounded-[20px] border border-ink/10 bg-white px-5 sm:px-8">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <li key={faq.q}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-start gap-4 py-6 text-left"
                    >
                      <span className="shrink-0 font-display text-[20px] font-bold text-ink/40">
                        {i + 1}.
                      </span>
                      <span className="flex-1 font-display text-[20px] font-bold text-ink">
                        {faq.q}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        className={`mt-1 h-5 w-5 shrink-0 text-ink/50 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    hidden={!isOpen}
                    className="pb-6 pl-10 pr-9 text-[15px] leading-[1.7] text-ink/70"
                  >
                    {faq.a}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
