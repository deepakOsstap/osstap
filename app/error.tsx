"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AlertTriangle, RotateCcw, Home } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log unexpected client error to monitoring service
    console.error("[Runtime Application Exception]:", error);
  }, [error]);

  return (
    <div className="min-h-[65vh] flex items-center justify-center py-20 bg-white relative">
      <Container size="narrow">
        <div className="text-center flex flex-col items-center max-w-lg mx-auto">
          <div className="mb-6">
            <Badge variant="outline" className="text-red-600 border-red-200 bg-red-50">
              <AlertTriangle className="w-3.5 h-3.5 mr-1 text-red-600" />
              Application Error
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark mb-4">
            An unexpected error occurred.
          </h1>

          <p className="text-sm sm:text-base text-brand-secondary leading-relaxed mb-8">
            Our systems logged this exception. You can attempt to refresh the application state or return to the main dashboard.
          </p>

          <div className="flex items-center gap-4">
            <Button variant="primary" onClick={() => reset()}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button href="/" variant="secondary">
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </Button>
          </div>

          {error?.digest && (
            <p className="mt-8 font-mono text-xs text-brand-secondary/60">
              Error Digest: {error.digest}
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
