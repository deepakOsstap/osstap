import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white pt-20 pb-12 border-t border-brand-dark-border selection:bg-brand-accent selection:text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-brand-dark-border">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tighter text-white flex items-center mb-4"
            >
              OSSTAP
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent ml-1" />
            </Link>
            <p className="text-slate-300 font-medium text-base mb-2">
              {siteConfig.tagline}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              {siteConfig.positioning}
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-brand-dark-surface px-3 py-1.5 rounded-full border border-brand-dark-border">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for select global engineering partnerships</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {siteConfig.footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {siteConfig.footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 hover:text-white hover:translate-x-0.5 transition-all inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Connect
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-white inline-flex items-center gap-1 group"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-300 hover:text-white inline-flex items-center gap-1 group"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.salesEmail}`}
                  className="text-sm text-slate-300 hover:text-white inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 opacity-70" />
                  <span>{siteConfig.contact.salesEmail}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {siteConfig.footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-slate-200 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
