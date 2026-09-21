import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { BreadcrumbsJsonLd } from "@/lib/seo/schema";
import {
  ShieldCheck,
  Code2,
  Eye,
  HeartHandshake,
  BookOpen,
  Scale,
  Target,
  Compass,
  CheckCircle2,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Osstap's mission, operating principles, and engineering-first philosophy for building resilient, high-impact digital products.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Ownership",
      icon: ShieldCheck,
      description:
        "We take end-to-end accountability for outcomes. Our engineers own the architecture, implementation, automated tests, and production reliability.",
    },
    {
      title: "Engineering Excellence",
      icon: Code2,
      description:
        "We refuse to ship brittle code. We champion clean architecture, type safety, continuous integration, and systems that stand the test of time.",
    },
    {
      title: "Radical Transparency",
      icon: Eye,
      description:
        "Zero vendor smoke-and-mirrors. We communicate progress, technical trade-offs, and unexpected risks with total candor and clarity.",
    },
    {
      title: "Customer Obsession",
      icon: HeartHandshake,
      description:
        "Technology is a means to an end. We measure our success by the tangible commercial outcomes, conversion lifts, and user delight we generate.",
    },
    {
      title: "Continuous Learning",
      icon: BookOpen,
      description:
        "Technology evolves relentlessly. We foster deep curiosity, invest in continuous research, and test emerging tools before recommending them.",
    },
    {
      title: "Uncompromising Integrity",
      icon: Scale,
      description:
        "We advise what is genuinely best for your business, recommending pragmatic solutions over billing unnecessary development hours.",
    },
  ];

  const pipeline = [
    {
      step: "01",
      title: "Business Problem",
      description: "Isolate the root commercial and operational constraint.",
    },
    {
      step: "02",
      title: "Technology Strategy",
      description: "Define the optimal technical roadmap and trade-offs.",
    },
    {
      step: "03",
      title: "System Architecture",
      description: "Draft resilient, scalable component and data blueprints.",
    },
    {
      step: "04",
      title: "Disciplined Execution",
      description: "Ship production code via automated CI/CD sprints.",
    },
    {
      step: "05",
      title: "Empirical Measurement",
      description: "Track latency, conversion, error budgets, and uptime.",
    },
    {
      step: "06",
      title: "Continuous Improvement",
      description: "Iterate, optimize unit economics, and harden at scale.",
    },
  ];

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "https://osstap.com" },
          { name: "About", url: "https://osstap.com/about" },
        ]}
      />

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-white border-b border-brand-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <Container>
          <div className="max-w-3xl">
            <div className="mb-6">
              <Badge variant="accent">About Osstap</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.15] mb-6">
              Technology built around your ambitions.
            </h1>
            <p className="text-lg sm:text-xl text-brand-secondary leading-relaxed mb-8">
              Osstap is an engineering-first technology consultancy founded on a simple conviction: modern businesses deserve technology partners who combine top-tier technical craftsmanship with deep commercial acumen.
            </p>
            <div className="flex items-center gap-4">
              <Button href="/contact" variant="primary" showArrow>
                Partner with Us
              </Button>
              <Button href="/services" variant="secondary">
                View Capabilities
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* 1. Who We Are */}
      <Section variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Who We Are"
              title="A modern technology consultancy, not a generic outsourcing agency."
              description="We don't sell disconnected billable hours or offshore commodity labor. We assemble high-caliber engineering teams that take genuine pride in solving difficult problems."
              className="mb-6"
            />
            <div className="space-y-4 text-base text-brand-secondary leading-relaxed">
              <p>
                Founded by senior engineers and product architects, Osstap was created to bridge the gap between high-level management consulting and hands-on software development.
              </p>
              <p>
                From venture-backed startups needing to build their flagship platform to established enterprises modernizing mission-critical legacy architectures, we work side-by-side with our clients as a trusted, long-term technical partner.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-brand-light border border-brand-border">
                <div className="text-2xl font-bold text-brand-dark">100%</div>
                <div className="text-xs text-brand-secondary mt-1">
                  Senior Engineering Focus
                </div>
              </div>
              <div className="p-4 rounded-xl bg-brand-light border border-brand-border">
                <div className="text-2xl font-bold text-brand-dark">Zero</div>
                <div className="text-xs text-brand-secondary mt-1">
                  Fabricated Promises
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-brand-dark text-white p-8 sm:p-10 border border-brand-dark-border shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-brand-accent" />
                Our Core Identity
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                The name <strong className="text-white">OSSTAP</strong> originates from the concept of a <em>&quot;One Stop Solution to All Problems&quot;</em>—reflecting our comprehensive capability to navigate software engineering, cloud infrastructure, AI integration, and technology strategy under a unified standard of excellence.
              </p>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <span>Engineering-first culture with zero bureaucracy</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <span>Strict code reviews, automated CI/CD, and zero tech debt tolerance</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-accent flex-shrink-0" />
                  <span>Direct Slack and GitHub collaboration with lead architects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 2 & 3. Mission & Vision */}
      <Section variant="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-brand-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-accent flex items-center justify-center mb-6 border border-blue-100">
                <Target className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent mb-2">
                Our Mission
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
                To help businesses use technology as a competitive advantage.
              </h3>
              <p className="text-brand-secondary text-base leading-relaxed">
                We exist to eliminate the friction, unpredictability, and technical debt that slow businesses down. We empower leadership teams to turn ambitious software ideas into scalable, revenue-generating digital products.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white border border-brand-border shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 border border-indigo-100">
                <Compass className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-indigo-600 mb-2">
                Our Vision
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-brand-dark mb-4">
                To become the most trusted global technology partner for companies building what comes next.
              </h3>
              <p className="text-brand-secondary text-base leading-relaxed">
                We aspire to set the global benchmark for technical excellence, engineering integrity, and long-term client loyalty—recognized worldwide as the team you call when technical failure is not an option.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Our Operating Principles */}
      <Section variant="default">
        <SectionHeading
          eyebrow="Values & Standards"
          title="The principles that govern our engineering."
          description="These six foundational pillars shape how we hire, architect systems, communicate with clients, and evaluate our work."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-dark mb-6">
                    <Icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <CardTitle className="text-xl text-brand-dark mb-3">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* 5. How We Think (Value Transformation Pipeline) */}
      <Section variant="dark">
        <SectionHeading
          eyebrow="Our Methodology"
          theme="dark"
          title="How we think: From problem to compounding value."
          description="Every successful technology initiative follows a disciplined reasoning framework. Here is how we transform business ambiguity into high-performance software."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
          {pipeline.map((item, idx) => (
            <div
              key={item.step}
              className="p-5 rounded-xl bg-brand-dark-surface border border-brand-dark-border flex flex-col justify-between group hover:border-brand-accent/50 transition-colors"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-brand-accent block mb-3">
                  {item.step}
                </span>
                <h4 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
              {idx < pipeline.length - 1 && (
                <div className="hidden lg:block pt-4 text-slate-600 font-mono text-center">
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* 6. Leadership & Team Philosophy */}
      <Section variant="default">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="accent" className="mb-4">
            <Users className="w-3 h-3 mr-1" />
            Leadership Philosophy
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-brand-dark mb-6">
            Engineers leading engineers.
          </h2>
          <p className="text-base sm:text-lg text-brand-secondary leading-relaxed mb-8">
            At Osstap, every project is supervised directly by practitioners who have built and operated high-scale distributed systems. We do not maintain layers of non-technical project managers who act as communication bottlenecks.
          </p>
          <p className="text-sm text-brand-secondary/80 leading-relaxed mb-10">
            Our global squads operate with high autonomy, clear ownership, and a shared passion for software craftsmanship. When you work with Osstap, you speak directly to the architects who design and build your product.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/careers" variant="outline" showArrow>
              Explore Careers at Osstap
            </Button>
            <Button href="/contact" variant="primary">
              Speak with a Technical Lead
            </Button>
          </div>
        </div>
      </Section>

      {/* Final Closing CTA */}
      <FinalCtaSection />
    </>
  );
}
