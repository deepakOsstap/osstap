import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "light" | "dark" | "outline";
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
      "bg-white border border-brand-border text-brand-primary shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]",
    light:
      "bg-brand-light border border-brand-border/80 text-brand-primary",
    dark:
      "bg-brand-dark-surface border border-brand-dark-border text-white",
    outline:
      "bg-transparent border border-brand-border text-brand-primary",
  };

  const interactiveStyles = interactive || href
    ? "transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:border-brand-accent/40 group cursor-pointer"
    : "";

  const content = (
    <div
      className={cn(
        "rounded-xl p-6 sm:p-8 flex flex-col relative overflow-hidden",
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
        "text-xl sm:text-2xl font-bold tracking-tight text-inherit",
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
        "text-sm sm:text-base text-brand-secondary leading-relaxed mt-2",
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
        "w-8 h-8 rounded-full bg-brand-light flex items-center justify-center text-brand-secondary transition-all duration-200 group-hover:bg-brand-accent group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
        className
      )}
    >
      <ArrowUpRight className="w-4 h-4" />
    </div>
  );
}
