import IconTile from "@/components/IconTile";
import { type IconName } from "@/components/Icon";
import { CAPABILITIES } from "@/lib/content";

const LIVE = CAPABILITIES.filter((c) => !("soon" in c && c.soon));
const SOON = CAPABILITIES.filter((c) => "soon" in c && c.soon);

function Card({
  item,
  dark = false,
}: {
  item: (typeof CAPABILITIES)[number];
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col px-7 py-8 lg:px-9 lg:py-9">
      <IconTile
        icon={item.icon as IconName}
        tile={dark ? "white" : item.tile}
        size="lg"
      />

      {/* the reference stacks the pill on its own line, above the title */}
      {"soon" in item && item.soon && (
        <span className="mt-6 w-fit rounded-full border border-accent px-4 py-1.5 text-[11px] font-bold tracking-[0.08em] text-accent">
          COMING SOON
        </span>
      )}

      <h3
        className={`font-display text-[20px] font-bold ${
          dark ? "mt-4 text-white" : "mt-6 text-ink"
        }`}
      >
        {item.title}
      </h3>

      <p
        className={`mt-3 max-w-[330px] text-[14px] leading-[1.7] ${
          dark ? "text-white/65" : "text-ink/70"
        }`}
      >
        {item.body}
      </p>
    </div>
  );
}

export default function Capabilities() {
  return (
    <section id="what-you-can-do">
      {/* Six live services, split by the green hairline rules in the design. */}
      <div className="bg-lilac pt-20 pb-10 lg:pt-[100px]">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
          <h2 className="max-w-[580px] font-display text-[32px] font-black leading-[1.15] text-ink lg:text-[42px]">
            What you can do with Sonwoh?
          </h2>

          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3">
            {LIVE.map((item, i) => (
              <li key={item.title} className="relative">
                {/* green-to-blue rules, matching the reference */}
                {i % 3 !== 0 && (
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 hidden w-px bg-gradient-to-b from-brand to-accent lg:block"
                  />
                )}
                {i % 2 !== 0 && (
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 hidden w-px bg-gradient-to-b from-brand to-accent sm:block lg:hidden"
                  />
                )}
                {i >= 3 && (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 hidden h-px bg-gradient-to-r from-brand to-accent lg:block"
                  />
                )}
                {i >= 2 && (
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 hidden h-px bg-gradient-to-r from-brand to-accent sm:block lg:hidden"
                  />
                )}
                {i > 0 && (
                  <span
              <span className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-white text-brand">
                <Icon name={item.icon as IconName} className="h-7 w-7" />
              </span>

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="font-display text-[18px] font-bold text-ink">
                  {item.title}
                </h3>
                {"soon" in item && item.soon && (
                  <span className="shrink-0 rounded-full border border-brand px-2.5 py-0.5 text-[10px] font-bold tracking-[0.06em] text-brand">
                    COMING SOON
                  </span>
                )}
              </div>

              <p className="mt-3 text-[14px] leading-[1.7] text-ink/70">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
