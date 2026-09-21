import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { servicesData } from "@/content/services";
import { BreadcrumbsJsonLd } from "@/lib/seo/schema";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Capabilities",
  description:
    "Explore Osstap's full suite of technology services: Product Engineering, Web & Mobile, AI & Automation, Cloud & DevOps, Technology Consulting, and Dedicated Teams.",
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "https://osstap.com" },
          { name: "Services", url: "https://osstap.com/services" },
        ]}
      />

      {/* Services Hero Section */}
      <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-white border-b border-brand-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <Container>
          <div className="max-w-3xl">
            <div className="mb-6">
              <Badge variant="accent">Capabilities &amp; Practice Areas</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.15] mb-6">
              Technology expertise for every stage of your journey.
            </h1>
            <p className="text-lg sm:text-xl text-brand-secondary leading-relaxed mb-8">
              We provide deep engineering specialization across software architecture, cloud platforms, autonomous AI systems, and mobile applications. Every practice area is staffed by senior practitioners focused on measurable commercial outcomes.
            </p>
            <div className="flex items-center gap-4">
              <Button href="/contact" variant="primary" showArrow>
                Discuss a Project
              </Button>
              <Button href="#catalog" variant="secondary">
                View All 7 Services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Catalog */}
      <Section id="catalog" variant="light">
        <SectionHeading
          eyebrow="Complete Catalog"
          title="Engineered to solve your most difficult technical challenges."
          description="Click any practice area below for an in-depth breakdown of our architectural approach, specialized technologies, and delivered business outcomes."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-white border border-brand-border p-8 sm:p-10 shadow-sm hover:shadow-lg hover:border-brand-accent/40 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header: Number & Tag */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-brand-border/60">
                  <span className="font-mono text-sm font-semibold text-brand-accent px-3 py-1 rounded-md bg-blue-50 border border-blue-100">
                    {service.number}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-brand-secondary font-medium">
                    Enterprise Practice
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-dark mb-4 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base text-brand-secondary leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Problem Statement Preview */}
                <div className="p-4 rounded-xl bg-brand-light border border-brand-border mb-6">
                  <div className="text-xs font-semibold text-brand-dark mb-1">
                    Problem We Address:
                  </div>
                  <p className="text-xs text-brand-secondary leading-relaxed">
                    {service.problem.description}
                  </p>
                </div>

                {/* Core Capabilities Checklist */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
                    Core Capabilities:
                  </div>
                  {service.capabilities.slice(0, 3).map((cap) => (
                    <div key={cap.title} className="flex items-start gap-2.5 text-sm text-brand-dark/80">
                      <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                      <span>
                        <strong className="font-medium text-brand-dark">{cap.title}:</strong>{" "}
                        <span className="text-brand-secondary">{cap.description}</span>
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div className="mb-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70 mb-3">
                    Key Technologies:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies[0]?.items.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-brand-light text-brand-dark border border-brand-border/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button Link */}
              <div className="pt-6 border-t border-brand-border/60 flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  className="text-sm font-semibold text-brand-dark group-hover:text-brand-accent transition-colors inline-flex items-center gap-2"
                >
                  <span>Explore full specification &amp; outcomes</span>
                  <ArrowRight className="w-4 h-4 text-brand-accent transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Final Closing CTA */}
      <FinalCtaSection />
    </>
  );
}
