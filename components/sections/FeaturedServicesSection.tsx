import React from "react";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { servicesData } from "@/content/services";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function FeaturedServicesSection() {
  // Showcase top 4 featured services on homepage with detailed technical breakdown
  const featured = servicesData.slice(0, 4);

  return (
    <Section id="services" variant="light">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <SectionHeading
          eyebrow="Featured Services"
          title="Engineered for high-concurrency and mission-critical scale."
          description="We deliver deep technical specialization across product design, distributed backend systems, AI agents, and mobile architectures."
          className="mb-0"
        />
        <div className="flex-shrink-0">
          <Button href="/services" variant="outline" showArrow>
            All 7 Services
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {featured.map((service) => (
          <div
            key={service.id}
            className="rounded-2xl bg-white border border-brand-border p-8 sm:p-10 shadow-sm hover:shadow-md hover:border-brand-accent/40 transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Card Top: Number & Title */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-brand-border/60">
                <span className="font-mono text-sm font-semibold text-brand-accent px-2.5 py-1 rounded bg-blue-50 border border-blue-100">
                  {service.number}
                </span>
                <span className="text-xs uppercase tracking-wider text-brand-secondary font-medium">
                  Full-Cycle Engineering
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-dark mb-4 group-hover:text-brand-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-base text-brand-secondary leading-relaxed mb-8">
                {service.shortDescription}
              </p>

              {/* Key Capabilities List */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
                  Key Capabilities:
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

              {/* Tech Stack Pills */}
              <div className="mb-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand-dark/70 mb-3">
                  Technologies:
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

            {/* Bottom Link Action */}
            <div className="pt-6 border-t border-brand-border/60 flex items-center justify-between">
              <Link
                href={`/services/${service.slug}`}
                className="text-sm font-semibold text-brand-dark group-hover:text-brand-accent transition-colors inline-flex items-center gap-2"
              >
                <span>Deep Dive into {service.title}</span>
                <ArrowRight className="w-4 h-4 text-brand-accent transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
