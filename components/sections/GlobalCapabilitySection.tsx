import React from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Globe, Clock, ShieldCheck, Zap } from "lucide-react";

export function GlobalCapabilitySection() {
  const highlights = [
    {
      icon: Globe,
      title: "Global Distributed Teams",
      description: "Asynchronous delivery rhythms designed for frictionless timezone alignment.",
    },
    {
      icon: Clock,
      title: "Continuous Delivery Rhythm",
      description: "Structured sprint handoffs ensuring consistent engineering momentum 24/5.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise Compliance & Security",
      description: "Zero-trust engineering standards, strict IP ownership, and data privacy protocols.",
    },
    {
      icon: Zap,
      title: "Immediate Senior Bandwidth",
      description: "Skip multi-month recruiting cycles with vetted, senior-level engineers ready from day one.",
    },
  ];

  return (
    <Section id="global" variant="default">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6">
          <SectionHeading
            eyebrow="Global Capability"
            title="Built for a global world."
            description="From high-growth startups to scaling enterprises, Osstap partners with engineering leadership across geographies to solve complex, mission-critical technology challenges."
            className="mb-8"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-accent flex items-center justify-center flex-shrink-0 border border-blue-100">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-brand-secondary leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Abstract Global Network Graphic */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="w-full max-w-md aspect-square rounded-2xl bg-brand-light border border-brand-border p-8 flex flex-col items-center justify-center relative overflow-hidden text-center shadow-inner">
            {/* Subtle background circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <div className="w-72 h-72 rounded-full border border-dashed border-brand-accent/40 animate-spin" style={{ animationDuration: "60s" }} />
              <div className="w-48 h-48 rounded-full border border-brand-border absolute" />
              <div className="w-24 h-24 rounded-full border border-brand-accent/30 absolute" />
            </div>

            {/* Center Core Node */}
            <div className="relative z-10 w-20 h-20 rounded-2xl bg-brand-dark text-white flex flex-col items-center justify-center shadow-xl border border-brand-dark-border mb-6">
              <span className="font-extrabold text-sm tracking-tighter">OSSTAP</span>
              <span className="text-[9px] font-mono text-brand-accent">CORE</span>
            </div>

            <h4 className="relative z-10 text-lg font-bold text-brand-dark mb-2">
              Autonomous Engineering Pods
            </h4>
            <p className="relative z-10 text-xs text-brand-secondary max-w-xs leading-relaxed">
              Delivering high-rigor product engineering, cloud modernization, and AI integration for forward-thinking organizations worldwide.
            </p>

            <div className="relative z-10 mt-6 inline-flex items-center gap-2 px-3 py-1 text-xs font-mono text-emerald-700 bg-emerald-50 rounded-full border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Full IP Ownership &amp; Code Transfer</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
