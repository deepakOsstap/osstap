import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "light" | "dark" | "outline" | "glass" | "aurora" | "green" | "yellowGreen";
  interactive?: boolean;
  href?: string;
  external?: boolean;
}

export function Card({
  className,
  variant = "default",
  interactive = false,
  href,
  external = false,
  children,
  ...props
}: CardProps) {
  const variantStyles = {
    default:
      "bg-white/95 border border-slate-300 text-slate-900 shadow-[0_4px_20px_rgba(0,0,0,0.04)] backdrop-blur-md",
    light:
      "bg-[#F4F6F8] border border-slate-300 text-slate-900 backdrop-blur-md",
    dark:
      "bg-slate-200 border border-slate-300 text-slate-900 shadow-md",
    outline:
      "bg-transparent border border-slate-300 text-slate-900",
    glass:
      "bg-white/90 border border-slate-300 text-slate-900 backdrop-blur-xl shadow-md",
    aurora:
      "bg-gradient-to-b from-white/95 to-slate-50/95 border border-slate-300 text-slate-900 backdrop-blur-xl shadow-md",
    green:
      "bg-gradient-to-b from-white/95 to-slate-50/95 border border-slate-300 text-slate-900 backdrop-blur-xl shadow-md",
    yellowGreen:
      "bg-gradient-to-b from-white/95 to-slate-50/95 border border-slate-300 text-slate-900 backdrop-blur-xl shadow-md",
  };

  const interactiveStyles = interactive || href
    ? "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-lime-600/10 hover:border-lime-500 group cursor-pointer"
    : "";

  const content = (
    <div
      className={cn(
        "rounded-2xl p-6 sm:p-8 flex flex-col relative overflow-hidden",
        variantStyles[variant],
        interactiveStyles,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mb-4 flex items-start justify-between gap-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl sm:text-2xl font-bold tracking-tight text-slate-900",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn(
        "text-sm sm:text-base text-slate-600 leading-relaxed mt-2",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-auto pt-6 flex items-center justify-between text-sm font-medium", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardArrow({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-8 h-8 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-600 transition-all duration-200 group-hover:bg-[#84CC16] group-hover:text-[#0F172A] group-hover:border-[#65A30D] group-hover:shadow-[0_0_12px_rgba(132,204,22,0.4)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
        className
      )}
    >
      <ArrowUpRight className="w-4 h-4" />
    </div>
  );
}
