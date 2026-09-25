import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "gradient" | "secondary" | "outline" | "ghost";
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
      "group inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const variantStyles = {
      primary:
        "bg-[#84CC16] text-[#0F172A] font-extrabold hover:bg-[#A3E635] shadow-md shadow-lime-600/20 active:scale-[0.99] border border-[#65A30D]",
      accent:
        "bg-[#65A30D] text-white font-bold hover:bg-[#4D7C0F] shadow-md shadow-lime-700/20 active:scale-[0.99]",
      gradient:
        "bg-gradient-to-r from-[#84CC16] via-[#A3E635] to-[#BEF264] text-[#0F172A] font-extrabold shadow-md shadow-lime-600/20 hover:brightness-105 active:scale-[0.99] border border-[#65A30D]",
      secondary:
        "bg-white text-slate-800 border border-slate-300 hover:border-lime-500 hover:bg-lime-50/50 hover:text-lime-900 active:scale-[0.99] shadow-sm",
      outline:
        "border border-lime-600 text-lime-800 hover:bg-lime-100 hover:border-lime-700 active:scale-[0.99]",
      ghost:
        "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60",
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
