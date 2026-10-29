// Draft privacy policy written against the product described in the Figma file.
// Have counsel review before this goes live.
import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sonwoh collects, uses, shares and protects your personal information, and the rights you have over it.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary="This policy explains what personal information Sonwoh collects, why we collect it, who we share it with, and the control you have over it."
    >
      <h2 id="scope">1. Scope</h2>
      <p>
        This policy covers the Sonwoh mobile app, this website, and every
        service we provide through them. It sits alongside our{" "}
        <Link href="/legal/terms">Terms of Service</Link>.
      </p>

      <h2 id="what-we-collect">2. Information we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li>
          <strong>Account details</strong> &mdash; your name, email address,
          phone number and date of birth.
        </li>
        <li>
          <strong>Identity verification</strong> &mdash; a government-issued ID,
          a selfie or liveness check, your address, and where required a bank
          verification number. We are legally obliged to collect these.
        </li>
        <li>
          <strong>Transaction information</strong> &mdash; the gift cards you
          submit, the wallet addresses you send to, the meter and customer
          numbers you pay, and the bank account you withdraw to.
        </li>
        <li>
          <strong>Support correspondence</strong> &mdash; the messages, screen
          shots and documents you send our team.
        </li>
      </ul>
      <h3>Information we collect automatically</h3>
      <ul>
        <li>
          <strong>Device and app data</strong> &mdash; device model, operating
          system, app version, language and time zone.
        </li>
        <li>
          <strong>Usage data</strong> &mdash; the screens you open, the features
          you use, and errors the app encounters.
        </li>
        <li>
          <strong>Security data</strong> &mdash; IP address, login times, and
          signals we use to detect fraud and unauthorised access.
        </li>
      </ul>
      <h3>Information from third parties</h3>
      <p>
        We receive verification results from identity providers, settlement
        confirmations from payment processors and billers, and screening results
        from sanctions and fraud databases.
      </p>

      <h2 id="why">3. Why we use it</h2>
      <ul>
        <li>to open your account and verify who you are;</li>
        <li>
          to carry out the transactions you ask for and keep a record of them;
        </li>
        <li>
          to meet our anti-money-laundering, counter-terrorism-financing, tax
          and record-keeping obligations;
        </li>
        <li>
          to detect, investigate and prevent fraud, abuse and security
          incidents;
        </li>
        <li>to provide support when you contact us;</li>
        <li>
          to improve the product &mdash; understanding which features are used
          and where people get stuck;
        </li>
        <li>
          to send you service messages, and &mdash; only where you have opted in
          &mdash; product updates and marketing.
        </li>
      </ul>

      <h2 id="legal-basis">4. Our legal grounds</h2>
      <p>
        We process your information because it is necessary to perform our
        contract with you, because we have a legal obligation to do so, because
        we have a legitimate interest in running a secure service, or because
        you have given consent. Where we rely on consent &mdash; marketing, for
        example &mdash; you can withdraw it at any time.
      </p>

      <h2 id="sharing">5. Who we share it with</h2>
      <p>
        We do not sell your personal information. We share it only with:
      </p>
      <ul>
        <li>
          <strong>Service providers</strong> who help us operate &mdash;
          identity verification, cloud hosting, payment processing, customer
          support tooling and analytics &mdash; under contracts that limit what
          they may do with it.
        </li>
        <li>
          <strong>Billers and networks</strong>, where a payment you have
          initiated requires it.
        </li>
        <li>
          <strong>Regulators and law enforcement</strong>, where we are legally
          required to disclose or where it is necessary to prevent a crime.
        </li>
        <li>
          <strong>A successor entity</strong>, if Sonwoh is ever involved in a
          merger, acquisition or sale of assets. We would notify you first.
        </li>
      </ul>

      <h2 id="transfers">6. International transfers</h2>
      <p>
        Some of our providers operate outside Nigeria. Where your information is
        transferred abroad we put appropriate safeguards in place so it remains
        protected to the standard described in this policy.
      </p>

      <h2 id="retention">7. How long we keep it</h2>
      <p>
        We keep account and transaction records for as long as your account is
        open and for a minimum of five years after it closes, which is the
        retention period financial regulations require of us. Support
        correspondence and analytics data are kept for shorter periods, and
        anything we no longer need is deleted or anonymised.
      </p>

      <h2 id="security">8. How we protect it</h2>
      <p>
        Information is encrypted in transit and at rest. Access to production
        systems is restricted to staff who need it, protected by multi-factor
        authentication, and logged. We monitor continuously for unusual
        activity. No system is perfectly secure, so please also do your part:
        use a strong, unique password and never share one-time codes.
      </p>

      <h2 id="rights">9. Your rights</h2>
      <p>You can ask us to:</p>
      <ul>
        <li>give you a copy of the information we hold about you;</li>
        <li>correct anything that is inaccurate or out of date;</li>
        <li>
          delete information we no longer have a legal reason to keep &mdash;
          note that records we must retain by law cannot be deleted on request;
        </li>
        <li>stop sending you marketing;</li>
        <li>restrict or object to certain processing.</li>
      </ul>
      <p>
        Email <a href="mailto:help@sonwoh.com">help@sonwoh.com</a> and we will
        respond within 30 days. If you are not satisfied with our response you
        may complain to the Nigeria Data Protection Commission.
      </p>

      <h2 id="cookies">10. Cookies and similar technologies</h2>
      <p>
        This website uses cookies that are necessary for it to function, and
        analytics cookies that help us understand how the site is used. You can
        clear or block cookies through your browser settings, though doing so
        may affect how parts of the site work.
      </p>

      <h2 id="children">11. Children</h2>
      <p>
        Sonwoh is not for anyone under 18. We do not knowingly collect
        information from children, and we delete it if we discover we have.
      </p>

      <h2 id="changes">12. Changes to this policy</h2>
      <p>
        We will update this policy as the product and the law change. Where a
        change is significant we will notify you in the app or by email before
        it takes effect.
      </p>

      <h2 id="contact">13. Contact</h2>
      <p>
        Sonwoh &mdash; <a href="mailto:help@sonwoh.com">help@sonwoh.com</a>{" "}
        &mdash; <a href="tel:+2348132209554">+234 813 2209 554</a>
      </p>
    </LegalPage>
  );
}
