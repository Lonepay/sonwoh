import Icon from "./Icon";

export default function PageHero({
  eyebrow = "The Future of Digital Transaction",
  title,
  body,
  children,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-lilac pb-16 pt-10 lg:pb-24 lg:pt-16">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="inline-flex h-[30px] items-center gap-2 rounded-full bg-ink pl-3 pr-4 text-[12px] tracking-[0.04em] text-white">
              <Icon name="marketeq:secure" className="h-4 w-4 text-white" />
              {eyebrow}
            </p>
            <h1 className="mt-6 max-w-[520px] font-display text-[30px] font-black leading-[1.2] text-ink sm:text-[38px] lg:text-[50px]">
              {title}
            </h1>
            <p className="mt-5 max-w-[500px] text-[16px] leading-[1.7] text-ink/80">
              {body}
            </p>
          </div>

          {children}
        </div>
      </div>
    </section>
  );
}
