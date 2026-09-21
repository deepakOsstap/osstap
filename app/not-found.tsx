import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Compass, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <Container size="narrow">
        <div className="text-center flex flex-col items-center max-w-xl mx-auto">
          <div className="mb-6">
            <Badge variant="accent">
              <Compass className="w-3.5 h-3.5 mr-1 text-brand-accent animate-spin" style={{ animationDuration: "10s" }} />
              HTTP Error 404
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-dark mb-4">
            Looks like this page took a wrong turn.
          </h1>

          <p className="text-base sm:text-lg text-brand-secondary leading-relaxed mb-8">
            The resource, route, or document you were looking for might have been moved, renamed, or is currently under active engineering development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
            <Button href="/" variant="primary" size="lg">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <Button href="/services" variant="secondary" size="lg">
              Explore Services
            </Button>
          </div>

          {/* Quick Helpful Navigation Links */}
          <div className="pt-8 border-t border-brand-border w-full">
            <div className="text-xs font-semibold uppercase tracking-wider text-brand-secondary mb-4">
              Helpful Destinations:
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link
                href="/about"
                className="text-brand-dark hover:text-brand-accent transition-colors font-medium"
              >
                About Osstap
              </Link>
              <Link
                href="/blog"
                className="text-brand-dark hover:text-brand-accent transition-colors font-medium"
              >
                Engineering Insights
              </Link>
              <Link
                href="/careers"
                className="text-brand-dark hover:text-brand-accent transition-colors font-medium"
              >
                Careers
              </Link>
              <Link
                href="/contact"
                className="text-brand-dark hover:text-brand-accent transition-colors font-medium"
              >
                Contact Team
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
