"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/siteConfig";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "glass-nav-scrolled border-brand-border/80 py-3.5"
          : "bg-white/80 backdrop-blur-md border-transparent py-5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-2 text-xl font-bold tracking-tight text-brand-black transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent rounded"
          >
            <span className="font-extrabold tracking-tighter text-2xl text-brand-dark flex items-center">
              OSSTAP
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent ml-0.5 group-hover:scale-125 transition-transform" />
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {siteConfig.mainNav.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-md transition-colors relative",
                    isActive
                      ? "text-brand-accent font-semibold"
                      : "text-brand-secondary hover:text-brand-primary hover:bg-brand-light"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-brand-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="/contact" variant="primary" size="sm" showArrow>
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-brand-primary hover:bg-brand-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Dropdown / Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-white border-b border-brand-border shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-8 flex flex-col gap-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {siteConfig.mainNav.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg transition-colors",
                      isActive
                        ? "bg-brand-accent-subtle text-brand-accent font-semibold"
                        : "text-brand-primary hover:bg-brand-light"
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-brand-secondary opacity-60" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-brand-border mt-2 flex flex-col gap-3">
              <Button
                href="/contact"
                variant="accent"
                size="md"
                showArrow
                className="w-full justify-center"
                onClick={closeMobileMenu}
              >
                Let&apos;s Talk
              </Button>
              <div className="text-center text-xs text-brand-secondary pt-2">
                {siteConfig.tagline}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
