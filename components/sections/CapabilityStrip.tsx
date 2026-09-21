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
    <div className="border-y border-brand-border bg-brand-light/70 py-6 overflow-hidden">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-8 text-center sm:text-left">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand-secondary/80 w-full sm:w-auto">
            Core Focus Areas:
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-6 sm:gap-x-8 gap-y-3">
            {capabilities.map((item, idx) => (
              <div
                key={item}
                className="flex items-center gap-3 text-xs sm:text-sm font-medium text-brand-dark/90"
              >
                <span>{item}</span>
                {idx < capabilities.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/40 hidden md:inline-block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
