import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import {
  getJobBySlug,
  getAllJobSlugs,
  openPositionsData,
} from "@/content/careers";
import { siteConfig } from "@/content/siteConfig";
import { BreadcrumbsJsonLd, JobPostingJsonLd } from "@/lib/seo/schema";
import {
  MapPin,
  Briefcase,
  Clock,
  CheckCircle2,
  Mail,
  ArrowLeft,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface JobPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllJobSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    return {
      title: "Job Not Found",
    };
  }

  return {
    title: `${job.title} | Careers at Osstap`,
    description: job.shortSummary,
    openGraph: {
      title: `${job.title} | Careers at Osstap`,
      description: job.shortSummary,
    },
  };
}

export default async function JobDetailPage({ params }: JobPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  const otherJobs = openPositionsData.filter((j) => j.slug !== slug).slice(0, 3);

  const applicationMailto = `mailto:${siteConfig.contact.careersEmail}?subject=${encodeURIComponent(
    `Application: ${job.title} - [Your Full Name]`
  )}&body=${encodeURIComponent(
    `Hello Osstap Engineering Team,\n\nI am applying for the ${job.title} position.\n\nFull Name: \nLinkedIn: \nGitHub / Portfolio: \nLocation: \nBrief note on your background:\n\n(Please attach your CV / Resume)\n`
  )}`;

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "https://osstap.com" },
          { name: "Careers", url: "https://osstap.com/careers" },
          { name: job.title, url: `https://osstap.com/careers/${job.slug}` },
        ]}
      />
      <JobPostingJsonLd job={job} />

      {/* Role Header / Hero */}
      <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden bg-white border-b border-brand-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <Container>
          <div className="max-w-4xl">
            {/* Back to careers link */}
            <Link
              href="/careers"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-secondary hover:text-brand-dark mb-6 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all open positions</span>
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <Badge variant="accent">{job.department}</Badge>
              <span className="flex items-center gap-1 text-xs text-brand-secondary">
                <MapPin className="w-3.5 h-3.5 text-brand-accent" />
                {job.location}
              </span>
              <span className="flex items-center gap-1 text-xs text-brand-secondary">
                <Briefcase className="w-3.5 h-3.5 text-brand-accent" />
                {job.type}
              </span>
              <span className="flex items-center gap-1 text-xs text-brand-secondary">
                <Clock className="w-3.5 h-3.5 text-brand-accent" />
                {job.experienceLevel}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.15] mb-6">
              {job.title}
            </h1>

            <p className="text-lg sm:text-xl text-brand-secondary leading-relaxed mb-8 max-w-3xl">
              {job.shortSummary}
            </p>

            <div className="flex items-center gap-4">
              <Button href={applicationMailto} variant="primary" size="lg" external>
                <Mail className="w-4 h-4 mr-2" />
                Apply for this Role
              </Button>
              <Button href="#details" variant="secondary" size="lg">
                Role Details &amp; Requirements
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Role Deep Dive Specification */}
      <Section id="details" variant="default">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Job Description Content Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* About the Role */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">
                About the Role
              </h2>
              <p className="text-base text-brand-secondary leading-relaxed">
                {job.aboutRole}
              </p>
            </div>

            {/* Responsibilities */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                Key Responsibilities
              </h2>
              <ul className="space-y-4">
                {job.responsibilities.map((resp) => (
                  <li key={resp} className="flex items-start gap-3 text-sm text-brand-secondary leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                Qualifications &amp; Requirements
              </h2>
              <ul className="space-y-4">
                {job.requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-sm text-brand-secondary leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Nice to have */}
            {job.niceToHave.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-brand-dark mb-6">
                  Nice to Have
                </h2>
                <ul className="space-y-3">
                  {job.niceToHave.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-brand-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/60 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What we offer */}
            <div>
              <h2 className="text-2xl font-bold text-brand-dark mb-6">
                What We Offer
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {job.whatWeOffer.map((offer) => (
                  <div
                    key={offer}
                    className="p-4 rounded-xl bg-brand-light border border-brand-border text-sm text-brand-dark flex items-start gap-2.5"
                  >
                    <Sparkles className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" />
                    <span>{offer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Right Application Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 p-8 rounded-2xl bg-brand-dark text-white border border-brand-dark-border shadow-xl">
              <div className="text-xs font-mono font-semibold text-brand-accent uppercase tracking-wider mb-2">
                Fast-Track Application
              </div>
              <h3 className="text-xl font-bold mb-4">
                Ready to make an impact?
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                We review applications on a rolling basis. Our technical interview process is fast, transparent, and focused on real-world engineering discussions—zero automated LeetCode trick questions.
              </p>

              <div className="space-y-4 mb-6 text-xs text-slate-300">
                <div className="flex items-center justify-between pb-2 border-b border-brand-dark-border">
                  <span className="text-slate-400">Position:</span>
                  <span className="font-semibold text-white">{job.title}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-brand-dark-border">
                  <span className="text-slate-400">Department:</span>
                  <span className="font-semibold text-white">{job.department}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-brand-dark-border">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-white">{job.location}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-brand-dark-border">
                  <span className="text-slate-400">Response Time:</span>
                  <span className="font-semibold text-emerald-400">&le; 48 hours</span>
                </div>
              </div>

              <Button
                href={applicationMailto}
                variant="accent"
                size="md"
                className="w-full justify-center"
                external
              >
                <Mail className="w-4 h-4 mr-2" />
                Submit Application
              </Button>

              <p className="text-[11px] text-slate-400 text-center mt-4">
                Questions? Email us at{" "}
                <a
                  href={`mailto:${siteConfig.contact.careersEmail}`}
                  className="text-brand-accent hover:underline"
                >
                  {siteConfig.contact.careersEmail}
                </a>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Other Open Positions */}
      <Section variant="light">
        <SectionHeading
          eyebrow="Explore More"
          title="Other Open Positions"
          description="We are growing across multiple engineering disciplines."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherJobs.map((other) => (
            <Card
              key={other.id}
              href={`/careers/${other.slug}`}
              interactive
              className="p-6 flex flex-col justify-between bg-white"
            >
              <div>
                <span className="text-xs font-semibold text-brand-accent px-2 py-0.5 rounded bg-blue-50 border border-blue-100 mb-3 inline-block">
                  {other.department}
                </span>
                <CardTitle className="text-lg mb-2">{other.title}</CardTitle>
                <CardDescription className="text-xs line-clamp-2">
                  {other.shortSummary}
                </CardDescription>
              </div>

              <div className="mt-4 pt-4 border-t border-brand-border/60 text-xs font-semibold text-brand-dark flex items-center justify-between">
                <span>View specification</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Final Closing CTA */}
      <FinalCtaSection />
    </>
  );
}
