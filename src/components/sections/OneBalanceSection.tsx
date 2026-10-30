import Image from "next/image";

export default function OneBalanceSection() {
  return (
    <section className="relative bg-lilac">
      {/* The dotted map sits in the light wedge, and the dark panel sweeps up
          under it from the left - one continuous curve, as in the reference. */}
      <div className="relative h-[180px] overflow-hidden lg:h-[300px]">
        <Image
          src="/images/worldmap.png"
          alt=""
          aria-hidden
          width={1104}
          height={500}
          sizes="(max-width: 1024px) 70vw, 560px"
          className="pointer-events-none absolute left-[3%] top-2 hidden w-[40%] max-w-[550px] lg:block"
        />

        {/* Fills the whole band so the dark reaches the top edge on the right,
            and clips the map along the curve. */}
        <svg
          className="absolute inset-0 block h-full w-full text-ink"
          viewBox="0 0 1440 300"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path
            d="M0 135C140 160 300 165 470 128 650 88 780 16 920 4 1120-4 1260 0 1440 0v300H0V135Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="bg-ink">
        <div className="mx-auto max-w-[1240px] px-5 pb-10 sm:px-6 lg:px-0 lg:pb-12">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-10">
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
              sizes="(max-width: 1024px) 90vw, 500px"
              className="mx-auto h-auto w-full max-w-[500px]"
            />
          </div>
        </div>
      </div>

      {/* the dotted grid and green disc that close the dark panel */}
      <div className="relative h-16 bg-ink lg:h-24">
        <div
          aria-hidden
          className="absolute -top-8 right-[7%] hidden h-[80px] w-[150px] lg:block"
          style={{
            backgroundImage: "radial-gradient(#2f6bff 1.8px, transparent 1.9px)",
            backgroundSize: "22px 22px",
          }}
        />
        <span
          aria-hidden
          className="absolute bottom-6 right-[4%] hidden h-9 w-9 rounded-full bg-brand lg:block"
        />
      </div>
    </section>
  );
}
