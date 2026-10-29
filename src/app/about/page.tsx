import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AppCta from "@/components/AppCta";
import ContactForm from "@/components/ContactForm";
import { LogoMark } from "@/components/Logo";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Sonwoh is a next-generation Web3 platform making digital finance simple, secure and accessible — crypto trading, gift card exchange and bill payments in one place.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        body="We are a next-generation Web3 platform dedicated to making digital finance simple, secure, and accessible."
      >
        <div className="relative mx-auto aspect-[4/3] w-full max-w-[480px] overflow-hidden rounded-[24px] bg-ink-deep">
          <div className="hex-field absolute inset-0" aria-hidden />
          <div className="relative flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
            <LogoMark className="h-16 w-16" />
            <p className="font-display text-[26px] font-bold text-white">
              One app. Every transaction.
            </p>
          </div>
        </div>
      </PageHero>

      <section className="bg-white py-20 lg:py-[90px]">
        <div className="mx-auto max-w-[840px] px-5 sm:px-6 lg:px-0">
          <div className="space-y-5 text-[16px] leading-[1.8] text-ink/80">
            <p>
              Our platform brings together cryptocurrency trading, gift card
              exchange, and bill payment services into one seamless experience,
              helping individuals and businesses manage their digital finances
              with confidence.
            </p>
            <p>
              Built on the principles of innovation, transparency, and security,
              we leverage blockchain technology to deliver fast, reliable, and
              user-friendly financial solutions. As we continue to grow,
              we&apos;re expanding our ecosystem with crypto-powered credit and
              virtual cards, giving users even more ways to spend and manage
              their digital assets in everyday life.
            </p>
            <p>
              Whether you&apos;re an experienced trader or just beginning your
              Web3 journey, we&apos;re committed to providing the tools,
              technology, and support you need to thrive in the digital economy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-lilac/60 py-20 lg:py-[90px]">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-[32px] font-black text-ink lg:text-[40px]">
                Our Mission
              </h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-ink/80">
                Our mission is to make digital finance simple, secure, and
                accessible for everyone. We are building a next-generation Web3
                platform where users can seamlessly trade cryptocurrencies,
                exchange gift cards, pay everyday bills, and manage their
                digital assets from one trusted ecosystem. As we continue to
                innovate, we&apos;re expanding our services with crypto-powered
                credit and virtual cards, giving users even more ways to spend,
                save, and grow in the digital economy.
              </p>
            </div>

            <div>
              <h2 className="font-display text-[32px] font-black text-ink lg:text-[40px]">
                Our Vision
              </h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-ink/80">
                To become the leading Web3 financial ecosystem, empowering
                millions of people to seamlessly trade, spend, and manage
                digital assets through secure, innovative, and accessible
                financial solutions. We envision a future where cryptocurrency
                is part of everyday life, making global finance more inclusive
                and borderless.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AppCta />
      <ContactForm />
    </>
  );
}
