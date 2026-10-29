"use client";

import { useState } from "react";

const CATEGORIES = [
  "Crypto trade or swap",
  "Gift card trade",
  "Bill payment or top-up",
  "Deposit or withdrawal",
  "Account access or verification",
  "Suspected fraud",
  "Something else",
];

const field =
  "mt-2 w-full rounded-[10px] border border-ink/15 bg-white px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-brand";

export default function ComplaintForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div
        role="status"
        className="rounded-[20px] border border-brand/30 bg-brand/5 p-8"
      >
        <h3 className="font-display text-[22px] font-bold text-ink">
          Complaint received
        </h3>
        <p className="mt-3 text-[15px] leading-[1.7] text-ink/80">
          We have logged your complaint and sent a reference number to your
          email. Our team will acknowledge it within one business day and aim to
          resolve it within ten.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-[15px] font-bold text-brand-deep underline underline-offset-2"
        >
          File another complaint
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="rounded-[20px] bg-lilac/50 p-7 lg:p-9"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="complaint-name"
            className="text-[15px] font-medium text-ink"
          >
            Full name
          </label>
          <input
            id="complaint-name"
            name="name"
            required
            autoComplete="name"
            className={`${field} h-[52px]`}
          />
        </div>

        <div>
          <label
            htmlFor="complaint-email"
            className="text-[15px] font-medium text-ink"
          >
            Email address
          </label>
          <input
            id="complaint-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`${field} h-[52px]`}
          />
        </div>

        <div>
          <label
            htmlFor="complaint-category"
            className="text-[15px] font-medium text-ink"
          >
            What is this about?
          </label>
          <select
            id="complaint-category"
            name="category"
            required
            defaultValue=""
            className={`${field} h-[52px]`}
          >
            <option value="" disabled>
              Choose a category
            </option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="complaint-reference"
            className="text-[15px] font-medium text-ink"
          >
            Transaction reference{" "}
            <span className="font-normal text-ink/50">(if you have one)</span>
          </label>
          <input
            id="complaint-reference"
            name="reference"
            className={`${field} h-[52px]`}
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="complaint-details"
          className="text-[15px] font-medium text-ink"
        >
          What happened?
        </label>
        <textarea
          id="complaint-details"
          name="details"
          required
          rows={6}
          placeholder="Tell us what went wrong, when it happened, and what outcome you are looking for."
          className={`${field} resize-y py-3`}
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-[52px] w-full items-center justify-center rounded-[10px] bg-ink px-8 text-[15px] font-bold text-white transition-colors hover:bg-ink-soft sm:w-[220px]"
      >
        Submit complaint
      </button>

      <p className="mt-4 text-[13px] leading-[1.6] text-ink/60">
        We use the details you provide here only to investigate and resolve your
        complaint, as described in our Privacy Policy.
      </p>
    </form>
  );
}
