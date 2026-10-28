import Image from "next/image";

export default function CreditCardSection() {
  return (
    <section className="bg-ink py-16 lg:py-[70px]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="inline-flex h-[34px] items-center rounded-full border border-brand px-5 text-[13px] font-bold tracking-[0.08em] text-white">
              COMING SOON
            </p>
            <h2 className="mt-6 font-display text-[34px] font-black leading-[1.2] text-white lg:text-[42px]">
              Sonwoh Credit Card
            </h2>
            <p className="mt-2 font-display text-[18px] italic text-white/90">
              Spend now. Trade later.
            </p>
            <p className="mt-5 max-w-[500px] text-[15px] leading-[1.7] text-white/75">
              The Sonwoh Credit Card lets you make everyday purchases without
              selling your crypto immediately. Access spending power today and
              choose when to trade your coins, giving you more flexibility and
              control over your digital assets.
            </p>
            <p className="mt-4 text-[15px] leading-[1.7] text-white/75">
              Your Crypto. Your Timing. Your Spending Power.
            </p>
          </div>

          <Image
            src="/images/cards.png"
            alt="Three blue Sonwoh Visa credit cards"
            width={900}
            height={680}
            sizes="(max-width: 1024px) 90vw, 520px"
            className="mx-auto h-auto w-full max-w-[520px]"
          />
        </div>
      </div>
    </section>
  );
}
