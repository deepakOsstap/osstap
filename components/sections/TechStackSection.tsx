import React from "react";
import { Section, SectionHeading } from "@/components/ui/Section";

export function TechStackSection() {
  const categories = [
    {
      category: "Frontend & Web",
      description: "Modern declarative interfaces and server components",
      technologies: ["Next.js", "React 19", "TypeScript", "Tailwind CSS", "WebAssembly"],
    },
    {
      category: "Backend & Systems",
      description: "High-throughput, concurrent microservice architectures",
      technologies: ["Go", "Node.js", "Python", "Rust", "Java / Spring", "gRPC"],
    },
    {
      category: "Mobile Platforms",
      description: "Fluid 120Hz platform-native craftsmanship",
      technologies: ["Swift & SwiftUI", "Kotlin & Compose", "React Native", "Flutter"],
    },
    {
      category: "Cloud Infrastructure",
      description: "Declarative, zero-downtime resilient cloud platforms",
      technologies: ["AWS", "Google Cloud", "Kubernetes", "Docker", "Terraform", "ArgoCD"],
    },
    {
      category: "AI & Applied Intelligence",
      description: "Production LLM agent systems and vector retrieval",
      technologies: ["LangChain", "DSPy", "pgvector", "Qdrant", "Claude", "OpenAI"],
    },
    {
      category: "Data & Persistence",
      description: "High-integrity ACID transactions and real-time streams",
      technologies: ["PostgreSQL", "Redis", "Kafka", "ClickHouse", "MongoDB"],
    },
  ];

  return (
    <Section id="technology" variant="default" className="relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#B4F000]/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <SectionHeading
        eyebrow="Technology Matrix"
        title="Battle-tested tools for modern, resilient systems."
        description="We don't chase transient hype. We select reliable, high-performance technologies tailored to scale, security, and developer velocity."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.category}
            className="p-6 sm:p-8 rounded-3xl border border-slate-300 bg-white/95 hover:border-lime-500 hover:shadow-xl hover:shadow-lime-500/10 transition-all duration-300 flex flex-col justify-between backdrop-blur-xl group shadow-sm"
          >
            <div>
              <div className="inline-block text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-xl border mb-3 text-lime-900 border-lime-300 bg-lime-100 shadow-xs">
                {cat.category}
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-lime-700 transition-colors">
                {cat.description}
              </h4>
            </div>

            <div className="pt-6 border-t border-slate-200 mt-6 flex flex-wrap gap-2">
              {cat.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-[#EAECEF] text-slate-800 border border-slate-300 group-hover:border-slate-400 hover:text-lime-900 hover:border-lime-500 hover:bg-lime-50 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
