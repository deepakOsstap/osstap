import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, Terminal, ShieldCheck, Activity, Cpu, ArrowUpRight, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-32 overflow-hidden bg-[#EAECEF]">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Ambient Yellow-Green Glows */}
      <div className="absolute -top-24 left-1/4 -translate-x-1/2 w-[600px] sm:w-[850px] h-[500px] bg-[#A3E635]/20 blur-[130px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-[450px] sm:w-[650px] h-[450px] bg-[#84CC16]/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Pill */}
            <div className="mb-6 inline-flex items-center gap-2">
              <Badge variant="accent" className="px-3.5 py-1 text-xs">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-lime-700 animate-pulse" />
                Modern B2B Technology Consultancy
              </Badge>
            </div>

            {/* Main Headline with Yellow-Green Gradient */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12] mb-6">
              We build technology that{" "}
              <span className="relative inline-block">
                <span className="text-gradient-yg">moves businesses</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full h-2.5 text-lime-500/70"
                  viewBox="0 0 100 12"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q50,0 100,8"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    fill="none"
                  />
                </svg>
              </span>{" "}
              forward.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mb-8">
              Osstap is an engineering-first technology consultancy helping ambitious
              companies design, build, and scale high-performance digital products through
              modern software engineering, intelligent systems, and strategic architecture.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button href="/contact" variant="gradient" size="lg" showArrow>
                Let&apos;s Talk
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>

            {/* Micro Trust Proof with Luminous Yellow-Green Counters */}
            <div className="mt-12 pt-8 border-t border-slate-300 w-full grid grid-cols-3 gap-6 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-lime-700">
                  99.99%
                </div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-600" />
                  Production Reliability
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-lime-700">
                  &lt; 50ms
                </div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-600" />
                  Target API Latency
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  Global
                </div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-600" />
                  Engineering Delivery
                </div>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Column - Light Grey & Yellow-Green Architecture Console */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <div className="w-full max-w-lg bg-white/95 rounded-3xl p-6 sm:p-7 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.08)] border border-slate-300 text-slate-900 relative overflow-hidden backdrop-blur-2xl group hover:border-lime-500 transition-all duration-300">
              {/* Internal subtle yellow-green glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime-100/40 rounded-full blur-2xl pointer-events-none" />

              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-400" />
                  <div className="w-3 h-3 rounded-full bg-[#84CC16] shadow-sm shadow-lime-500/50" />
                  <span className="text-xs font-mono text-slate-600 ml-2 font-medium">osstap-architecture.sys</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-lime-900 font-mono bg-lime-100 px-2.5 py-0.5 rounded-full border border-lime-300 font-bold">
                  <span className="w-2 h-2 rounded-full bg-lime-600 animate-ping" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Visual System Architecture Diagram */}
              <div className="space-y-4 font-mono text-xs">
                {/* Node 1: Edge & Client */}
                <div className="p-3.5 rounded-2xl bg-lime-50/80 border border-lime-200 hover:border-lime-400 transition-colors flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-lime-300 text-lime-700 flex items-center justify-center shadow-xs">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                        Global Edge Gateway
                        <Zap className="w-3 h-3 text-lime-600" />
                      </div>
                      <div className="text-[11px] text-slate-600">Anycast Routing • TLS 1.3 • Edge Caching</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white text-lime-900 border border-lime-300 shadow-xs">
                    12ms
                  </span>
                </div>

                {/* Connection Line */}
                <div className="flex justify-center -my-2">
                  <div className="h-4 w-0.5 bg-[#84CC16]" />
                </div>

                {/* Node 2: Core Engineering & AI Logic */}
                <div className="p-3.5 rounded-2xl bg-lime-50/80 border border-lime-200 hover:border-lime-400 transition-colors flex items-center justify-between relative overflow-hidden shadow-xs">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#65A30D]" />
                  <div className="flex items-center gap-3 pl-1">
                    <div className="w-9 h-9 rounded-xl bg-white border border-lime-300 text-lime-700 flex items-center justify-center shadow-xs">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Product Core &amp; AI Agents</div>
                      <div className="text-[11px] text-slate-600">Microservices • Distributed Event Bus</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-lime-900 text-[11px] bg-white px-2 py-0.5 rounded-md border border-lime-300 font-bold shadow-xs">
                    <Activity className="w-3.5 h-3.5 text-lime-600 animate-pulse" />
                    <span>Active</span>
                  </div>
                </div>

                {/* Connection Line */}
                <div className="flex justify-center -my-2">
                  <div className="h-4 w-0.5 bg-[#84CC16]" />
                </div>

                {/* Node 3: Resilient Data & Cloud Storage */}
                <div className="p-3.5 rounded-2xl bg-lime-50/80 border border-lime-200 hover:border-lime-400 transition-colors flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white border border-lime-300 text-lime-700 flex items-center justify-center shadow-xs">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Multi-Region Cloud Store</div>
                      <div className="text-[11px] text-slate-600">PostgreSQL • Vector DB • Redis Cluster</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white text-lime-900 border border-lime-300 shadow-xs">
                    99.999% SLA
                  </span>
                </div>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-600 font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500">Telemetry:</span>
                  <span className="text-lime-800 font-bold">Clean Architecture</span>
                </div>
                <span className="text-lime-700 flex items-center gap-1 font-bold group-hover:text-lime-800 transition-colors">
                  Verified Engine
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
