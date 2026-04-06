import React from "react";

export const metadata = {
  title: "Privacy Policy | STRV.AI",
  description:
    "Privacy Policy for STRV.AI – AI-powered coaching and productivity platform.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 py-12 md:px-8 lg:px-16 bg-white text-gray-900">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective date: <span className="font-medium">April 6, 2026</span>
        </p>

        <section className="space-y-4 mb-8">
          <p>
            STRV.AI (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) operates a coaching and
            productivity platform designed to help users track fitness,
            nutrition, and performance.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">1. Information We Collect</h2>
          <p>We may collect:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Account information (email, name)</li>
            <li>
              User-generated content (workouts, nutrition logs, messages)
            </li>
            <li>Device and usage data</li>
            <li>Audio inputs (if voice features are used)</li>
            <li>Calendar data (if you connect Google Calendar)</li>
          </ul>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">2. Google User Data</h2>
          <p>
            If you choose to connect your Google account, STRV.AI may access
            your Google Calendar data.
          </p>
          <p>We use this data strictly to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Display your schedule</li>
            <li>Provide coaching insights</li>
            <li>Create and manage reminders</li>
          </ul>
          <p>We do not:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Sell your Google data</li>
            <li>Use it for advertising</li>
            <li>
              Share it with third parties (except as required to operate the
              service)
            </li>
          </ul>
          <p>
            STRV.AI complies with the{" "}
            <strong>Google API Services User Data Policy</strong>, including
            Limited Use requirements.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">3. How We Use Information</h2>
          <p>We use your data to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide and improve the service</li>
            <li>Generate AI-based coaching insights</li>
            <li>Sync and manage schedules</li>
            <li>Communicate with you (notifications, updates)</li>
          </ul>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">
            4. Data Storage &amp; Security
          </h2>
          <p>
            Your data is securely stored using industry-standard practices. We
            take reasonable measures to protect against unauthorized access.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">5. Data Sharing</h2>
          <p>We do not sell your personal data.</p>
          <p>We may share data only:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>With service providers necessary to operate STRV.AI</li>
            <li>If required by law</li>
          </ul>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">6. Your Rights</h2>
          <p>You can:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Request deletion of your data</li>
            <li>Disconnect your Google account at any time</li>
          </ul>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">7. Third-Party Services</h2>
          <p>
            STRV.AI integrates with third-party services such as Google
            Calendar. These services have their own privacy policies.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">8. Changes</h2>
          <p>
            We may update this policy. Updates will be reflected on this page.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">9. Contact</h2>
          <p>
            For questions, contact:{" "}
            <a
              href="mailto:csaba@followthepattern.net"
              className="text-blue-600 hover:underline"
            >
              csaba@followthepattern.net
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
