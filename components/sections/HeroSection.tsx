import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, Terminal, ShieldCheck, Activity, Cpu, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 overflow-hidden bg-white">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Subtle radial ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-blue-50/70 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Pill */}
            <div className="mb-6 inline-flex items-center gap-2">
              <Badge variant="accent" className="px-3 py-1 text-xs">
                <Sparkles className="w-3 h-3 mr-1 text-brand-accent animate-pulse" />
                Modern B2B Technology Consultancy
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.1] mb-6">
              We build technology that{" "}
              <span className="text-brand-accent relative inline-block">
                moves businesses
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2 text-brand-accent/20"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q50,0 100,8"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              forward.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-brand-secondary leading-relaxed max-w-2xl mb-8">
              Osstap is an engineering-first technology consultancy helping ambitious
              companies design, build, and scale high-performance digital products through
              modern software engineering, intelligent systems, and strategic architecture.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button href="/contact" variant="accent" size="lg" showArrow>
                Let&apos;s Talk
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>

            {/* Micro Trust Proof */}
            <div className="mt-12 pt-8 border-t border-brand-border/80 w-full grid grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-dark">
                  99.99%
                </div>
                <div className="text-xs sm:text-sm text-brand-secondary mt-0.5">
                  Production Reliability
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-dark">
                  &lt; 50ms
                </div>
                <div className="text-xs sm:text-sm text-brand-secondary mt-0.5">
                  Target API Latency
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold tracking-tight text-brand-dark">
                  Global
                </div>
                <div className="text-xs sm:text-sm text-brand-secondary mt-0.5">
                  Engineering Delivery
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column - Sophisticated Abstract Architectural Visualization */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <div className="w-full max-w-lg bg-brand-dark rounded-2xl p-6 shadow-2xl border border-brand-dark-border text-white relative overflow-hidden group">
              {/* Subtle background glow effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-2xl pointer-events-none" />

              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-brand-dark-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">osstap-architecture.sys</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Visual System Architecture Diagram */}
              <div className="space-y-4 font-mono text-xs">
                {/* Node 1: Edge & Client */}
                <div className="p-3.5 rounded-xl bg-brand-dark-surface border border-brand-dark-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-brand-accent flex items-center justify-center">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-200">Global Edge Gateway</div>
                      <div className="text-[11px] text-slate-400">Anycast Routing • TLS 1.3 • Edge Caching</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800">
                    12ms
                  </span>
                </div>

                {/* Connection Line */}
                <div className="flex justify-center -my-2">
                  <div className="h-4 w-0.5 bg-brand-dark-border" />
                </div>

                {/* Node 2: Core Engineering & AI Logic */}
                <div className="p-3.5 rounded-xl bg-brand-dark-surface border border-brand-dark-border flex items-center justify-between relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-accent" />
                  <div className="flex items-center gap-3 pl-1">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-200">Product Core &amp; AI Agents</div>
                      <div className="text-[11px] text-slate-400">Microservices • Distributed Event Bus</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 text-[11px]">
                    <Activity className="w-3.5 h-3.5 text-brand-accent animate-pulse" />
                    <span>Active</span>
                  </div>
                </div>

                {/* Connection Line */}
                <div className="flex justify-center -my-2">
                  <div className="h-4 w-0.5 bg-brand-dark-border" />
                </div>

                {/* Node 3: Resilient Data & Cloud Storage */}
                <div className="p-3.5 rounded-xl bg-brand-dark-surface border border-brand-dark-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-200">Multi-Region Cloud Store</div>
                      <div className="text-[11px] text-slate-400">PostgreSQL • Vector DB • Redis Cluster</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400">99.999% SLA</span>
                </div>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="mt-5 pt-4 border-t border-brand-dark-border flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Telemetry:</span>
                  <span className="text-slate-300">Clean Architecture</span>
                </div>
                <span className="text-brand-accent flex items-center gap-0.5">
                  Verified Engine
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
