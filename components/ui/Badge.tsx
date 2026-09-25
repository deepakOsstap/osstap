import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "yellowGreen" | "outline" | "dark";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantClasses = {
    default: "bg-slate-200/90 text-slate-800 border border-slate-300",
    accent: "bg-lime-100/90 text-lime-900 border border-lime-300/90 shadow-xs font-bold",
    yellowGreen: "bg-lime-100/90 text-lime-900 border border-lime-300/90 shadow-xs font-bold",
    outline: "bg-white/90 text-lime-900 border border-lime-400 font-semibold",
    dark: "bg-slate-300 text-slate-900 border border-slate-400 font-bold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-full transition-colors backdrop-blur-sm",
        variantClasses[variant] || variantClasses.accent,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
