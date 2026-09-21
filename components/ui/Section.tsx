import React from "react";
import { Container } from "./Container";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: "default" | "narrow" | "wide" | "full";
  variant?: "default" | "light" | "dark";
}

export function Section({
  className,
  containerSize = "default",
  variant = "default",
  children,
  ...props
}: SectionProps) {
  const variantStyles = {
    default: "bg-white text-brand-primary",
    light: "bg-brand-light text-brand-primary border-y border-brand-border/60",
    dark: "bg-brand-black text-white border-y border-brand-dark-border",
  };

  return (
    <section
      className={cn("py-16 sm:py-24 lg:py-28", variantStyles[variant], className)}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "max-w-3xl mb-12 sm:mb-16",
        isCenter ? "mx-auto text-center items-center" : "",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("mb-4", isCenter ? "flex justify-center" : "")}>
          <Badge variant={isDark ? "dark" : "accent"}>{eyebrow}</Badge>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]",
          isDark ? "text-white" : "text-brand-primary"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg lg:text-xl leading-relaxed",
            isDark ? "text-slate-400" : "text-brand-secondary"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
