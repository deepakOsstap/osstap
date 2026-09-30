import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import { Sparkles } from "lucide-react";

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

          {/* Hero Right Visual Column - Pure 3D Abstract Architecture Graphics */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            {/* Ambient Yellow-Green Glow Backlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[480px] h-[340px] sm:h-[480px] bg-[#A3E635]/30 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
            
            {/* Pure 3D Graphic Visual Frame */}
            <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.12)] border border-slate-300/80 bg-white/40 backdrop-blur-md group">
              <Image
                src="/images/hero-graphic.jpg"
                alt="Osstap Technology & Engineering Architecture"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 512px"
              />
              {/* Subtle Ambient Vignette */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
