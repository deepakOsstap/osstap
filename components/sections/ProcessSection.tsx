import React from "react";
import { Section, SectionHeading } from "@/components/ui/Section";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      summary: "Understand business objectives, workflows, and technical constraints.",
      details:
        "We audit existing codebases, model domain data, clarify product requirements, and pinpoint architectural risk factors before committing a single line of code.",
    },
    {
      number: "02",
      title: "Design",
      summary: "Define architecture, service contracts, and delivery strategy.",
      details:
        "We draft comprehensive System Architecture Documents, design idempotent API specifications, select optimal data stores, and establish strict performance budgets.",
    },
    {
      number: "03",
      title: "Build",
      summary: "Engineer, test, and ship production-ready solutions.",
      details:
        "High-velocity bi-weekly sprint delivery featuring automated CI/CD pipelines, strict typing, 100% test coverage for critical paths, and continuous code reviews.",
    },
    {
      number: "04",
      title: "Scale",
      summary: "Optimize, harden, and continuously evolve.",
      details:
        "Load testing under peak traffic conditions, distributed tracing, latency profiling, cost optimization, and structured knowledge transfer to internal teams.",
    },
  ];

  return (
    <Section id="process" variant="light">
      <SectionHeading
        eyebrow="Execution Framework"
        title="How we work"
        description="A disciplined, engineering-first delivery model engineered to eliminate technical risk and ensure predictable delivery."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
        {steps.map((step) => (
          <div
            key={step.number}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-brand-border flex flex-col justify-between relative group hover:border-brand-accent/40 hover:shadow-md transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xl font-bold text-brand-accent">
                  {step.number}
                </span>
                <span className="w-2 h-2 rounded-full bg-brand-border group-hover:bg-brand-accent transition-colors" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-brand-dark mb-3">
                {step.title}
              </h3>

              <p className="text-sm font-medium text-brand-dark mb-3">
                {step.summary}
              </p>

              <p className="text-xs text-brand-secondary leading-relaxed">
                {step.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
