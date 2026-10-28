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
    place: "left-0 top-4 lg:-left-12 lg:top-10",
  },
  {
    icon: "/images/icon-mtn.png",
    alt: "MTN",
    title: "MTN Top UP",
    time: "11:45 am",
    amount: "10,000",
    tone: "text-danger",
    place: "right-0 top-[96px] lg:-right-10 lg:top-[130px]",
  },
  {
    icon: "/images/icon-apple.png",
    alt: "Apple",
    title: "Apple Gift Card",
    time: "10:05 pm",
    amount: "$385",
    tone: "text-brand",
    place: "left-0 bottom-8 lg:-left-20 lg:bottom-16",
  },
] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-lilac pb-20 pt-10 lg:pb-[90px] lg:pt-[60px]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,560px)_1fr] lg:gap-10">
          <div>
            <p className="inline-flex h-[30px] items-center gap-2 rounded-full bg-ink pl-3 pr-4 text-[12px] tracking-[0.04em] text-white">
              <Icon name="shield" className="h-4 w-4" strokeWidth={1.8} />
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

          <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
            {/* the hexagon panel the phone sits against in the design */}
            <div
              className="hex-field absolute left-[20%] top-[24%] hidden h-[42%] w-[58%] rounded-[16px] opacity-70 sm:block"
              aria-hidden
            />

            <div className="relative px-0 sm:px-10 lg:px-14">
              <Image
                src="/images/hero-phone.png"
                alt="The Sonwoh app showing an available balance, quick services and recent activity"
                width={536}
                height={973}
                priority
                sizes="(max-width: 1024px) 80vw, 420px"
                className="relative mx-auto h-auto w-full max-w-[300px] sm:max-w-[380px]"
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
      </div>
    </section>
  );
}
