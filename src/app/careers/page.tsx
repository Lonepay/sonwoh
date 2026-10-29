import type { Metadata } from "next";
import Link from "next/link";
import AppCta from "@/components/AppCta";
import ContactForm from "@/components/ContactForm";
import Icon, { type IconName } from "@/components/Icon";
import { LogoMark } from "@/components/Logo";
import { SOCIAL, SOCIAL_HANDLE, CONTACT } from "@/lib/content";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Sonwoh is not hiring at the moment. Here is what we look for and where new roles will be posted when they open.",
};

const QUALITIES: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Security first",
    body: "People move real money through Sonwoh. We look for the instinct to ask what could go wrong before shipping, not after.",
    icon: "shield",
  },
  {
    title: "Close to the user",
    body: "The best decisions here come from reading support tickets. We look for people who want to understand the person on the other side of the screen.",
    icon: "support",
  },
  {
    title: "Care about the details",
    body: "A rate off by a decimal or a mislabelled button costs someone money. Precision matters more than speed.",
    icon: "check",
  },
  {
    title: "Ship and learn",
    body: "We would rather release something small, watch how it is used, and improve it than spend a quarter guessing.",
    icon: "bolt",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="bg-lilac pb-16 pt-10 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="inline-flex h-[34px] items-center rounded-full border border-ink/25 bg-white px-5 text-[13px] font-bold tracking-[0.08em] text-ink">
                NO OPEN ROLES
              </p>

              <h1 className="mt-6 max-w-[520px] font-display text-[30px] font-black leading-[1.2] text-ink sm:text-[38px] lg:text-[50px]">
                Careers at Sonwoh
              </h1>

              <p className="mt-5 max-w-[500px] text-[16px] leading-[1.7] text-ink/80">
                We are not hiring at the moment. There are no open positions,
                and we would rather say so plainly than keep a job board up that
                goes nowhere.
              </p>

              <p className="mt-4 max-w-[500px] text-[16px] leading-[1.7] text-ink/80">
                That will change as we grow. When it does, every role we open
                will be posted on this page.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${CONTACT.careers}`}
                  className="inline-flex h-[52px] w-[210px] items-center justify-center rounded-[10px] bg-ink text-[16px] font-bold text-white transition-colors hover:bg-ink-soft"
                >
                  Introduce yourself
                </a>
                <Link
                  href="/"
                  className="inline-flex h-[52px] w-[200px] items-center justify-center rounded-[10px] border border-ink/20 text-[16px] font-bold text-ink transition-colors hover:border-ink/40"
                >
                  Back to home
                </Link>
              </div>
            </div>

            <div className="relative mx-auto aspect-[4/3] w-full max-w-[480px] overflow-hidden rounded-[24px] bg-ink-deep">
              <div className="hex-field absolute inset-0" aria-hidden />
              <div className="relative flex h-full flex-col items-center justify-center gap-5 p-8 text-center">
                <LogoMark className="h-14 w-14" />
                <p className="font-display text-[24px] font-bold text-white">
                  Not hiring right now.
                </p>
                <p className="max-w-[280px] text-[14px] leading-[1.6] text-white/60">
                  Check back here — this is where roles get posted first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-[90px]">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
          <h2 className="max-w-[560px] font-display text-[32px] font-black leading-[1.15] text-ink lg:text-[42px]">
            What we look for
          </h2>
          <p className="mt-5 max-w-[560px] text-[16px] leading-[1.7] text-ink/70">
            So you know what we will be weighing when roles do open.
          </p>

          <ul className="mt-12 grid gap-x-16 gap-y-12 lg:grid-cols-2">
            {QUALITIES.map((q) => (
              <li key={q.title} className="max-w-[420px]">
                <span className="inline-flex h-[54px] w-[54px] items-center justify-center rounded-[14px] bg-brand/10 text-brand">
                  <Icon name={q.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-[22px] font-bold text-ink">
                  {q.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-ink/70">
                  {q.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-lilac/60 py-20 lg:py-[90px]">
        <div className="mx-auto max-w-[840px] px-5 sm:px-6 lg:px-0">
          <h2 className="font-display text-[30px] font-black leading-[1.15] text-ink lg:text-[38px]">
            In the meantime
          </h2>

          <p className="mt-5 text-[16px] leading-[1.7] text-ink/80">
            If you think you would be a good fit for a role we have not posted
            yet, send a short note and your CV to{" "}
            <a
              href={`mailto:${CONTACT.careers}`}
              className="font-medium text-brand-deep underline underline-offset-2"
            >
              {CONTACT.careers}
            </a>
            . We read everything that comes in, though we cannot promise a
            reply while there is nothing open.
          </p>

          <p className="mt-4 text-[16px] leading-[1.7] text-ink/80">
            We are{" "}
            <strong className="font-bold text-ink">@{SOCIAL_HANDLE}</strong> on
            every platform — follow us on{" "}
            {SOCIAL.map((s, i) => (
              <span key={s.label}>
                {i > 0 && (i === SOCIAL.length - 1 ? " or " : ", ")}
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand-deep underline underline-offset-2"
                >
                  {s.label}
                </a>
              </span>
            ))}{" "}
            — where new roles get shared as they go up.
          </p>

          <p className="mt-8 text-[15px] leading-[1.7] text-ink/60">
            Please be careful: we never ask candidates for payment, and we will
            only ever contact you from a <strong>@sonwoh.com</strong> address.
            If someone offers you a job at Sonwoh from anywhere else, report it
            to{" "}
            <Link
              href="/legal/file"
              className="font-medium text-brand-deep underline underline-offset-2"
            >
              our complaints team
            </Link>
            .
          </p>
        </div>
      </section>

      <AppCta />
      <ContactForm />
    </>
  );
}
