import IconTile from "@/components/IconTile";
import { type IconName } from "@/components/Icon";
import { CAPABILITIES } from "@/lib/content";

const LIVE = CAPABILITIES.filter((c) => !("soon" in c && c.soon));
const SOON = CAPABILITIES.filter((c) => "soon" in c && c.soon);

function Card({
  item,
  dark = false,
}: {

export default function Capabilities() {
  return (
    <section id="what-you-can-do" className="bg-lilac/50 py-20 lg:py-[100px]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        <h2 className="max-w-[580px] font-display text-[32px] font-black leading-[1.15] text-ink lg:text-[42px]">
          What you can do with Sonwoh?
        </h2>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-[20px] bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {CAPABILITIES.map((item) => (
            <li
              key={item.title}
              className="flex flex-col bg-lilac/50 p-6 lg:p-7"
            >
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
