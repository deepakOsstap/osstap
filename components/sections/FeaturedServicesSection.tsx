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
    <Section id="services" variant="light" className="relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#B4F000]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

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
            className="rounded-3xl bg-white/95 border border-slate-300 p-8 sm:p-10 shadow-md hover:shadow-xl hover:shadow-lime-500/10 hover:border-lime-500 transition-all duration-300 flex flex-col justify-between group backdrop-blur-xl relative overflow-hidden"
          >
            {/* Subtle top-right green glow on hover */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-lime-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div>
              {/* Card Top: Number & Title */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200">
                <span className="font-mono text-sm font-bold text-lime-900 px-3 py-1 rounded-xl bg-lime-100 border border-lime-300 shadow-xs">
                  {service.number}
                </span>
                <span className="text-xs uppercase tracking-wider text-slate-500 font-mono font-medium">
                  Full-Cycle Engineering
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-4 group-hover:text-lime-700 transition-colors">
                {service.title}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed mb-8">
                {service.shortDescription}
              </p>

              {/* Key Capabilities List */}
              <div className="space-y-3 mb-8">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-lime-800">
                  Key Capabilities:
                </div>
                {service.capabilities.slice(0, 3).map((cap) => (
                  <div key={cap.title} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#84CC16] flex-shrink-0 mt-0.5 shadow-[0_0_8px_rgba(132,204,22,0.3)]" />
                    <span>
                      <strong className="font-semibold text-slate-900">{cap.title}:</strong>{" "}
                      <span className="text-slate-600">{cap.description}</span>
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="mb-8">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Technologies:
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.technologies[0]?.items.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-[#EAECEF] text-slate-800 border border-slate-300 group-hover:border-slate-400 hover:border-lime-500 hover:text-lime-900 hover:bg-lime-50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Link Action */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
              <Link
                href={`/services/${service.slug}`}
                className="text-sm font-semibold text-slate-900 group-hover:text-lime-700 transition-colors inline-flex items-center gap-2"
              >
                <span>Deep Dive into {service.title}</span>
                <ArrowRight className="w-4 h-4 text-[#84CC16] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
