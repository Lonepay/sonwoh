import type { Metadata } from "next";
import Link from "next/link";
import AppCta from "@/components/AppCta";
import ContactForm from "@/components/ContactForm";
import Icon, { type IconName } from "@/components/Icon";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "The Sonwoh blog is on the way — market notes, product updates, security guidance and practical guides to moving money with Sonwoh.",
};

const TOPICS: { title: string; body: string; icon: IconName }[] = [
  {
    title: "Market notes",
    body: "Plain-language reads on what moved the assets you hold, without the hype or the price predictions.",
    icon: "icon-park:switch",
  },
  {
    title: "Product updates",
    body: "New assets, new billers and new features — what shipped, why we built it, and how to use it.",
    icon: "tdesign:money",
  },
  {
    title: "Staying safe",
    body: "How the common scams actually work, and the habits that keep your account and your funds out of reach.",
    icon: "mdi:secure-outline",
  },
  {
    title: "Practical guides",
    body: "Walkthroughs for trading, cashing out a gift card, and paying bills — written for first-timers.",
    icon: "fluent:person-support-28-regular",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-lilac pb-16 pt-10 lg:pb-24 lg:pt-16">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="inline-flex h-[34px] items-center rounded-full border border-brand bg-white px-5 text-[13px] font-bold tracking-[0.08em] text-ink">
                COMING SOON
              </p>

              <h1 className="mt-6 max-w-[520px] font-display text-[30px] font-black leading-[1.2] text-ink sm:text-[38px] lg:text-[50px]">
                The Sonwoh Blog
              </h1>

              <p className="mt-5 max-w-[500px] text-[16px] leading-[1.7] text-ink/80">
                We&apos;re putting together something worth reading — market
                notes, product updates, security guidance and practical guides
                to moving money with Sonwoh. It isn&apos;t live yet.
              </p>

              <p className="mt-4 max-w-[500px] text-[16px] leading-[1.7] text-ink/80">
                Leave your email below and we&apos;ll tell you the moment the
                first post goes up.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex h-[52px] w-[200px] items-center justify-center rounded-[10px] bg-brand text-[16px] font-bold text-white transition-colors hover:bg-brand-dark"
                >
                  Notify me
                </Link>
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
                  Writing in progress.
                </p>
                <span className="flex gap-1.5" aria-hidden>
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-2 w-2 rounded-full bg-brand"
                      style={{ opacity: 1 - i * 0.3 }}
                    />
                  ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-[90px]">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
          <h2 className="max-w-[560px] font-display text-[32px] font-black leading-[1.15] text-ink lg:text-[42px]">
            What we&apos;ll be writing about
          </h2>

          <ul className="mt-12 grid gap-x-16 gap-y-12 lg:grid-cols-2">
            {TOPICS.map((topic) => (
              <li key={topic.title} className="max-w-[420px]">
                <span className="inline-flex h-[54px] w-[54px] items-center justify-center rounded-[14px] bg-brand/10 text-brand">
                  <Icon name={topic.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-display text-[22px] font-bold text-ink">
                  {topic.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-ink/70">
                  {topic.body}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-14 text-[15px] leading-[1.7] text-ink/70">
            In the meantime, the{" "}
            <Link
              href="/#faqs"
              className="font-medium text-brand-deep underline underline-offset-2"
            >
              FAQs
            </Link>{" "}
            cover the questions we get most, and our team is on{" "}
            <a
              href="mailto:help@sonwoh.com"
              className="font-medium text-brand-deep underline underline-offset-2"
            >
              help@sonwoh.com
            </a>{" "}
            if you need something answered now.
          </p>
        </div>
      </section>

      <AppCta />
      <ContactForm />
    </>
  );
}
