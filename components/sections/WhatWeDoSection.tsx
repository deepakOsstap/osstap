import React from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardArrow } from "@/components/ui/Card";
import {
  Boxes,
  Smartphone,
  Cpu,
  Cloud,
  Compass,
  Users,
} from "lucide-react";

export function WhatWeDoSection() {
  const capabilities = [
    {
      title: "Product Engineering",
      description:
        "Design, build, and scale resilient digital products from initial MVP to multi-tenant enterprise architectures.",
      icon: Boxes,
      href: "/services/product-engineering",
    },
    {
      title: "Web & Mobile",
      description:
        "Engineered for speed, offline reliability, and fluid 120Hz native animations across web, iOS, and Android.",
      icon: Smartphone,
      href: "/services/mobile-engineering",
    },
    {
      title: "AI & Automation",
      description:
        "Production-grade LLM agents, intelligent retrieval (RAG), and deterministic workflow automation.",
      icon: Cpu,
      href: "/services/ai-automation",
    },
    {
      title: "Cloud & DevOps",
      description:
        "Declarative Infrastructure as Code, Kubernetes orchestration, zero-downtime CI/CD, and cloud cost control.",
      icon: Cloud,
      href: "/services/cloud-devops",
    },
    {
      title: "Technology Consulting",
      description:
        "Architecture audits, modernization roadmaps, technical due diligence, and fractional CTO advisory.",
      icon: Compass,
      href: "/services/technology-consulting",
    },
    {
      title: "Dedicated Engineering Teams",
      description:
        "Autonomous, high-rigor engineering squads that embed seamlessly into your organization to accelerate velocity.",
      icon: Users,
      href: "/services/dedicated-engineering-teams",
    },
  ];

  return (
    <Section id="what-we-do" variant="default">
      <SectionHeading
        eyebrow="Capabilities"
        title="From idea to impact."
        description="We help ambitious businesses solve complex technology problems across strategy, product engineering, and digital delivery."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {capabilities.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              href={item.href}
              interactive
              className="group h-full flex flex-col justify-between"
            >
              <div>
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-dark group-hover:bg-brand-accent-subtle group-hover:text-brand-accent transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardArrow />
                </CardHeader>
                <CardTitle className="text-xl group-hover:text-brand-accent transition-colors">
                  {item.title}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </div>

              <CardFooter className="text-xs font-semibold text-brand-accent uppercase tracking-wider">
                <span>View Capability</span>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
