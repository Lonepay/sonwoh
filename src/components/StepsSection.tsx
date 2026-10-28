type Step = { n: string; title: string; body: string };

export default function StepsSection({
  eyebrow,
  heading,
  steps,
  id,
}: {
  eyebrow?: string;
  heading: string;
  steps: readonly Step[];
  id?: string;
}) {
  return (
    <section id={id} className="bg-white py-20 lg:py-[100px]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        {eyebrow && (
          <p className="text-[13px] font-medium text-accent">{eyebrow}</p>
        )}
        <h2 className="mt-2 font-display text-[34px] font-black leading-[1.15] text-ink lg:text-[42px]">
          {heading}
        </h2>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => (
            <li key={step.n}>
              <div className="h-px w-10 bg-ink/40" />
              <p className="mt-5 font-display text-[22px] font-medium text-accent">
                {step.n}
              </p>
              <h3 className="mt-2 font-display text-[21px] font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 max-w-[260px] text-[15px] leading-[1.6] text-accent/70">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
