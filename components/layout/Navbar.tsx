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
          ? "glass-nav-scrolled py-3.5"
          : "glass-nav py-5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="group flex items-center gap-2 text-xl font-bold tracking-tight transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500 rounded-lg"
          >
            <span className="font-extrabold tracking-tighter text-2xl text-slate-900 flex items-center">
              OSSTAP
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#84CC16] ml-1 shadow-sm shadow-lime-500/50 group-hover:scale-125 transition-transform" />
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
                    "px-3.5 py-2 text-sm font-medium rounded-lg transition-all relative",
                    isActive
                      ? "text-lime-800 font-bold"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-200/60"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#65A30D] rounded-full shadow-[0_0_8px_#84CC16]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button href="/contact" variant="gradient" size="sm" showArrow>
              Let&apos;s Talk
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-500"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-lime-700" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Dropdown / Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-full bg-[#EAECEF]/98 backdrop-blur-2xl border-b border-slate-300 shadow-xl animate-in slide-in-from-top-2 duration-200">
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
                      "flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-colors",
                      isActive
                        ? "bg-lime-100 text-lime-900 border border-lime-300 font-bold"
                        : "text-slate-800 hover:bg-slate-200"
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-lime-700 opacity-80" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-slate-300 mt-2 flex flex-col gap-3">
              <Button
                href="/contact"
                variant="gradient"
                size="md"
                showArrow
                className="w-full justify-center"
                onClick={closeMobileMenu}
              >
                Let&apos;s Talk
              </Button>
              <div className="text-center text-xs text-slate-500 pt-2 font-mono">
                {siteConfig.tagline}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
