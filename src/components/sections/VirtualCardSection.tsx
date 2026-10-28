import Image from "next/image";

export default function VirtualCardSection() {
  return (
    <section className="bg-white py-16 lg:py-[80px]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <Image
            src="/images/wallet.png"
            alt="A purple wallet holding a Sonwoh Visa card with a balance of 25,867.40"
            width={880}
            height={720}
            sizes="(max-width: 1024px) 85vw, 470px"
            className="mx-auto h-auto w-full max-w-[420px] lg:max-w-[470px]"
          />

          <div>
            <p className="inline-flex h-[34px] items-center rounded-full border border-brand px-5 text-[13px] font-bold tracking-[0.08em] text-ink">
              COMING SOON
            </p>
            <h2 className="mt-6 font-display text-[34px] font-black leading-[1.2] text-ink lg:text-[42px]">
              Sonwoh Virtual Card
            </h2>
            <p className="mt-5 max-w-[500px] text-[15px] leading-[1.7] text-ink/80">
              Designed to make online payments faster, safer, and more
              convenient. Shop globally, pay for subscriptions, and manage your
              everyday spending with a secure virtual card linked to your Sonwoh
              account.
            </p>
            <p className="mt-4 max-w-[500px] text-[15px] leading-[1.7] text-ink/80">
              With instant access, advanced security, and seamless payment
              capabilities, the Sonwoh Virtual Card will help bridge the gap
              between digital finance and everyday life — giving you a smarter
              way to spend, wherever you are.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
