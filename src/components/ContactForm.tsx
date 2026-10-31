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
              htmlFor="waitlist-email"
              className="block text-[14px] font-medium leading-[20px] text-ink"
            >
              Email
            </label>

            <input
              id="waitlist-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 h-[36px] w-full rounded-[6px] border border-ink/15 bg-white px-3 text-[14px] text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
            />

            <button
              type="submit"
              className="mt-[40px] h-[52px] w-full rounded-[8px] bg-accent text-[15px] font-medium text-white transition-opacity hover:opacity-90 sm:w-[240px]"
            >
              Submit
            </button>

            <p
              role="status"
              className={`mt-3 text-[14px] text-accent ${
                sent ? "" : "invisible"
              }`}
            >
              Thanks — you&apos;re on the waitlist.
            </p>
          </form>
        </div>

        {/* the blue arrow mark that sits beside the field */}
        <svg
          aria-hidden
          viewBox="0 0 52 58"
          className="pointer-events-none absolute right-[56px] top-[105px] hidden h-[58px] w-[52px] text-accent xl:block"
          fill="currentColor"
        >
          <path d="M50.3 2.6c1.1.7 1.7 1.9 1.7 3.2v46.4c0 1.3-.6 2.5-1.7 3.2-1.1.6-2.4.6-3.5 0L2.9 32.2C1.8 31.6 1.1 30.4 1.1 29s.7-2.6 1.8-3.2L46.8 2.6c1.1-.6 2.4-.6 3.5 0Z" />
        </svg>
      </div>
    </section>
  );
}
