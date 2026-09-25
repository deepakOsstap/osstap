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
    <Section id="global" variant="default" className="relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-[550px] h-[550px] bg-[#B4F000]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

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
                <div key={item.title} className="flex items-start gap-3.5 group">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 border transition-transform duration-200 group-hover:scale-105 bg-lime-100 text-lime-800 border-lime-300 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-lime-700 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Light Grey & Yellow-Green Global Radar Graphic */}
        <div className="lg:col-span-6 relative flex items-center justify-center">
          <div className="w-full max-w-md aspect-square rounded-3xl bg-white/95 border border-slate-300 p-8 flex flex-col items-center justify-center relative overflow-hidden text-center shadow-xl backdrop-blur-2xl">
            {/* Ambient internal yellow-green glow */}
            <div className="absolute inset-0 bg-lime-500/5 pointer-events-none" />

            {/* Glowing orbital radar rings in yellow-green */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-80 h-80 rounded-full border border-dashed border-[#84CC16]/40 animate-spin" style={{ animationDuration: "50s" }} />
              <div className="w-60 h-60 rounded-full border border-[#84CC16]/30 absolute animate-spin" style={{ animationDuration: "35s", animationDirection: "reverse" }} />
              <div className="w-40 h-40 rounded-full border border-[#84CC16]/25 absolute" />
            </div>

            {/* Center Core Node */}
            <div className="relative z-10 w-20 h-20 rounded-2xl bg-[#84CC16] text-slate-950 flex flex-col items-center justify-center shadow-lg shadow-[#84CC16]/30 border border-white/60 mb-6 group cursor-default">
              <span className="font-extrabold text-sm tracking-tight text-slate-950">OSSTAP</span>
              <span className="text-[10px] font-mono text-slate-900 font-bold tracking-wider">CORE</span>
            </div>

            <h4 className="relative z-10 text-xl font-bold text-slate-900 mb-2">
              Autonomous Engineering Pods
            </h4>
            <p className="relative z-10 text-xs text-slate-600 max-w-xs leading-relaxed">
              Delivering high-rigor product engineering, cloud modernization, and AI integration for forward-thinking organizations worldwide.
            </p>

            <div className="relative z-10 mt-6 inline-flex items-center gap-2 px-3.5 py-1 text-xs font-mono text-lime-900 bg-lime-100 rounded-full border border-lime-300 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
              <span>Full IP Ownership &amp; Code Transfer</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
