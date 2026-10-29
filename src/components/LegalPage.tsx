import Link from "next/link";

/** The date these documents took effect, shown on every legal page. */
export const LEGAL_EFFECTIVE_DATE = "1st January, 2026";

export default function LegalPage({
  title,
  summary,
  children,
}: {
  title: string;
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-lilac pb-14 pt-10 lg:pb-20 lg:pt-16">
        <div className="mx-auto max-w-[840px] px-5 sm:px-6 lg:px-0">
          <nav aria-label="Breadcrumb" className="text-[14px] text-ink/60">
            <Link href="/" className="transition-colors hover:text-brand">
              Home
            </Link>
            <span className="px-2" aria-hidden>
              /
            </span>
            <span className="text-ink">{title}</span>
          </nav>

          <h1 className="mt-5 font-display text-[32px] font-black leading-[1.2] text-ink sm:text-[40px] lg:text-[48px]">
            {title}
          </h1>

          <p className="mt-5 text-[16px] leading-[1.7] text-ink/80">{summary}</p>

          <p className="mt-6 inline-flex items-center rounded-full bg-white px-4 py-2 text-[13px] font-medium text-ink/70">
            Last updated: {LEGAL_EFFECTIVE_DATE}
          </p>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-[840px] px-5 sm:px-6 lg:px-0">
          <div className="legal-prose">{children}</div>

          <aside className="mt-16 rounded-[20px] bg-lilac/60 p-7 lg:p-9">
            <h2 className="font-display text-[20px] font-bold text-ink">
              Questions about this document?
            </h2>
            <p className="mt-3 text-[15px] leading-[1.7] text-ink/80">
              Our support team can walk you through anything here.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
              <a
                href="mailto:help@sonwoh.com"
                className="font-medium text-brand-deep underline underline-offset-2"
              >
                help@sonwoh.com
              </a>
              <a
                href="tel:+2348132209554"
                className="font-medium text-brand-deep underline underline-offset-2"
              >
                +234 813 2209 554
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
