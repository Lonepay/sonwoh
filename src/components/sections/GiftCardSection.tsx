import Image from "next/image";
import Link from "next/link";

export default function GiftCardSection() {
  return (
    <section className="relative bg-[#fafafa] py-16 lg:py-0">
      {/* the stacked cubes that spill in from the section above */}
      <Image
        src="/images/cubes.png"
        alt=""
        aria-hidden
        width={544}
        height={645}
        sizes="200px"
        className="pointer-events-none absolute -left-10 -top-28 z-10 hidden w-[200px] lg:block"
      />

      <div className="relative mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        <div className="grid items-center gap-12 lg:min-h-[860px] lg:grid-cols-2 lg:gap-10">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-[34px] font-black leading-[1.2] text-ink lg:text-[42px]">
              Trade Gift Cards
              <br />
              With Confidence
            </h2>
            <p className="mt-5 max-w-[420px] text-[15px] leading-[1.7] text-ink/80">
              Buy and sell gift cards seamlessly with competitive exchange
              rates, lightning-fast transactions, and secure payments. Whether
              you&apos;re cashing out unused gift cards or purchasing new ones,
              Sonwoh makes every trade simple, reliable, and hassle-free.
            </p>
            <Link
              href="/gift-cards"
              className="mt-8 inline-flex h-[52px] w-[188px] items-center justify-center rounded-[10px] bg-brand text-[16px] font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Get Started
            </Link>
          </div>

          <div className="order-1 lg:order-2">
            <Image
              src="/images/giftcards.png"
              alt="A fanned stack of Apple, Amazon, eBay, Google Play, Walmart and Target gift cards"
              width={848}
              height={1336}
              sizes="(max-width: 1024px) 80vw, 480px"
              className="mx-auto h-auto w-full max-w-[340px] lg:ml-auto lg:mr-0 lg:max-w-[440px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
