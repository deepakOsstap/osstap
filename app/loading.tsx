import React from "react";
import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-24 bg-white">
      <Container size="narrow">
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="relative w-12 h-12">
            <div className="w-12 h-12 rounded-full border-2 border-brand-border border-t-brand-accent animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            </div>
          </div>
          <p className="text-xs font-mono uppercase tracking-wider text-brand-secondary">
            Loading Osstap...
          </p>
        </div>
      </Container>
    </div>
  );
}
