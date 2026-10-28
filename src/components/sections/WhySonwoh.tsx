import Icon, { type IconName } from "@/components/Icon";
import { WHY_SONWOH } from "@/lib/content";

export default function WhySonwoh() {
  return (
    <section id="why-sonwoh" className="bg-white py-20 lg:py-[110px]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        <h2 className="max-w-[500px] font-display text-[36px] font-black leading-[1.15] text-ink lg:text-[48px]">
          Why choose Sonwoh?
        </h2>

        <div className="mt-14 grid gap-x-16 gap-y-14 lg:grid-cols-2">
          {WHY_SONWOH.map((item) => (
            <div key={item.title} className="max-w-[400px]">
              <span className="inline-flex h-[58px] w-[58px] items-center justify-center rounded-[14px] bg-brand/10 text-brand">
                <Icon name={item.icon as IconName} className="h-8 w-8" />
              </span>
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
