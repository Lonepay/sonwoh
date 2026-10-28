import StoreBadges from "./StoreBadges";

export default function AppCta() {
  return (
    <section id="get-the-app" className="bg-ink py-20 lg:py-[90px]">
      <div className="mx-auto max-w-[860px] px-5 text-center sm:px-6">
        <h2 className="font-display text-[36px] font-black leading-[1.15] text-white lg:text-[46px]">
          Your balance. Every rate. One app.
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-[1.7] text-white/70">
          Download Sonwoh free and bring crypto, gift cards, and bills into a
          single place.
        </p>
        <StoreBadges tone="dark" className="mt-10 justify-center" />
      </div>
    </section>
  );
}
