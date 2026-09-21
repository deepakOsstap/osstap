import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      showArrow = false,
      external = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-brand-dark text-white hover:bg-brand-black shadow-sm hover:shadow active:scale-[0.99]",
      accent:
        "bg-brand-accent text-white hover:bg-brand-accent-hover shadow-sm hover:shadow active:scale-[0.99]",
      secondary:
        "bg-brand-light text-brand-primary border border-brand-border hover:bg-brand-light-hover active:scale-[0.99]",
      outline:
        "border border-brand-border text-brand-primary hover:bg-brand-light hover:border-gray-300 active:scale-[0.99]",
      ghost:
        "text-brand-secondary hover:text-brand-primary hover:bg-brand-light/60",
    };

    const sizeStyles = {
      sm: "text-xs px-3 py-1.5 gap-1.5",
      md: "text-sm px-4 py-2.5 gap-2",
      lg: "text-base px-6 py-3 gap-2.5",
    };

    const combinedClasses = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    const arrowIcon = showArrow ? (
      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
    ) : null;

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={combinedClasses}
          >
            <span>{children}</span>
            {arrowIcon}
          </a>
        );
      }
      return (
        <Link href={href} className={combinedClasses}>
          <span>{children}</span>
          {arrowIcon}
        </Link>
      );
    }

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        <span>{children}</span>
        {arrowIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
