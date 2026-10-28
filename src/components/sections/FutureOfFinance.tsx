import Image from "next/image";

export default function FutureOfFinance() {
  return (
    <section className="bg-white py-20 lg:py-[90px]">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 lg:px-0">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,480px)_1fr] lg:gap-16">
          <Image
            src="/images/crypto-cards.png"
            alt="Packaged crypto tokens with a Bitcoin coin in front"
            width={760}
            height={780}
            sizes="(max-width: 1024px) 85vw, 480px"
            className="mx-auto h-auto w-full max-w-[400px] lg:max-w-[480px]"
          />

          <div>
            <h2 className="font-display text-[34px] font-black leading-[1.2] text-ink lg:text-[44px]">
              The Future of Finance
            </h2>

            <div className="mt-6 space-y-4 text-[15px] leading-[1.7] text-ink/80">
              <p>
                Cryptocurrency is transforming the way people save, invest,
                transfer value, and participate in the global economy. Powered
                by blockchain technology, digital assets offer a faster, more
                transparent, and more accessible alternative to traditional
                financial systems, enabling people to send and receive funds
                across borders, diversify their investments, and take greater
                control of their financial future.
              </p>
              <p>
                As the adoption of digital currencies continues to grow,
                cryptocurrency is becoming more than just an investment —
                it&apos;s evolving into a practical financial tool for everyday
                life. From online payments and international transfers to
                decentralized financial services and digital commerce, crypto is
                reshaping how individuals and businesses interact with money in
                an increasingly connected world.
              </p>
              <p>
                Whether you&apos;re taking your first steps into digital assets
                or you&apos;re an experienced investor looking to expand your
                portfolio, our platform provides everything you need to navigate
                the crypto ecosystem with confidence. We combine advanced
                security, a seamless user experience, and reliable technology to
                ensure every transaction is fast, secure, and straightforward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
