// Draft risk disclosure written against the product described in the Figma file.
// Have counsel review before this goes live.
import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Risk Disclosure",
  description:
    "The risks of holding and trading digital assets through Sonwoh, including volatility, irreversibility, liquidity and regulatory risk.",
};

export default function RiskDisclosurePage() {
  return (
    <LegalPage
      title="Risk Disclosure"
      summary="Cryptocurrency products carry risk, including the loss of value. Please read this before you trade, and only commit money you can afford to lose."
    >
      <h2 id="summary">In short</h2>
      <p>
        <strong>
          Digital assets are volatile and largely unregulated. You can lose some
          or all of the money you put in. Nothing Sonwoh publishes is investment
          advice, and no return is promised or guaranteed.
        </strong>
      </p>

      <h2 id="volatility">1. Price volatility</h2>
      <p>
        The value of digital assets can move sharply in minutes, in either
        direction, and those movements are often driven by sentiment, news,
        exchange outages or large individual trades rather than anything
        fundamental. An asset can lose a substantial share of its value in a
        single day, and past performance tells you nothing about what comes
        next.
      </p>

      <h2 id="loss">2. You can lose your entire investment</h2>
      <p>
        There is no floor under the price of a digital asset. Some assets have
        fallen to effectively zero and never recovered. Only commit funds you
        can genuinely afford to lose, and do not borrow to trade.
      </p>

      <h2 id="irreversible">3. Transactions cannot be reversed</h2>
      <p>
        Once a trade is confirmed or a transfer is broadcast to a blockchain, it
        cannot be cancelled, recalled or reversed &mdash; by you, by Sonwoh, or
        by anyone else. If you send funds to the wrong address, or to the right
        address on the wrong network, those funds are generally unrecoverable.
        Check every address and network carefully before you confirm.
      </p>

      <h2 id="liquidity">4. Liquidity and execution</h2>
      <p>
        The rate you are quoted is valid only for the short window shown. In
        volatile or thin markets a quote may expire before you confirm, spreads
        may widen, and a large order may not fill at the price you expect. At
        times of extreme market stress it may be difficult to trade an asset at
        all.
      </p>

      <h2 id="technology">5. Technology and network risk</h2>
      <p>
        Blockchain networks can congest, fork, halt, or suffer attacks. Smart
        contracts can contain flaws. Exchanges and custodians can fail. Any of
        these can delay a transaction, change its outcome, or cause loss, and
        most are outside Sonwoh&rsquo;s control.
      </p>

      <h2 id="security">6. Security and fraud</h2>
      <p>
        Digital assets are a frequent target of fraud. Nobody at Sonwoh will
        ever ask you for your PIN, your password or a one-time code. Be sceptical
        of anyone promising guaranteed returns, of investment groups that
        pressure you to act quickly, and of links sent to you unsolicited. If
        you lose control of your account credentials you may lose your funds.
      </p>

      <h2 id="regulatory">7. Regulatory and tax risk</h2>
      <p>
        Rules governing digital assets are still developing and can change with
        little notice. A change in law or regulatory policy could restrict your
        ability to trade an asset, convert it to naira, or withdraw. You are
        responsible for determining and meeting any tax obligations that arise
        from your activity; Sonwoh does not provide tax advice.
      </p>

      <h2 id="protection">8. No deposit protection</h2>
      <p>
        Digital asset balances held through Sonwoh are not bank deposits. They
        are not covered by the Nigeria Deposit Insurance Corporation or by any
        comparable deposit guarantee or investor compensation scheme.
      </p>

      <h2 id="giftcards">9. Gift card trading</h2>
      <p>
        Gift card rates vary by brand, denomination and receipt status, and can
        change at short notice. Cards that turn out to be invalid, already
        redeemed, or obtained unlawfully will be declined, and any payout
        already made against them may be reversed.
      </p>

      <h2 id="credit">10. Crypto-backed credit</h2>
      <p>
        The Sonwoh Credit Card is not yet available. When it launches, borrowing
        against digital assets will carry its own risks &mdash; including that a
        fall in the value of your collateral could require you to add funds or
        result in your assets being sold to cover the position. Full terms will
        be presented before you can apply.
      </p>

      <h2 id="advice">11. This is not advice</h2>
      <p>
        Rates, market data, analytics and educational material in the Sonwoh app
        or on this website are provided for information only. They are not a
        recommendation to buy or sell anything, and they do not take your
        circumstances into account. Consider taking independent professional
        advice before you trade.
      </p>

      <h2 id="related">Related documents</h2>
      <p>
        <Link href="/legal/terms">Terms of Service</Link> &middot;{" "}
        <Link href="/legal/privacy">Privacy Policy</Link> &middot;{" "}
        <Link href="/legal/file">File a complaint</Link>
      </p>
    </LegalPage>
  );
}
