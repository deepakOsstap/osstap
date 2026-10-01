import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import {
  culturePillars,
  benefitsData,
  openPositionsData,
} from "@/content/careers";
import { siteConfig } from "@/content/siteConfig";
import { BreadcrumbsJsonLd } from "@/lib/seo/schema";
import {
  MapPin,
  Briefcase,
  Globe,
  Laptop,
  BookOpen,
  HeartPulse,
  Clock,
  TrendingUp,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers | Engineering-First Culture",
  description:
    "Join Osstap. We are looking for senior engineers, cloud architects, and product builders who take pride in solving complex technology challenges.",
};

const benefitIcons: Record<string, React.ElementType> = {
  Globe,
  Laptop,
  BookOpen,
  HeartPulse,
  Clock,
  TrendingUp,
};

export default function CareersPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "https://osstap.com" },
          { name: "Careers", url: "https://osstap.com/careers" },
        ]}
      />

      {/* Careers Hero */}
      <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-white border-b border-brand-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <Container>
          <div className="max-w-3xl">
            <div className="mb-6">
              <Badge variant="accent">Careers &amp; Engineering Culture</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.15] mb-6">
              Build what comes next.
            </h1>
            <p className="text-lg sm:text-xl text-brand-secondary leading-relaxed mb-8">
              Join an engineering-driven consultancy that takes craftsmanship seriously. We value autonomy, technical depth, and clean architectures—delivering mission-critical systems for ambitious companies worldwide.
            </p>
            <div className="flex items-center gap-4">
              <Button href="#open-roles" variant="primary" showArrow>
                View Open Positions ({openPositionsData.length})
              </Button>
              <Button href="#culture" variant="secondary">
                Our Culture &amp; Values
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 1. Open Positions Directory */}
      <Section id="open-roles" variant="default">
        <SectionHeading
          eyebrow="Opportunities"
          title="Open Engineering Roles"
          description="We hire experienced practitioners who want to build high-scale software without management bureaucracy."
        />

        <div className="space-y-4">
          {openPositionsData.map((job) => (
            <div
              key={job.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-brand-border hover:border-brand-accent/50 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-2.5 mb-3 text-xs">
                  <span className="font-semibold text-brand-accent px-2.5 py-0.5 rounded bg-blue-50 border border-blue-100">
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1 text-brand-secondary">
                    <MapPin className="w-3.5 h-3.5" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1 text-brand-secondary">
                    <Briefcase className="w-3.5 h-3.5" />
                    {job.type}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-accent transition-colors">
                  {job.title}
                </h3>

                <p className="text-sm text-brand-secondary leading-relaxed">
                  {job.shortSummary}
                </p>
              </div>

              <div className="flex-shrink-0">
                <Button href={`/careers/${job.slug}`} variant="primary" showArrow>
                  View Role
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* General Application Callout */}
        <div className="mt-10 p-8 rounded-2xl bg-brand-light border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-brand-dark mb-1">
              Don&apos;t see your specific role?
            </h4>
            <p className="text-sm text-brand-secondary max-w-xl">
              We are constantly seeking exceptional system architects, mobile specialists, and AI researchers. Send your GitHub, portfolio, and background directly to our engineering leadership.
            </p>
          </div>
          <Button
            href={`mailto:${siteConfig.contact.recipientEmail}?subject=General%20Engineering%20Inquiry%20-%20Osstap`}
            variant="outline"
            external
          >
            <Mail className="w-4 h-4 mr-2" />
            <span>Send Profile</span>
          </Button>
        </div>
      </Section>

      {/* 2. Culture & Values */}
      <Section id="culture" variant="light">
        <SectionHeading
          eyebrow="How We Operate"
          title="Our Engineering Pillars"
          description="We built Osstap around the environment that senior engineers need to do their best work."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {culturePillars.map((pillar) => (
            <Card key={pillar.number} className="p-8 h-full flex flex-col justify-between bg-white">
              <div>
                <span className="font-mono text-xs font-semibold text-brand-accent px-2.5 py-1 rounded bg-blue-50 border border-blue-100 mb-6 inline-block">
                  PILLAR {pillar.number}
                </span>
                <CardTitle className="text-xl text-brand-dark mb-3">
                  {pillar.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {pillar.description}
                </CardDescription>
              </div>
            </Card>
          ))}

          {/* Additional engineering quote card */}
          <div className="p-8 rounded-xl bg-brand-dark text-white border border-brand-dark-border flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-semibold text-brand-accent uppercase tracking-wider mb-4">
                The Engineering Standard
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                &ldquo;We measure progress by working, tested software in production—not Jira tickets moved across a board or slides presented in status meetings.&rdquo;
              </p>
            </div>
            <div className="text-xs font-semibold text-white">
              — Osstap Core Engineering Philosophy
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Benefits & Perks */}
      <Section variant="default">
        <SectionHeading
          eyebrow="Benefits & Environment"
          title="Crafted for focus, autonomy, and well-being."
          description="We provide comprehensive benefits and the highest-grade tools to ensure our engineers can focus on deep, impactful work."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefitsData.map((benefit) => {
            const Icon = benefitIcons[benefit.iconName] || Globe;
            return (
              <div
                key={benefit.title}
                className="p-6 sm:p-8 rounded-xl border border-brand-border bg-white flex items-start gap-4 hover:border-brand-accent/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-light text-brand-accent flex items-center justify-center flex-shrink-0 border border-brand-border/60">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-dark mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-brand-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Final CTA */}
      <FinalCtaSection />
    </>
  );
}
