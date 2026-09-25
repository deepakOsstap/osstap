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
    <Section id="process" variant="light" className="relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#B4F000]/10 blur-[140px] pointer-events-none -z-10" />

      <SectionHeading
        eyebrow="Execution Framework"
        title="How we work"
        description="A disciplined, engineering-first delivery model engineered to eliminate technical risk and ensure predictable delivery."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
        {steps.map((step) => (
          <div
            key={step.number}
            className="p-6 sm:p-8 rounded-3xl bg-white/95 border border-slate-300 flex flex-col justify-between relative group hover:border-lime-500 hover:shadow-xl hover:shadow-lime-500/10 transition-all duration-300 backdrop-blur-xl overflow-hidden shadow-sm"
          >
            {/* Top yellow-green highlight strip on hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#84CC16] opacity-70 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-2xl font-extrabold text-lime-800">
                  {step.number}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-[#84CC16] group-hover:shadow-[0_0_10px_#84CC16] transition-all" />
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-slate-900 mb-3 group-hover:text-lime-700 transition-colors">
                {step.title}
              </h3>

              <p className="text-sm font-semibold text-slate-800 mb-3">
                {step.summary}
              </p>

              <p className="text-xs text-slate-600 leading-relaxed">
                {step.details}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
