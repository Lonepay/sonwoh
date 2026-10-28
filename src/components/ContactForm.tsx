"use client";

import { useState } from "react";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="border-b border-ink/10 bg-white py-14">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-[30px] font-bold leading-[1.2] text-ink">
              Stay in the loop
            </h2>
            <p className="mt-3 text-[15px] text-ink/70">
              New assets, new billers and product updates — about once a month,
              never more.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="w-full"
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
