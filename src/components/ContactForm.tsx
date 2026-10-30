"use client";

import { useState } from "react";

/**
 * Geometry mirrors the Figma "Form" frame (1440x268):
 *   text block  x=170 y=91.5  w=464
 *   form block  x=694 y=58    label 20 / field 36 / button 240x52 at y=158
 *   arrow mark  x=1218 y=105  52x58
 */
export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="relative border-b border-ink/10 bg-lilac py-12 lg:py-14 xl:py-0"
    >
      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-6 xl:h-[268px] xl:px-0 xl:pl-[70px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 xl:grid-cols-[464px_520px] xl:gap-[60px]">
          <div className="xl:pt-[91px]">
            <h2 className="font-display text-[28px] font-bold leading-[1.2] text-ink lg:text-[32px]">
              Join Waitlist
            </h2>
            <p className="mt-4 text-[14px] leading-[1.4] text-ink/70 lg:mt-[24px]">
              Do not miss it when we launch
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="w-full lg:max-w-[520px] xl:pt-[58px]"
          >
            <label
              htmlFor="newsletter-email"
              className="block text-[15px] font-medium text-ink"
            >
              Email address
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-[52px] flex-1 rounded-[10px] border border-ink/15 bg-white px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-brand"
              />
              <button
                type="submit"
                className="h-[52px] shrink-0 rounded-[10px] bg-ink px-8 text-[15px] font-bold text-white transition-colors hover:bg-ink-soft sm:w-[180px]"
              >
                Subscribe
              </button>
            </div>
            <p
              role="status"
              className={`mt-3 text-[14px] text-brand ${sent ? "" : "invisible"}`}
            >
              Thanks — you&apos;re on the list.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
