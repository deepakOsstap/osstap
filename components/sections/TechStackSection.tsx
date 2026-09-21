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
    <Section id="technology" variant="default">
      <SectionHeading
        eyebrow="Technology Matrix"
        title="Battle-tested tools for modern, resilient systems."
        description="We don't chase transient hype. We select reliable, high-performance technologies tailored to scale, security, and developer velocity."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.category}
            className="p-6 sm:p-8 rounded-xl border border-brand-border bg-white hover:border-brand-accent/40 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono font-semibold text-brand-accent uppercase tracking-wider mb-2">
                {cat.category}
              </div>
              <h4 className="text-lg font-bold text-brand-dark mb-2">
                {cat.description}
              </h4>
            </div>

            <div className="pt-6 border-t border-brand-border/60 mt-6 flex flex-wrap gap-2">
              {cat.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-brand-light text-brand-dark border border-brand-border/80"
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
