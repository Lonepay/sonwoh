import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import StepsSection from "@/components/StepsSection";
import AppCta from "@/components/AppCta";
import Faqs from "@/components/Faqs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import { STEPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gift Cards",
  description:
    "Buy and sell Apple, Amazon, eBay, Google Play, Walmart and Target gift cards at competitive rates, with instant payouts.",
};

const BRANDS = [
  "Apple",
  "Amazon",
  "eBay",
  "Google Play",
  "Walmart",
  "Target",
  "Steam",
  "Sephora",
];

export default function GiftCardsPage() {
  return (
    <>
      <PageHero
        title="Trade Gift Cards With Confidence"
        body="Buy and sell gift cards seamlessly with competitive exchange rates, lightning-fast transactions, and secure payments. Whether you're cashing out unused gift cards or purchasing new ones, Sonwoh makes every trade simple, reliable, and hassle-free."
      >
        <Image
          src="/images/giftcards.png"
          alt="A fanned stack of Apple, Amazon, eBay, Google Play, Walmart and Target gift cards"
          width={848}
          height={1336}
          priority
          sizes="(max-width: 1024px) 80vw, 440px"
          className="mx-auto h-auto w-full max-w-[300px] lg:max-w-[400px]"
        />
      </PageHero>

      <section className="bg-white py-20 lg:py-[90px]">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
          <h2 className="font-display text-[32px] font-black leading-[1.15] text-ink lg:text-[40px]">
            Cards we trade
          </h2>
          <p className="mt-4 max-w-[520px] text-[15px] leading-[1.7] text-ink/70">
            Rates are shown up front before you confirm a trade, so you always
            know exactly what lands in your balance.
          </p>

          <ul className="mt-10 grid gap-px overflow-hidden rounded-[20px] bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {BRANDS.map((brand) => (
              <li
                key={brand}
                className="bg-white px-7 py-8 font-display text-[19px] font-bold text-ink"
              >
                {brand}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StepsSection
        heading="Four steps. No branch visit."
        eyebrow="The Future of Digital Transaction"
        steps={STEPS}
      />

      <AppCta />
      <Faqs />
      <Testimonials />
      <ContactForm />
    </>
  );
}
