import React from "react";
import Link from "next/link";
import { siteConfig } from "@/content/siteConfig";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#DFE3E8] text-slate-800 pt-20 pb-12 border-t border-slate-300 selection:bg-[#BEF264] selection:text-slate-950">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-slate-300">
          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start pr-0 lg:pr-8">
            <Link
              href="/"
              className="text-2xl font-extrabold tracking-tighter text-slate-950 flex items-center mb-4 group"
            >
              OSSTAP
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#84CC16] ml-1 shadow-sm shadow-[#84CC16]/50 group-hover:scale-125 transition-transform" />
            </Link>
            <p className="text-slate-900 font-semibold text-base mb-2">
              {siteConfig.tagline}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm mb-6">
              {siteConfig.positioning}
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-slate-800 bg-white/80 px-3.5 py-1.5 rounded-full border border-slate-300 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
              <span>Available for select global engineering partnerships</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-lime-800 mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {siteConfig.footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-lime-800 hover:translate-x-0.5 transition-all inline-block font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-lime-800 mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {siteConfig.footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-600 hover:text-lime-800 hover:translate-x-0.5 transition-all inline-block font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-lime-800 mb-4">
              Connect
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-lime-800 inline-flex items-center gap-1 group transition-colors font-medium"
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
                  className="text-sm text-slate-600 hover:text-lime-800 inline-flex items-center gap-1 group transition-colors font-medium"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.recipientEmail}?subject=Client%20Inquiry%20-%20Osstap`}
                  className="text-sm text-slate-600 hover:text-lime-800 inline-flex items-center gap-1.5 transition-colors font-medium"
                >
                  <Mail className="w-3.5 h-3.5 opacity-70" />
                  <span>{siteConfig.contact.salesEmail}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {currentYear} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {siteConfig.footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-slate-900 transition-colors"
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
