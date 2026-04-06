import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | STRV.AI",
  description: "Terms of Service for STRV.AI – AI-powered coaching and productivity platform.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen px-4 py-12 md:px-8 lg:px-16 bg-white text-gray-900">
      <div className="mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">
          Effective date: <span className="font-medium">April 6, 2026</span>
        </p>

        <section className="space-y-4 mb-8">
          <p>By using STRV.AI, you agree to the following terms.</p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">1. Service Description</h2>
          <p>
            STRV.AI is an AI-powered coaching and productivity platform that
            provides tools for fitness, nutrition, and scheduling.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">2. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide accurate information</li>
            <li>Use the service lawfully</li>
            <li>Not misuse or attempt to disrupt the system</li>
          </ul>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">3. AI Disclaimer</h2>
          <p>
            STRV.AI provides AI-generated suggestions for informational purposes
            only. They do not replace professional medical, fitness, or
            nutritional advice.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">4. Accounts</h2>
          <p>You are responsible for:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Maintaining account security</li>
            <li>All activity under your account</li>
          </ul>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">5. Google Integration</h2>
          <p>If you connect Google services:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              You authorize STRV.AI to access your data (e.g. Calendar)
            </li>
            <li>You can revoke access at any time</li>
          </ul>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">6. Data &amp; Privacy</h2>
          <p>
            Your use of STRV.AI is also governed by our{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">7. Availability</h2>
          <p>
            We aim to provide reliable service but do not guarantee uninterrupted
            access.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">8. Limitation of Liability</h2>
          <p>
            STRV.AI is provided &ldquo;as is&rdquo;. We are not liable for:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Data loss</li>
            <li>Service interruptions</li>
            <li>Decisions made based on AI outputs</li>
          </ul>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">9. Termination</h2>
          <p>
            We may suspend or terminate access if terms are violated.
          </p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">10. Changes</h2>
          <p>We may update these terms at any time.</p>
        </section>

        <section className="space-y-3 mb-8">
          <h2 className="text-xl font-semibold">11. Contact</h2>
          <p>
            For questions:{" "}
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
