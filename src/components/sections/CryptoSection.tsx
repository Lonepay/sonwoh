import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";

const PILLS = [
  { label: "Instant Payout", icon: "solar:card-outline" },
  { label: "Good Rates", icon: "mynaui:percentage-waves-solid" },
  { label: "Secure & Reliable", icon: "material-symbols-light:lock" },
] as const;

export default function CryptoSection() {
  return (
    <section className="hex-field relative py-16 lg:py-0">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        <div className="grid items-center gap-12 lg:min-h-[780px] lg:grid-cols-2 lg:gap-16">
          <Image
            src="/images/coins.png"
            alt="Bitcoin, Ethereum, Tether, Solana and Cardano coins"
            width={820}
            height={960}
            sizes="(max-width: 1024px) 80vw, 460px"
            className="mx-auto h-auto w-full max-w-[380px] lg:max-w-[440px]"
          />

          <div>
            <h2 className="font-display text-[34px] font-black leading-[1.2] text-white lg:text-[42px]">
              Instant Crypto.
              <br />
              Endless Opportunities.
            </h2>
            <p className="mt-5 max-w-[470px] text-[15px] leading-[1.7] text-white/75">
              Trade your favorite cryptocurrencies anytime, anywhere. Access
              real-time market prices, execute instant trades, and manage your
              digital assets securely with confidence.
            </p>

            <ul className="mt-6 flex flex-wrap items-center gap-x-7 gap-y-3">
              {PILLS.map((pill) => (
                <li
                  key={pill.label}
                  className="flex items-center gap-2 text-[15px] text-white"
                >
                  <Icon
                    name={pill.icon}
                    className="h-[18px] w-[18px] text-brand"
                  />
                  {pill.label}
                </li>
              ))}
            </ul>

            <Link
              href="/crypto"
              className="mt-9 inline-flex h-[54px] w-[220px] items-center justify-center rounded-full bg-white text-[16px] font-bold text-brand-deep transition-colors hover:bg-white/90"
            >
              Check Rate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
