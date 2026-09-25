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
    <Section id="why-osstap" variant="yellowGreen" className="relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#B4F000]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <SectionHeading
        eyebrow="The Osstap Advantage"
        title="Technology is only valuable when it solves the right problem."
        description="We combine product thinking, deep engineering rigor, and modern technology to deliver lasting business advantage."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {principles.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              variant="yellowGreen"
              className="h-full flex flex-col justify-between p-7 sm:p-8 hover:border-lime-500 hover:shadow-xl hover:shadow-lime-500/10 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-xs font-bold px-3 py-1 rounded-xl border bg-lime-100 text-lime-900 border-lime-300 shadow-xs">
                    {item.number}
                  </span>
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center border shadow-xs transition-transform duration-300 group-hover:scale-110 bg-lime-100 text-lime-800 border-lime-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <CardTitle className="text-xl text-slate-900 mb-3 group-hover:text-lime-700 transition-colors">
                  {item.title}
                </CardTitle>

                <CardDescription className="text-slate-600 text-sm leading-relaxed">
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
