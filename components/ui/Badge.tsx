import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "outline" | "dark";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: "bg-brand-light text-brand-secondary border border-brand-border",
    accent: "bg-brand-accent-subtle text-brand-accent border border-brand-accent-border",
    outline: "bg-transparent text-brand-secondary border border-brand-border",
    dark: "bg-brand-dark-surface text-slate-300 border border-brand-dark-border",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium tracking-wide uppercase rounded-full transition-colors",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
