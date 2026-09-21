import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { BreadcrumbsJsonLd } from "@/lib/seo/schema";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Review Osstap's terms of service governing technology consulting, engineering deliverables, intellectual property, and client engagements.",
};

export default function TermsPage() {
  const lastUpdated = "September 21, 2026";

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "https://osstap.com" },
          { name: "Terms of Service", url: "https://osstap.com/terms" },
        ]}
      />

      {/* Header */}
      <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 overflow-hidden bg-white border-b border-brand-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <Container size="narrow">
          <div className="mb-4">
            <Badge variant="outline">Legal Agreement</Badge>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-brand-secondary font-mono">
            Last updated: {lastUpdated}
          </p>
        </Container>
      </section>

      {/* Terms Content */}
      <Section variant="default" containerSize="narrow" className="py-12 sm:py-16">
        <div className="prose prose-slate max-w-none text-brand-secondary space-y-8 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              1. Agreement to Terms
            </h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between {siteConfig.legalName} (&quot;Osstap&quot;, &quot;we&quot;, &quot;us&quot;) and you or the entity you represent (&quot;Client&quot;, &quot;you&quot;). By accessing our website ({siteConfig.url}) or contracting our technology consulting, software engineering, or dedicated squad services, you agree to these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              2. Scope of Technology Services
            </h2>
            <p>
              Osstap provides digital engineering, cloud architecture, AI development, mobile application engineering, and technical advisory services as specified in individually executed Statements of Work (SOW) or Master Services Agreements (MSA). In the event of any direct conflict between these general Terms and a customized SOW signed by both parties, the SOW shall govern.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              3. 100% Client Intellectual Property Ownership
            </h2>
            <p>
              We firmly believe that clients must own what they pay for:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>
                <strong>Custom Deliverables:</strong> Upon payment of applicable fees, all custom source code, system architectures, database schemas, and documentation created specifically for the Client shall become the exclusive intellectual property of the Client.
              </li>
              <li>
                <strong>Pre-Existing Tools:</strong> Osstap retains ownership of generic developer tooling, internal libraries, or boilerplate utilities developed independently of the client engagement. Clients are granted a perpetual, royalty-free, worldwide license to utilize any pre-existing code incorporated into their deliverables.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              4. Non-Disclosure &amp; Confidentiality
            </h2>
            <p>
              Both parties agree to hold all proprietary and technical information in strict confidence. Neither party will disclose confidential architectures, business strategies, pricing structures, or codebases to third parties without prior written consent, except where required by law.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              5. Professional Standards &amp; Warranties
            </h2>
            <p>
              Osstap warrants that all engineering services will be executed in a professional, workmanlike manner consistent with established software engineering industry standards. We provide warranty periods for critical defect remediation as defined in individual project agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, consequential, special, or punitive damages (including loss of profits, revenue, or business opportunity) arising out of or related to these Terms. Each party&apos;s total aggregate liability shall be limited to the total fees paid by Client to Osstap under the specific engagement in the preceding six (6) months.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              7. Governing Law &amp; Dispute Resolution
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with applicable corporate laws. Any dispute arising out of or related to these Terms will first be addressed through good-faith executive mediation prior to initiating formal legal proceedings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-brand-dark mb-3">
              8. Inquiries
            </h2>
            <p>
              For legal notices or questions regarding these Terms, please contact us at:
            </p>
            <p className="font-semibold text-brand-dark mt-2">
              Email: <a href={`mailto:${siteConfig.contact.email}`} className="text-brand-accent hover:underline">{siteConfig.contact.email}</a><br />
              Legal: {siteConfig.legalName}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
