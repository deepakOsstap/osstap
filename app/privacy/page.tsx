import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { BreadcrumbsJsonLd } from "@/lib/seo/schema";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Review Osstap's privacy policy regarding data collection, confidentiality, client code protection, and security practices.",
};

export default function PrivacyPage() {
  const lastUpdated = "September 21, 2026";

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "https://osstap.com" },
          { name: "Privacy Policy", url: "https://osstap.com/privacy" },
        ]}
      />

      {/* Header */}
      <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 overflow-hidden bg-white border-b border-brand-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <Container size="narrow">
          <div className="mb-4">
            <Badge variant="outline">Legal &amp; Compliance</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-brand-secondary font-mono">
            Last updated: {lastUpdated}
          </p>
        </Container>
      </section>

      {/* Policy Content */}
      <Section variant="default" containerSize="narrow" className="py-12 sm:py-16">
        <div className="prose prose-slate max-w-none text-brand-secondary space-y-8 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              1. Overview &amp; Commitment
            </h2>
            <p>
              {siteConfig.legalName} (&quot;Osstap&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to safeguarding the privacy of our clients, website visitors, and prospective partners. This Privacy Policy details how we collect, store, handle, and protect personal and corporate information when you interact with our website ({siteConfig.url}) or engage our technology consulting and engineering services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              2. Information We Collect
            </h2>
            <p>We collect information you directly provide to us, including:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <strong>Contact Inquiries:</strong> Full name, professional work email address, company name, phone number, estimated project budget, and technical scope notes submitted through our contact forms.
              </li>
              <li>
                <strong>Employment Applications:</strong> Resumes, CVs, portfolio links, GitHub handles, and communication records submitted during career applications.
              </li>
              <li>
                <strong>Technical &amp; Telemetry Data:</strong> Minimal device information, browser type, operating system, referring URLs, and approximate geographic region collected automatically for security auditing and performance monitoring.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              3. Client Code &amp; Intellectual Property Protection
            </h2>
            <p>
              We treat all client codebases, technical designs, product roadmaps, and architectural diagrams as strictly confidential proprietary information.
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                All discussions concerning proprietary systems are protected under Mutual Non-Disclosure Agreements (NDAs).
              </li>
              <li>
                We do not sell, rent, or commercialize client data or source code under any circumstances.
              </li>
              <li>
                Client repositories are accessed exclusively through secure, authenticated access controls with least-privilege permissions.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              4. How We Use Collected Data
            </h2>
            <p>We use information solely for legitimate business purposes:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>To evaluate project feasibility and prepare technical consultation responses.</li>
              <li>To execute contractual obligations and deliver software engineering services.</li>
              <li>To evaluate candidates for open engineering positions.</li>
              <li>To monitor website performance, detect security anomalies, and prevent malicious activities.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              5. Cookies &amp; Analytics
            </h2>
            <p>
              Our website uses minimal, functional cookies necessary for secure navigation and basic performance telemetry. We do not use third-party behavioral advertising trackers or sell tracking profiles to data brokers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              6. Data Security &amp; Retention
            </h2>
            <p>
              We implement industry-standard technical measures—including TLS 1.3 encryption in transit, secure cloud key management, and strict access controls—to protect information against unauthorized disclosure, alteration, or destruction. We retain client inquiries only as long as necessary to fulfill the operational purpose for which they were gathered.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              7. International Data Transfers &amp; Rights
            </h2>
            <p>
              As a global technology consultancy, data may be processed across secure cloud infrastructures worldwide. Depending on your jurisdiction (such as GDPR in the EU/UK or CCPA in California), you possess rights to access, correct, port, or request the deletion of your personal data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              8. Contact &amp; Data Protection Inquiries
            </h2>
            <p>
              For any questions regarding this Privacy Policy or data protection practices, please contact our legal and compliance team at:
            </p>
            <p className="font-semibold text-brand-dark mt-2">
              Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-accent hover:underline">{siteConfig.contact.email}</a><br />
              Entity: {siteConfig.legalName}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
