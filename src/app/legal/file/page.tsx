// The design's Legal column lists this link simply as "File". Read as the
// complaints route that the Terms point at. Have counsel review before launch.
import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "@/components/LegalPage";
import ComplaintForm from "@/components/ComplaintForm";

export const metadata: Metadata = {
  title: "File a Complaint",
  description:
    "How to raise a formal complaint with Sonwoh, what happens after you do, and how long each stage takes.",
};

export default function FilePage() {
  return (
    <LegalPage
      title="File a Complaint"
      summary="If something has gone wrong, tell us. This page explains how to raise a formal complaint, what we do with it, and how long each stage takes."
    >
      <h2 id="before">Before you file</h2>
      <p>
        Most issues are resolved fastest through live chat in the app, where our
        team can see your transaction history straight away. Use the formal
        process below if chat has not resolved it, if the matter is serious, or
        if you would like a written record.
      </p>
      <p>
        If you believe your account has been compromised, do not wait &mdash;
        call <a href="tel:+2348132209554">+234 813 2209 554</a> immediately so
        we can secure it.
      </p>

      <h2 id="form">Submit your complaint</h2>
      <p>
        Give us as much detail as you can. Transaction references, dates and
        screenshots all help us investigate faster.
      </p>

      <div className="my-8">
        <ComplaintForm />
      </div>

      <p>
        You can also write to us at{" "}
        <a href="mailto:help@sonwoh.com">help@sonwoh.com</a> with the same
        information.
      </p>

      <h2 id="what-happens">What happens next</h2>
      <ol>
        <li>
          <strong>Acknowledgement &mdash; within 1 business day.</strong> We
          confirm receipt and send you a reference number.
        </li>
        <li>
          <strong>Investigation &mdash; up to 10 business days.</strong> We
          review your account, the transaction records, and anything the
          relevant network, biller or partner can tell us. We may come back to
          you for more detail.
        </li>
        <li>
          <strong>Outcome.</strong> We write to you with our findings, what we
          are doing about it, and the reasoning behind the decision.
        </li>
        <li>
          <strong>Review.</strong> If you are not satisfied, reply within 30
          days and a senior member of the team who was not involved in the
          original decision will take a fresh look.
        </li>
      </ol>
      <p>
        Complex cases &mdash; particularly those involving a third-party biller,
        a blockchain network, or a law enforcement request &mdash; can take
        longer. Where that happens we will tell you why and keep you updated.
      </p>

      <h2 id="escalate">If we cannot resolve it</h2>
      <p>
        If you remain dissatisfied after our review, you may escalate the matter
        to the relevant Nigerian regulator or consumer protection body for the
        service in question. We will provide the records you need to do so.
      </p>

      <h2 id="related">Related documents</h2>
      <p>
        <Link href="/legal/terms">Terms of Service</Link> &middot;{" "}
        <Link href="/legal/privacy">Privacy Policy</Link> &middot;{" "}
        <Link href="/legal/risk-disclosure">Risk Disclosure</Link>
      </p>
    </LegalPage>
  );
}
