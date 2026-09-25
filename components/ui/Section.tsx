import React from "react";
import { Container } from "./Container";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  containerSize?: "default" | "narrow" | "wide" | "full";
  variant?: "default" | "light" | "dark" | "aurora" | "green" | "yellowGreen";
}

export function Section({
  className,
  containerSize = "default",
  variant = "default",
  children,
  ...props
}: SectionProps) {
  const variantStyles = {
    default: "bg-[#EAECEF] text-slate-900",
    light: "bg-[#F1F3F5] text-slate-900 border-y border-slate-300",
    dark: "bg-[#E2E5E9] text-slate-900 border-y border-slate-300",
    aurora: "bg-gradient-to-b from-[#EAECEF] via-[#F4F6F8] to-[#EAECEF] text-slate-900 border-y border-lime-300/60 relative",
    green: "bg-gradient-to-b from-[#EAECEF] via-[#F4F6F8] to-[#EAECEF] text-slate-900 border-y border-lime-300/60 relative",
    yellowGreen: "bg-gradient-to-b from-[#EAECEF] via-[#F4F6F8] to-[#EAECEF] text-slate-900 border-y border-lime-300/60 relative",
  };

  return (
    <section
      className={cn("py-16 sm:py-24 lg:py-28 relative overflow-hidden", variantStyles[variant], className)}
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
          <Badge variant="accent">{eyebrow}</Badge>
        </div>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-slate-900"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg lg:text-xl leading-relaxed text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
