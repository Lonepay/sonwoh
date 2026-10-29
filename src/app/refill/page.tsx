import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import BillsSection from "@/components/sections/BillsSection";
import StepsSection from "@/components/StepsSection";
import AppCta from "@/components/AppCta";
import Faqs from "@/components/Faqs";
import ContactForm from "@/components/ContactForm";
import { STEPS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Refill",
  description:
    "Pay electricity, airtime, data, cable TV, internet, water, education and government bills straight from your Sonwoh balance.",
};

export default function RefillPage() {
  return (
    <>
      <PageHero
        title="Simplify Your Everyday Bill Payments"
        body="Complete all your essential payments in seconds with fast processing and secure transactions — straight from the balance you already hold."
      >
        <Image
          src="/images/phones.png"
          alt="Two phones showing the Sonwoh quick services and bill payment screens"
          width={888}
          height={780}
          priority
          sizes="(max-width: 1024px) 90vw, 520px"
          className="mx-auto h-auto w-full max-w-[460px] rounded-[20px]"
        />
      </PageHero>

      <BillsSection />

      <StepsSection
        heading="Four steps. No branch visit."
        eyebrow="The Future of Digital Transaction"
        steps={STEPS}
      />

      <AppCta />
      <Faqs />
      <ContactForm />
    </>
  );
}
