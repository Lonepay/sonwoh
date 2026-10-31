import Image from "next/image";
import { TESTIMONIALS } from "@/lib/content";

function Stars() {
  return (
    <span className="flex gap-0.5" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="h-4 w-4 text-[#f5a623]"
          fill="currentColor"
          aria-hidden
        >
          <path d="m12 2.6 2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.45 6.2 20.5l1.1-6.47-4.7-4.58 6.5-.95L12 2.6Z" />
        </svg>
      ))}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-ink pt-16 lg:pt-0">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
          <Image
            src="/images/people.png"
            alt="Three Sonwoh users celebrating while using the app"
            width={960}
            height={1116}
            sizes="(max-width: 1024px) 80vw, 420px"
            className="mx-auto block h-auto w-full max-w-[320px] self-end lg:max-w-[420px]"
          />

          <div>
            <h2 className="max-w-[420px] font-display text-[34px] font-black leading-[1.15] text-white lg:text-[40px]">
              Trusted by Thousands of Happy Users
            </h2>

            <ul className="mt-9 space-y-7">
              {TESTIMONIALS.map((t) => (
                <li key={t.name} className="max-w-[420px]">
                  <Stars />
                  <p className="mt-2 text-[15px] leading-[1.7] text-white/75">
                    <span className="font-bold text-white">{t.name}</span>{" "}
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
