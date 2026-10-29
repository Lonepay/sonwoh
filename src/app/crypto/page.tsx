import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import FutureOfFinance from "@/components/sections/FutureOfFinance";
import StepsSection from "@/components/StepsSection";
import AppCta from "@/components/AppCta";
import Faqs from "@/components/Faqs";
import ContactForm from "@/components/ContactForm";
import { CRYPTO_SERVICES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Crypto",
  description:
    "Buy, sell and swap BTC, ETH, USDT and more at live market rates, with instant settlement to your Sonwoh balance.",
};

export default function CryptoPage() {
  return (
    <>
      <PageHero
        title="Instant Crypto. Endless Opportunities."
        body="Trade your favorite cryptocurrencies anytime, anywhere. Access real-time market prices, execute instant trades, and manage your digital assets securely with confidence."
      >
        <Image
          src="/images/coins.png"
          alt="Bitcoin, Ethereum, Tether, Solana and Cardano coins"
          width={820}
          height={960}
          priority
          sizes="(max-width: 1024px) 80vw, 460px"
          className="mx-auto h-auto w-full max-w-[340px] rounded-[20px] lg:max-w-[420px]"
        />
      </PageHero>

      <FutureOfFinance />

      <StepsSection
        eyebrow="Everything You Need in One Platform"
        heading="Our Crypto Services"
        steps={CRYPTO_SERVICES}
      />

      <AppCta />
      <Faqs />
      <ContactForm />
    </>
  );
}
