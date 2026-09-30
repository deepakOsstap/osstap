export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  positioning: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    linkedin: string;
    github: string;
    twitter?: string;
  };
  contact: {
    email: string;
    salesEmail: string;
    careersEmail: string;
    location: string;
  };
  mainNav: NavItem[];
  footerNav: {
    company: NavItem[];
    services: NavItem[];
    legal: NavItem[];
  };
}

export const siteConfig: SiteConfig = {
  name: "OSSTAP",
  legalName: "Osstap Technologies Inc.",
  tagline: "One Stop Solution To All Problems",
  positioning: "Technology. Engineering. Transformation.",
  description:
    "Osstap is an engineering-first technology consultancy helping ambitious businesses design, build, and scale high-performance digital products and intelligent platforms.",
  url: "https://osstap.com",
  ogImage: "/images/og-osstap.png",
  links: {
    linkedin: "https://www.linkedin.com/company/osstap",
    github: "https://github.com/osstap",
  },
  contact: {
    email: "hello@osstap.com",
    salesEmail: "deepakc29@gmail.com",
    careersEmail: "deepakc29@gmail.com",
    location: "Global Distributed Engineering",
  },
  mainNav: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Careers", href: "/careers" },
    { label: "Insights", href: "/blog" },
  ],
  footerNav: {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Insights", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    services: [
      { label: "Product Engineering", href: "/services/product-engineering" },
      { label: "Web Engineering", href: "/services/web-engineering" },
      { label: "Mobile Engineering", href: "/services/mobile-engineering" },
      { label: "AI & Automation", href: "/services/ai-automation" },
      { label: "Cloud & DevOps", href: "/services/cloud-devops" },
      { label: "Technology Consulting", href: "/services/technology-consulting" },
      { label: "Dedicated Engineering Teams", href: "/services/dedicated-engineering-teams" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};
