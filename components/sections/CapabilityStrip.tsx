import React from "react";
import { Container } from "@/components/ui/Container";

export function CapabilityStrip() {
  const capabilities = [
    "Product Engineering",
    "AI & Automation",
    "Cloud & DevOps",
    "Web & Mobile",
    "Technology Consulting",
    "Dedicated Teams",
  ];

  return (
    <div className="relative border-y border-slate-300 bg-[#E2E6EA]/90 backdrop-blur-xl py-5 overflow-hidden">
      {/* Top subtle radiant yellow-green beam */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#84CC16]/60 to-transparent" />
      
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-8 text-center sm:text-left">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-lime-800 flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
            <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
            Core Focus Areas:
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 sm:gap-x-8 gap-y-3">
            {capabilities.map((item, idx) => (
              <div
                key={item}
                className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-800 transition-colors group cursor-default"
              >
                <span className="group-hover:translate-x-0.5 group-hover:text-lime-700 transition-all">
                  {item}
                </span>
                {idx < capabilities.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16] shadow-[0_0_6px_rgba(132,204,22,0.6)] hidden md:inline-block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
