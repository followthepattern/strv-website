import React from "react";

export const metadata = {
  title: "Privacy Policy | STRV.AI",
  description:
    "Privacy Policy for STRV.AI regarding email and name collection for subscriptions, compliant with GDPR.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 py-12 md:px-8 lg:px-16 bg-white text-gray-900">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">STRV.AI Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: <span className="font-medium">21th Nov 2025</span>
        </p>

        <section className="space-y-4 mb-8">
          <p>
            This Privacy Policy explains how <strong>STRV.AI</strong> (“we”,
            “our”, “us”) collects, uses, and protects your personal data when
            you subscribe for updates or early access.
          </p>
          <p>
            We are committed to protecting your privacy and complying with the{" "}
            <strong>General Data Protection Regulation (GDPR)</strong> and
            applicable data protection laws.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">1. What Personal Data We Collect</h2>
          <p>When you subscribe to our early access or newsletter list, we may collect:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Name</li>
            <li>Email address</li>
          </ul>
          <p>We do not collect sensitive personal information at this stage.</p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">2. How We Use Your Data</h2>
          <p>We use your personal data solely for the following purposes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Sending launch updates and product news</li>
            <li>Providing early access information</li>
            <li>Communicating relevant announcements about STRV.AI</li>
          </ul>
          <p>
            We will <strong>never sell or share your information</strong> with
            third parties for their own marketing purposes.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">
            3. Legal Basis for Processing (GDPR)
          </h2>
          <p>Under the GDPR, we rely on the following legal bases:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <strong>Consent</strong> (Article 6(1)(a)) – You voluntarily
              provide your email and agree to receive updates.
            </li>
            <li>
              <strong>Legitimate interest</strong> (Article 6(1)(f)) – We have
              an interest in communicating relevant information about our
              product to people who subscribed.
            </li>
          </ul>
          <p>You may withdraw your consent at any time.</p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">
            4. How We Store and Protect Your Data
          </h2>
          <p>
            We store your information securely using industry-standard safeguards
            to prevent unauthorized access, alteration, or misuse.
          </p>
          <p>
            Your data may be stored on secure servers provided by our email
            service or hosting providers.
          </p>
          <p>
            We take appropriate technical and organizational measures in line
            with GDPR Article 32.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">5. How Long We Keep Your Data</h2>
          <p>
            We retain your data <strong>until you unsubscribe</strong> or
            request deletion.
          </p>
          <p>
            If you unsubscribe, your email will be removed from our active
            mailing list within a reasonable timeframe.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">6. Your GDPR Rights</h2>
          <p>Under the GDPR, you have the right to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Access your personal data</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your data (“right to be forgotten”)</li>
            <li>Withdraw consent at any time</li>
            <li>Request data portability</li>
            <li>Restrict or object to processing</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{" "}
            <strong>csaba@followthepattern.net</strong>.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">7. Sharing Your Data</h2>
          <p>We only share your personal data with:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Email delivery providers (for sending newsletters and updates)
            </li>
            <li>Hosting or infrastructure providers (for secure storage)</li>
          </ul>
          <p>
            These providers act as <strong>data processors</strong>, and we take
            steps to ensure they comply with GDPR requirements.
          </p>
          <p>
            We do not share your data with advertisers or unrelated third
            parties for their own marketing.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">8. Cookies & Tracking</h2>
          <p>
            Our website may use basic cookies or analytics tools to understand
            traffic and improve the user experience.
          </p>
          <p>
            Where required, we will request your consent before setting
            non-essential cookies.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">9. Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy or wish to
            exercise your rights, please contact us:
          </p>
          <p>
            Email: <strong>csaba@followthepattern.net</strong>
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">
            10. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. The “Last
            updated” date at the top of this page will indicate the most recent
            version.
          </p>
          <p>
            We encourage you to review this page periodically to stay informed
            about how we protect your data.
          </p>
        </section>
      </div>
    </main>
  );
}