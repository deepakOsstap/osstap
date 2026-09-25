import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MessageSquareCode } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="bg-gradient-to-b from-[#E2E6EA] via-[#EAECEF] to-[#DFE3E8] text-slate-900 py-20 sm:py-28 relative overflow-hidden border-t border-slate-300 selection:bg-[#BEF264] selection:text-slate-950">
      {/* Background Engineering Grid & Yellow-Green Ambient Bloom */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[750px] h-[400px] bg-lime-400/20 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="mb-6">
            <Badge variant="accent" className="px-3.5 py-1 text-xs font-semibold">
              <MessageSquareCode className="w-3.5 h-3.5 mr-1.5 text-lime-800" />
              Let&apos;s Build Together
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 leading-[1.15] mb-6">
            Have a technology challenge?{" "}
            <span className="text-gradient-yg block sm:inline">
              Let&apos;s solve it together.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl mb-10">
            Whether you are designing a new digital product from scratch, modernizing an existing monolithic platform, or scaling your engineering organization, Osstap brings senior expertise and disciplined execution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button href="/contact" variant="gradient" size="lg" showArrow>
              Start a Conversation
            </Button>
            <Button
              href="/services"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Explore Our Services
            </Button>
          </div>

          <p className="mt-8 text-xs text-slate-600 font-mono">
            Direct access to senior technology architects • Initial response within 24 business hours
          </p>
        </div>
      </Container>
    </section>
  );
}
