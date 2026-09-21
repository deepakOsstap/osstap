import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  servicesData,
} from "@/content/services";
import { BreadcrumbsJsonLd } from "@/lib/seo/schema";
import {
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  PackageCheck,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Osstap Services`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} | Osstap Services`,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Get other services for recommendation
  const otherServices = servicesData.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "https://osstap.com" },
          { name: "Services", url: "https://osstap.com/services" },
          { name: service.title, url: `https://osstap.com/services/${service.slug}` },
        ]}
      />

      {/* Service Header / Hero */}
      <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-white border-b border-brand-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <Container>
          <div className="max-w-4xl">
            {/* Back link */}
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-secondary hover:text-brand-dark mb-6 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all services</span>
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-xs font-semibold text-brand-accent px-3 py-1 rounded-md bg-blue-50 border border-blue-100">
                PRACTICE {service.number}
              </span>
              <Badge variant="accent">{service.title}</Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.12] mb-6">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-brand-secondary leading-relaxed mb-8 max-w-3xl">
              {service.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button href="/contact" variant="primary" size="lg" showArrow>
                Discuss Your {service.title} Project
              </Button>
              <Button href="#capabilities" variant="secondary" size="lg">
                Explore Capabilities
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 1. Problem Statement */}
      <Section variant="light">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Badge variant="accent" className="mb-4">
              The Architectural Problem
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark mb-4">
              {service.problem.title}
            </h2>
            <p className="text-base text-brand-secondary leading-relaxed">
              {service.problem.description}
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white border border-brand-border p-8 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-brand-dark mb-4">
                Common Roadblocks We Eliminate:
              </div>
              <ul className="space-y-4">
                {service.problem.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-brand-secondary">
                    <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Core Capabilities */}
      <Section id="capabilities" variant="default">
        <SectionHeading
          eyebrow="Capabilities"
          title={`Comprehensive ${service.title} capabilities.`}
          description="Every engagement is executed with disciplined engineering standards, automated test suites, and strict architectural contracts."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.capabilities.map((cap) => (
            <Card key={cap.title} className="p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0" />
                  <CardTitle className="text-xl text-brand-dark">
                    {cap.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-sm leading-relaxed pl-7">
                  {cap.description}
                </CardDescription>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 3. Technology Stack */}
      <Section variant="light">
        <SectionHeading
          eyebrow="Specialized Tooling"
          title="Technology stack tailored for this practice."
          description="We select proven, battle-tested technologies optimized for maintainability, developer ergonomics, and enterprise scale."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {service.technologies.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl bg-white border border-brand-border shadow-sm flex flex-col"
            >
              <div className="text-xs font-mono font-semibold text-brand-accent uppercase tracking-wider mb-4 pb-2 border-b border-brand-border/60">
                {group.category}
              </div>
              <ul className="space-y-2">
                {group.items.map((tech) => (
                  <li key={tech} className="text-sm font-medium text-brand-dark flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/50" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Approach & Methodology */}
      <Section variant="default">
        <SectionHeading
          eyebrow="Execution Methodology"
          title="How we deliver this service."
          description="A phased execution model engineered to minimize technical risk and provide transparent visibility at every milestone."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.approach.map((step) => (
            <div
              key={step.step}
              className="p-6 rounded-xl bg-brand-light border border-brand-border flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xl font-bold text-brand-accent block mb-3">
                  {step.step}
                </span>
                <h4 className="text-lg font-bold text-brand-dark mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-brand-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Business Outcomes & Tangible Deliverables */}
      <Section variant="dark">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Measurable Outcomes */}
          <div className="lg:col-span-7">
            <div className="mb-4">
              <Badge variant="dark" className="text-xs">
                <TrendingUp className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                Measurable Impact
              </Badge>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Outcomes we commit to delivering:
            </h3>
            <div className="space-y-4">
              {service.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  className="p-4 rounded-xl bg-brand-dark-surface border border-brand-dark-border flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-300 leading-relaxed font-medium">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <Badge variant="dark" className="text-xs">
                <PackageCheck className="w-3.5 h-3.5 mr-1 text-brand-accent" />
                Tangible Deliverables
              </Badge>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              What you receive:
            </h3>
            <ul className="space-y-3">
              {service.deliverables.map((deliv) => (
                <li
                  key={deliv}
                  className="p-3.5 rounded-lg bg-brand-dark-surface border border-brand-dark-border text-xs text-slate-300 flex items-center gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                  <span>{deliv}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 6. Other Practice Areas */}
      <Section variant="default">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-accent mb-2">
              Related Practices
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark">
              Explore complementary services.
            </h3>
          </div>
          <Button href="/services" variant="outline" showArrow>
            All 7 Services
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherServices.map((other) => (
            <Card
              key={other.id}
              href={`/services/${other.slug}`}
              interactive
              className="p-6 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-brand-accent block mb-2">
                  {other.number}
                </span>
                <CardTitle className="text-lg mb-2">{other.title}</CardTitle>
                <CardDescription className="text-xs line-clamp-2">
                  {other.shortDescription}
                </CardDescription>
              </div>
              <div className="mt-4 pt-4 border-t border-brand-border/60 text-xs font-semibold text-brand-accent flex items-center justify-between">
                <span>View practice</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Final Closing Consultation CTA */}
      <FinalCtaSection />
    </>
  );
}
