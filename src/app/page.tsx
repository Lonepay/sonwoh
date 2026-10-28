import Hero from "@/components/Hero";
import CryptoSection from "@/components/sections/CryptoSection";
import GiftCardSection from "@/components/sections/GiftCardSection";
import BillsSection from "@/components/sections/BillsSection";
import OneBalanceSection from "@/components/sections/OneBalanceSection";
import VirtualCardSection from "@/components/sections/VirtualCardSection";
import CreditCardSection from "@/components/sections/CreditCardSection";
import WhySonwoh from "@/components/sections/WhySonwoh";
import Capabilities from "@/components/sections/Capabilities";
import FutureOfFinance from "@/components/sections/FutureOfFinance";
import StepsSection from "@/components/StepsSection";
import AppCta from "@/components/AppCta";
import Faqs from "@/components/Faqs";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import { STEPS, CRYPTO_SERVICES } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CryptoSection />
      <GiftCardSection />
      <BillsSection />
      <OneBalanceSection />
      <VirtualCardSection />
      <CreditCardSection />
      <WhySonwoh />
      <StepsSection
        id="how-it-works"
        heading="Four steps. No branch visit."
        eyebrow="The Future of Digital Transaction"
        steps={STEPS}
      />
      <Capabilities />
      <FutureOfFinance />
      <StepsSection
        eyebrow="Everything You Need in One Platform"
        heading="Our Crypto Services"
        steps={CRYPTO_SERVICES}
      />
      <AppCta />
      <Faqs />
      <Testimonials />
      <ContactForm />
    </>
  );
}
