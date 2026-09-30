import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Sparkles,
  ShieldCheck,
  Activity,
  Cpu,
  ArrowUpRight,
  Zap,
  Layers,
  TrendingUp,
  CheckCircle2,
  Globe,
} from "lucide-react";

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

          {/* Hero Right Visual Column - Enterprise Engineering Platform Product Mockup */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Ambient Backlight Glow */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-lime-200/50 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Floating Metric Badge 1 (Top-Right) */}
            <div className="hidden sm:flex absolute -top-4 -right-3 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 border border-slate-200/80 shadow-lg shadow-slate-900/5 backdrop-blur-md animate-bounce-subtle">
              <div className="w-8 h-8 rounded-xl bg-lime-100 border border-lime-300 text-lime-700 flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 fill-lime-500 text-lime-700" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-slate-900">P99 &lt; 18ms</div>
                <div className="text-[10px] text-slate-500 font-medium">Global Edge Cache</div>
              </div>
            </div>

            {/* Main Product Mockup Card */}
            <div className="w-full max-w-lg bg-white/95 rounded-3xl p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.10)] border border-slate-200/90 text-slate-900 relative overflow-hidden backdrop-blur-xl group hover:border-lime-500/80 transition-all duration-300">
              {/* Product Dashboard Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-lime-500" />
                  <div className="h-4 w-px bg-slate-200 mx-1.5" />
                  <span className="text-xs font-semibold text-slate-800 tracking-tight flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-lime-600" />
                    Osstap Cloud Platform
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Production Live</span>
                </div>
              </div>

              {/* KPI Metrics Row */}
              <div className="grid grid-cols-3 gap-2.5 mb-4">
                <div className="p-3 rounded-2xl bg-slate-50/80 border border-slate-100 text-left">
                  <div className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 mb-0.5">
                    Throughput
                  </div>
                  <div className="text-base font-extrabold text-slate-900">2.4M/s</div>
                  <div className="text-[10px] text-lime-700 font-semibold flex items-center gap-0.5 mt-0.5">
                    <TrendingUp className="w-3 h-3" />
                    +18.4%
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50/80 border border-slate-100 text-left">
                  <div className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 mb-0.5">
                    Availability
                  </div>
                  <div className="text-base font-extrabold text-slate-900">99.99%</div>
                  <div className="text-[10px] text-slate-500 font-medium mt-0.5">Zero Outages</div>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50/80 border border-slate-100 text-left">
                  <div className="text-[10px] uppercase font-semibold tracking-wider text-slate-500 mb-0.5">
                    Regions
                  </div>
                  <div className="text-base font-extrabold text-slate-900">14 Edge</div>
                  <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">All Synced</div>
                </div>
              </div>

              {/* Visual Performance / Scaling Area Chart */}
              <div className="p-4 rounded-2xl bg-gradient-to-b from-lime-50/50 to-white border border-lime-100/80 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                    <Activity className="w-3.5 h-3.5 text-lime-600" />
                    Workload Velocity &amp; Auto-Scaling
                  </div>
                  <span className="text-[10px] font-medium text-slate-500 font-mono">Real-time</span>
                </div>

                {/* SVG Sparkline / Wave */}
                <div className="h-20 w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#84CC16" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#84CC16" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Gridlines */}
                    <line x1="0" y1="20" x2="300" y2="20" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="0" y1="50" x2="300" y2="50" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="3 3" />

                    {/* Gradient Area Fill */}
                    <path
                      d="M0,65 Q35,50 70,55 T140,35 T210,40 T260,18 T300,22 L300,80 L0,80 Z"
                      fill="url(#chartGradient)"
                    />
                    {/* Primary Curve Line */}
                    <path
                      d="M0,65 Q35,50 70,55 T140,35 T210,40 T260,18 T300,22"
                      fill="none"
                      stroke="#65A30D"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />

                    {/* Peak Point Ping */}
                    <circle cx="260" cy="18" r="4.5" fill="#84CC16" className="animate-pulse" />
                    <circle cx="260" cy="18" r="7.5" fill="none" stroke="#65A30D" strokeWidth="1.5" opacity="0.6" />
                  </svg>

                  {/* Highlight Tooltip */}
                  <div className="absolute top-0 right-8 bg-slate-900 text-white text-[10px] font-semibold py-1 px-2 rounded-md shadow-md flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                    Peak: 142k req/min
                  </div>
                </div>
              </div>

              {/* Active Production Workloads List */}
              <div className="space-y-2 text-xs">
                {/* Workload 1 */}
                <div className="p-2.5 rounded-xl bg-slate-50/90 border border-slate-100 flex items-center justify-between hover:bg-slate-100/70 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-2xs">
                      <Cpu className="w-3.5 h-3.5 text-lime-600" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-slate-900 text-[11px]">AI Orchestration Engine</div>
                      <div className="text-[10px] text-slate-500">Autonomous workflow routing</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                    Optimal
                  </span>
                </div>

                {/* Workload 2 */}
                <div className="p-2.5 rounded-xl bg-slate-50/90 border border-slate-100 flex items-center justify-between hover:bg-slate-100/70 transition-colors">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-2xs">
                      <Globe className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-slate-900 text-[11px]">Distributed Edge Mesh</div>
                      <div className="text-[10px] text-slate-500">Global Anycast • Multi-Cloud</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-lime-800 bg-lime-50 border border-lime-200 px-2 py-0.5 rounded-md">
                    14 Nodes
                  </span>
                </div>
              </div>

              {/* Bottom Telemetry Bar */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-600">
                <div className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-lime-600" />
                  <span>Enterprise Zero-Trust Certified</span>
                </div>
                <span className="text-lime-700 flex items-center gap-1 font-semibold group-hover:text-lime-800 transition-colors">
                  Live Console
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>

            {/* Floating Metric Badge 2 (Bottom-Left) */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/95 border border-slate-200/80 shadow-lg shadow-slate-900/5 backdrop-blur-md">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="text-left">
                <div className="text-[11px] font-bold text-slate-900">Zero-Downtime Deploy</div>
                <div className="text-[10px] text-slate-500 font-medium">Production Automated CI/CD</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
