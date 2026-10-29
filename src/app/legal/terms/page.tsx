// Draft terms written against the product described in the Figma file.
// Have counsel review before this goes live.
import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of the Sonwoh app and website, including crypto trading, gift card exchange and bill payments.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      summary="These terms govern your use of the Sonwoh app, website and all related services. By creating an account you agree to them, so please read them carefully."
    >
      <h2 id="acceptance">1. Acceptance of these terms</h2>
      <p>
        These Terms of Service (the &ldquo;Terms&rdquo;) form a binding
        agreement between you and Sonwoh (&ldquo;Sonwoh&rdquo;,
        &ldquo;we&rdquo;, &ldquo;us&rdquo;). They apply every time you access
        the Sonwoh mobile app, this website, or any service we provide through
        them.
      </p>
      <p>
        If you do not agree with any part of these Terms, do not create an
        account and do not use the services. If you are using Sonwoh on behalf
        of a business, you confirm that you are authorised to bind that business
        to these Terms.
      </p>

      <h2 id="eligibility">2. Who can use Sonwoh</h2>
      <p>To open and operate a Sonwoh account you must:</p>
      <ul>
        <li>be at least 18 years old;</li>
        <li>
          provide accurate identity information and complete our verification
          checks;
        </li>
        <li>
          not be a resident of, or located in, a country subject to sanctions
          that would prohibit us from serving you;
        </li>
        <li>
          not appear on any applicable sanctions, terrorism or financial crime
          watchlist.
        </li>
      </ul>
      <p>
        We may refuse, suspend or close an account where we reasonably believe
        these conditions are not met.
      </p>

      <h2 id="account">3. Your account</h2>
      <h3>Verification</h3>
      <p>
        Before you can transact we are required to verify your identity. This is
        a legal obligation under anti-money-laundering and know-your-customer
        rules. Verification tiers determine your transaction and payout limits,
        and you may be asked for further documentation as your activity grows.
      </p>
      <h3>Keeping your account secure</h3>
      <p>
        You are responsible for your login credentials, your device, and any
        activity carried out through your account. Enable every security feature
        we offer, never share your PIN or one-time codes with anyone &mdash;
        including anyone claiming to work for Sonwoh &mdash; and tell us
        immediately at <a href="mailto:help@sonwoh.com">help@sonwoh.com</a> if
        you suspect unauthorised access.
      </p>
      <h3>Accurate information</h3>
      <p>
        You must keep your contact and identity details current. We are not
        responsible for funds sent to an address or account you entered
        incorrectly.
      </p>

      <h2 id="services">4. The services</h2>
      <h3>Crypto trading</h3>
      <p>
        You can buy, sell and swap supported digital assets at the rate quoted
        to you at the moment you confirm a trade. Rates move constantly; the
        quote you are shown is valid only for the short window displayed, and a
        trade cannot be reversed once it is confirmed and settled on-chain.
      </p>
      <h3>Gift card exchange</h3>
      <p>
        You may sell eligible gift cards to us, or buy cards we have listed. By
        submitting a card you confirm that you own it lawfully, that it has not
        been redeemed, and that it was not obtained through fraud. We verify
        every card before releasing payment, and we may decline a card, hold a
        payout pending verification, or reverse a payout if a card is later
        found to be invalid, stolen or already used.
      </p>
      <h3>Bill payments and top-ups</h3>
      <p>
        We pass payments for electricity, airtime, data, cable TV, internet,
        water, education and government levies to the relevant biller. You are
        responsible for entering the correct meter number, phone number or
        customer reference. Once a payment is delivered to a biller we cannot
        recall it, and any dispute about the service itself is between you and
        that biller.
      </p>
      <h3>Cards</h3>
      <p>
        The Sonwoh Virtual Card and Sonwoh Credit Card are not yet available.
        When they launch they will be governed by additional terms that we will
        present to you before you can apply.
      </p>

      <h2 id="fees">5. Fees and rates</h2>
      <p>
        Applicable fees and the exchange rate for a transaction are shown before
        you confirm it. Third parties &mdash; networks, billers, banks &mdash;
        may charge their own fees, which we do not control. We may change our
        fee schedule, and will give reasonable notice in the app before a change
        takes effect.
      </p>

      <h2 id="prohibited">6. Things you must not do</h2>
      <p>You agree not to use Sonwoh to:</p>
      <ul>
        <li>
          launder money, finance terrorism, or move the proceeds of any crime;
        </li>
        <li>
          trade gift cards or assets you do not own or are not entitled to sell;
        </li>
        <li>
          impersonate another person, or open an account on behalf of someone
          else without authority;
        </li>
        <li>
          probe, scrape, reverse-engineer or interfere with our systems or
          security;
        </li>
        <li>
          carry out transactions on behalf of an undisclosed third party, or
          operate an unlicensed money service through your account.
        </li>
      </ul>
      <p>
        We may suspend or close an account, freeze a balance, and report the
        matter to the relevant authorities where we reasonably suspect any of
        the above.
      </p>

      <h2 id="suspension">7. Suspension and closure</h2>
      <p>
        We may suspend or restrict access to your account where we are required
        to by law, where we suspect fraud or a security breach, or where you
        have breached these Terms. Where we can lawfully do so, we will tell you
        why. You may close your account at any time, provided it holds no
        pending transactions and no outstanding balance owed to us.
      </p>

      <h2 id="risk">8. Risk</h2>
      <p>
        Digital assets are volatile and you can lose money. Nothing in the
        Sonwoh app or on this website is investment, tax or legal advice. Please
        read our <Link href="/legal/risk-disclosure">Risk Disclosure</Link>{" "}
        before you trade.
      </p>

      <h2 id="liability">9. Our liability</h2>
      <p>
        We provide the services with reasonable care and skill, but we do not
        guarantee that they will be uninterrupted or error-free. To the fullest
        extent permitted by law, we are not liable for losses arising from
        market movements, from a blockchain network or biller outside our
        control, from your own error in entering transaction details, or from
        your failure to keep your credentials secure.
      </p>
      <p>
        Nothing in these Terms limits any liability that cannot lawfully be
        limited, including liability for fraud.
      </p>

      <h2 id="changes">10. Changes to these Terms</h2>
      <p>
        We may update these Terms as the product and the law change. Where a
        change materially affects your rights we will notify you in the app or
        by email before it takes effect. Continuing to use Sonwoh after that
        date means you accept the updated Terms.
      </p>

      <h2 id="complaints">11. Complaints and disputes</h2>
      <p>
        If something goes wrong, tell us first &mdash; most issues are resolved
        quickly. You can raise a formal complaint through our{" "}
        <Link href="/legal/file">complaints process</Link>. These Terms are
        governed by the laws of the Federal Republic of Nigeria, and the courts
        of Nigeria have jurisdiction over any dispute arising from them.
      </p>

      <h2 id="contact">12. Contact</h2>
      <p>
        Sonwoh &mdash; <a href="mailto:help@sonwoh.com">help@sonwoh.com</a>{" "}
        &mdash; <a href="tel:+2348132209554">+234 813 2209 554</a>
      </p>
    </LegalPage>
  );
}
