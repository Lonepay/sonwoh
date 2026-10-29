import IconTile from "@/components/IconTile";
import { type IconName } from "@/components/Icon";
import { WHY_SONWOH } from "@/lib/content";

export default function WhySonwoh() {
  return (
    <section id="why-sonwoh" className="bg-lilac py-20 lg:py-[110px]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        <h2 className="max-w-[500px] font-display text-[36px] font-black leading-[1.15] text-ink lg:text-[48px]">
          Why choose Sonwoh?
        </h2>

        <div className="mt-14 grid gap-x-16 gap-y-14 lg:grid-cols-2">
          {WHY_SONWOH.map((item) => (
            <div key={item.title} className="max-w-[400px]">
              <IconTile icon={item.icon as IconName} tile={item.tile} size="lg" />
              <h3 className="mt-7 font-display text-[24px] font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.7] text-ink/70">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
