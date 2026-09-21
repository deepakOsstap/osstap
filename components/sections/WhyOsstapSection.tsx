import React from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { Code2, Target, TrendingUp, Handshake } from "lucide-react";

export function WhyOsstapSection() {
  const principles = [
    {
      number: "01",
      icon: Code2,
      title: "Engineering First",
      description:
        "We prioritize rock-solid code quality, strict architectural boundaries, and long-term maintainability over superficial shortcuts.",
    },
    {
      number: "02",
      icon: Target,
      title: "Business Focused",
      description:
        "Technology is only valuable when it moves core business KPIs. Every sprint deliverable maps directly to strategic business outcomes.",
    },
    {
      number: "03",
      icon: TrendingUp,
      title: "Built to Scale",
      description:
        "We design systems capable of supporting 10x-100x traffic surges without architectural rewrites or catastrophic degradation.",
    },
    {
      number: "04",
      icon: Handshake,
      title: "Long-Term Partnership",
      description:
        "We operate as an autonomous, high-trust extension of your leadership team—not a disconnected outsourcing vendor.",
    },
  ];

  return (
    <Section id="why-osstap" variant="dark">
      <SectionHeading
        eyebrow="The Osstap Advantage"
        theme="dark"
        title="Technology is only valuable when it solves the right problem."
        description="We combine product thinking, deep engineering rigor, and modern technology to deliver lasting business advantage."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {principles.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              variant="dark"
              className="h-full flex flex-col justify-between p-8 border-brand-dark-border hover:border-brand-accent/50 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-semibold text-brand-accent px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/60">
                    {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-lg bg-brand-dark-surface flex items-center justify-center text-slate-300 border border-brand-dark-border">
                    <Icon className="w-5 h-5 text-brand-accent" />
                  </div>
                </div>

                <CardTitle className="text-xl text-white mb-3">
                  {item.title}
                </CardTitle>

                <CardDescription className="text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </CardDescription>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
