import Image from "next/image";

export default function OneBalanceSection() {
  return (
    <section className="relative bg-lilac">
      {/* the wave that carves the dark panel out of the lavender band */}
      <svg
        className="block h-[70px] w-full text-ink sm:h-[110px]"
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 44C180 -4 360 -14 560 26c190 38 380 92 600 76 110-8 200-34 280-62v70H0V44Z"
          fill="currentColor"
        />
      </svg>

      <div className="bg-ink">
        <div className="mx-auto max-w-[1240px] px-5 pb-16 sm:px-6 lg:px-0 lg:pb-[70px]">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
            <div>
              <h2 className="font-display text-[34px] font-black leading-[1.2] text-white lg:text-[42px]">
                One balance. Every transaction.
              </h2>
              <p className="mt-5 max-w-[400px] text-[15px] leading-[1.7] text-white/70">
                Sonwoh brings together the transactions people actually make
                every day — trading, moving money, and paying for the things
                that keep life running.
              </p>
            </div>

            <Image
              src="/images/phones.png"
              alt="Two phones showing the Sonwoh balance, quick services and rewards screens"
              width={888}
              height={780}
              sizes="(max-width: 1024px) 90vw, 520px"
              className="mx-auto h-auto w-full max-w-[520px]"
            />
          </div>
        </div>
      </div>

      <div className="h-10 bg-ink lg:h-14" />
    </section>
  );
}
