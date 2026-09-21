import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/content/siteConfig";
import { BreadcrumbsJsonLd } from "@/lib/seo/schema";
import {
  Mail,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Lock,
  FileCode,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | Start a Technical Consultation",
  description:
    "Connect with Osstap's senior engineering team to discuss your product development, cloud transformation, AI integration, or dedicated squad requirements.",
};

export default function ContactPage() {
  const faqs = [
    {
      q: "Who owns the intellectual property (IP)?",
      a: "You retain 100% of all intellectual property, source code, data models, and deployment configurations from day one.",
    },
    {
      q: "Do you sign Mutual Non-Disclosure Agreements (NDAs)?",
      a: "Yes. We execute mutual NDAs prior to reviewing proprietary codebases, technical designs, or strategic roadmaps.",
    },
    {
      q: "How quickly can a dedicated squad start?",
      a: "Typically within 1 to 2 weeks of scope alignment. We maintain vetted senior engineering capacity ready to deploy.",
    },
    {
      q: "What engagement models do you offer?",
      a: "We offer end-to-end product delivery, fixed-scope architectural modernization sprints, and dedicated monthly engineering squads.",
    },
  ];

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "https://osstap.com" },
          { name: "Contact", url: "https://osstap.com/contact" },
        ]}
      />

      {/* Hero Header */}
      <section className="relative pt-16 pb-16 sm:pt-20 sm:pb-20 overflow-hidden bg-white border-b border-brand-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <Container>
          <div className="max-w-3xl">
            <div className="mb-6">
              <Badge variant="accent">Technical Consultation</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.15] mb-6">
              Let&apos;s build something meaningful.
            </h1>
            <p className="text-lg sm:text-xl text-brand-secondary leading-relaxed">
              Have a product idea, complex architectural challenge, or need a senior engineering squad? Connect directly with our lead architects.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Two-Column Contact Section */}
      <Section variant="light" className="py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & FAQs */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-white border border-brand-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-accent flex items-center justify-center flex-shrink-0 border border-blue-100">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-secondary mb-1">
                    Client &amp; Partnership Inquiries
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.salesEmail}`}
                    className="text-base font-bold text-brand-dark hover:text-brand-accent transition-colors"
                  >
                    {siteConfig.contact.salesEmail}
                  </a>
                  <p className="text-xs text-brand-secondary mt-1">
                    Direct routing to practice leads
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-brand-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 border border-emerald-100">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-secondary mb-1">
                    Guaranteed Turnaround
                  </div>
                  <div className="text-base font-bold text-brand-dark">
                    Under 24 Business Hours
                  </div>
                  <p className="text-xs text-brand-secondary mt-1">
                    Technical evaluation, not sales spam
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-white border border-brand-border flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 border border-purple-100">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-secondary mb-1">
                    Engineering Careers
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.careersEmail}`}
                    className="text-base font-bold text-brand-dark hover:text-brand-accent transition-colors"
                  >
                    {siteConfig.contact.careersEmail}
                  </a>
                  <p className="text-xs text-brand-secondary mt-1">
                    Direct to hiring architects
                  </p>
                </div>
              </div>
            </div>

            {/* Partnership Guarantees */}
            <div className="p-6 rounded-xl bg-brand-dark text-white border border-brand-dark-border space-y-3">
              <div className="text-xs font-mono font-semibold text-brand-accent uppercase tracking-wider mb-2">
                Our Operating Guarantee
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <Lock className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>Mutual NDA executed prior to code reviews</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <FileCode className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>100% Client Intellectual Property ownership</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-brand-accent flex-shrink-0" />
                <span>Direct Slack and GitHub collaboration</span>
              </div>
            </div>

            {/* Partnership FAQs */}
            <div>
              <h3 className="text-lg font-bold text-brand-dark mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="p-4 rounded-xl bg-white border border-brand-border"
                  >
                    <h4 className="text-sm font-semibold text-brand-dark mb-1 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>{faq.q}</span>
                    </h4>
                    <p className="text-xs text-brand-secondary leading-relaxed pl-6">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
