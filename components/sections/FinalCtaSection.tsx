import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MessageSquareCode } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section className="bg-brand-black text-white py-20 sm:py-28 relative overflow-hidden border-t border-brand-dark-border selection:bg-brand-accent selection:text-white">
      {/* Background Engineering Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-accent/15 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="mb-6">
            <Badge variant="dark" className="px-3.5 py-1 text-xs">
              <MessageSquareCode className="w-3.5 h-3.5 mr-1.5 text-brand-accent" />
              Let&apos;s Build Together
            </Badge>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Have a technology challenge?{" "}
            <span className="text-brand-accent block sm:inline">
              Let&apos;s solve it together.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-10">
            Whether you are designing a new digital product from scratch, modernizing an existing monolithic platform, or scaling your engineering organization, Osstap brings senior expertise and disciplined execution.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button href="/contact" variant="accent" size="lg" showArrow>
              Start a Conversation
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="text-white border-brand-dark-border hover:bg-brand-dark-surface hover:text-white hover:border-slate-500 w-full sm:w-auto"
            >
              Explore Our Services
            </Button>
          </div>

          <p className="mt-8 text-xs text-slate-500 font-mono">
            Direct access to senior technology architects • Initial response within 24 business hours
          </p>
        </div>
      </Container>
    </section>
  );
}
