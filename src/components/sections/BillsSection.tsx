import Link from "next/link";
import Icon from "@/components/Icon";
import { BILL_TYPES } from "@/lib/content";

export default function BillsSection() {
  return (
    <section className="relative overflow-hidden bg-brand py-16 lg:py-[100px]">
      {/* the soft chevron weave that fills this panel in the design */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #ffffff 0 2px, transparent 2px 16px), repeating-linear-gradient(45deg, #ffffff 0 2px, transparent 2px 16px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        <div className="lg:grid lg:grid-cols-2 lg:gap-10">
          <div className="lg:col-start-2">
            <h2 className="font-display text-[34px] font-black leading-[1.2] text-white lg:text-[42px]">
              Simplify Your Everyday
              <br />
              Bill Payments
            </h2>
            <p className="mt-5 max-w-[420px] text-[15px] leading-[1.6] text-white/90">
              Complete all your essential payments in seconds with fast
              processing and secure transactions.
            </p>

            <ul className="mt-6 space-y-2">
              {BILL_TYPES.map((bill) => (
                <li
                  key={bill}
                  className="flex items-center gap-2 text-[15px] text-white"
                >
                  <Icon
                    name="check"
                    className="h-[15px] w-[15px] shrink-0"
                    strokeWidth={2}
                  />
                  {bill}
                </li>
              ))}
            </ul>

            <Link
              href="/refill"
              className="mt-8 inline-flex h-[52px] w-[188px] items-center justify-center rounded-[10px] bg-ink text-[16px] font-bold text-white transition-colors hover:bg-ink-soft"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
