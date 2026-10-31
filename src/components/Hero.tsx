import Image from "next/image";
import StoreBadges from "./StoreBadges";
import Icon from "./Icon";

const NOTES = [
  {
    icon: "/images/icon-btc.png",
    alt: "Bitcoin",
    title: "BTC Recieved",
    time: "2:20 pm",
    amount: "$63,000.85",
    tone: "text-brand",
    place: "left-0 top-[6%] lg:left-[-20%] lg:top-[10%]",
  },
  {
    icon: "/images/icon-mtn.png",
    alt: "MTN",
    title: "MTN Top UP",
    time: "11:45 am",
    amount: "10,000",
    tone: "text-danger",
    place: "right-0 top-[28%] lg:right-[-20%] lg:top-[31%]",
  },
  {
    icon: "/images/icon-apple.png",
    alt: "Apple",
    title: "Apple Gift Card",
    time: "10:05 pm",
    amount: "$385",
    tone: "text-brand",
    place: "left-0 top-[70%] lg:left-[-26%] lg:top-[66%]",
  },
] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-lilac pb-16 pt-8 lg:pb-[96px] lg:pt-[66px]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-10">
          <div>
            <p className="inline-flex h-[30px] items-center gap-2 rounded-full bg-ink pl-3 pr-4 text-[12px] tracking-[0.04em] text-white">
              <Icon name="marketeq:secure" className="h-4 w-4 text-white" />
              The Future of Digital Transaction
            </p>

            <h1 className="mt-6 font-display text-[30px] font-black leading-[1.2] text-ink sm:text-[42px] lg:text-[52px]">
              Your Digital
              <br />
              Finance, Simplified.
            </h1>

            <p className="mt-5 max-w-[524px] text-[16px] leading-[1.6] tracking-[0.04em] text-ink/90">
              Move money, trade crypto, convert gift cards, pay bills and manage
              everything from one secure platform
            </p>

            <StoreBadges className="mt-9" />
          </div>

          <div className="relative mx-auto w-full max-w-[460px] lg:max-w-[520px]">
            <div className="relative">
              {/* The phone overhangs the panel at the top only - both are cut
                  on the same bottom line in the design, so anchor to bottom-0
                  rather than giving the panel a height of its own. */}
              <div
                className="hex-field absolute bottom-0 left-1/2 top-[33%] hidden w-[92%] -translate-x-1/2 rounded-[16px] opacity-70 sm:block"
                aria-hidden
              />

              <Image
                src="/images/hero-phone.png"
                alt="The Sonwoh app showing an available balance, quick services and recent activity"
                width={536}
                height={606}
                priority
                sizes="(max-width: 1024px) 60vw, 280px"
                className="relative mx-auto block h-auto w-[60%] max-w-[280px]"
              />

              {NOTES.map((note) => (
                <div
                  key={note.title}
                  className={`absolute flex h-[56px] w-[190px] items-center gap-2.5 rounded-card bg-white px-2 shadow-[0_4px_14px_rgba(15,23,42,0.18)] sm:h-[60px] sm:w-[260px] sm:gap-3 ${note.place}`}
                >
                  <Image
                    src={note.icon}
                    alt={note.alt}
                    width={160}
                    height={160}
                    className="h-[30px] w-[30px] shrink-0 rounded-full object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] font-medium text-ink">
                      {note.title}
                    </p>
                    <p className="text-[9px] font-medium tracking-[0.04em] text-ink/50">
                      {note.time}
                    </p>
                  </div>
                  <p className={`pr-2 text-[11px] font-medium ${note.tone}`}>
                    {note.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* the double-chevron scroll cue, centred under the hero */}
        <a
          href="#why-sonwoh"
          aria-label="Scroll to what Sonwoh offers"
          className="mx-auto mt-10 hidden w-fit text-ink/80 transition-colors hover:text-ink lg:block"
        >
          <svg
            viewBox="0 0 28 34"
            className="h-9 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M6 4h16" />
            <path d="M5 13l9 9 9-9" />
            <path d="M9 22l5 6 5-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
