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
  getArticleBySlug,
  getAllArticleSlugs,
  getRelatedArticles,
} from "@/content/blog";
import { BreadcrumbsJsonLd, ArticleJsonLd } from "@/lib/seo/schema";
import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  BookOpen,
} from "lucide-react";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: `${article.title} | Osstap Insights`,
    description: article.excerpt,
    openGraph: {
      type: "article",
      title: `${article.title} | Osstap Insights`,
      description: article.excerpt,
      publishedTime: article.publishedAt,
      authors: [article.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function BlogDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, article.category);

  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "https://osstap.com" },
          { name: "Insights", url: "https://osstap.com/blog" },
          { name: article.title, url: `https://osstap.com/blog/${article.slug}` },
        ]}
      />
      <ArticleJsonLd article={article} />

      {/* Article Header */}
      <article className="min-h-screen bg-white">
        <header className="pt-16 pb-16 sm:pt-20 sm:pb-24 border-b border-brand-border bg-brand-light/40 relative">
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
          <Container size="narrow">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-secondary hover:text-brand-dark mb-6 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to all insights</span>
            </Link>

            {/* Meta Top */}
            <div className="flex flex-wrap items-center gap-3 text-xs mb-6">
              <Badge variant="accent">{article.category}</Badge>
              <span className="flex items-center gap-1 text-brand-secondary font-mono">
                <Calendar className="w-3.5 h-3.5" />
                {article.publishedAt}
              </span>
              <span className="text-brand-secondary">•</span>
              <span className="flex items-center gap-1 text-brand-secondary font-mono">
                <Clock className="w-3.5 h-3.5" />
                {article.readingTime}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-dark leading-[1.2] mb-6">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-brand-secondary leading-relaxed mb-8">
              {article.subtitle}
            </p>

            {/* Author Byline */}
            <div className="pt-6 border-t border-brand-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center font-bold text-sm">
                  {article.author.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-bold text-brand-dark">
                    {article.author.name}
                  </div>
                  <div className="text-xs text-brand-secondary">
                    {article.author.role}
                  </div>
                </div>
              </div>

              <div className="text-xs text-brand-secondary flex items-center gap-1">
                <BookOpen className="w-4 h-4 text-brand-accent" />
                <span>Verified Engineering Insight</span>
              </div>
            </div>
          </Container>
        </header>

        {/* Article Body Content */}
        <Container size="narrow" className="py-16 sm:py-20">
          <div className="prose prose-lg max-w-none text-brand-dark space-y-6 leading-relaxed">
            {article.content.map((paragraph, index) => {
              // Format numbered points or headings cleanly
              if (
                paragraph.startsWith("1.") ||
                paragraph.startsWith("2.") ||
                paragraph.startsWith("3.") ||
                paragraph.startsWith("4.")
              ) {
                const [numberPart, ...rest] = paragraph.split(":");
                return (
                  <div
                    key={index}
                    className="p-5 rounded-xl bg-brand-light border-l-4 border-brand-accent my-6"
                  >
                    <h3 className="text-base font-bold text-brand-dark mb-1">
                      {numberPart}
                    </h3>
                    <p className="text-sm text-brand-secondary leading-relaxed mb-0">
                      {rest.join(":")}
                    </p>
                  </div>
                );
              }

              if (paragraph.endsWith(":")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl font-bold tracking-tight text-brand-dark pt-6 mb-3"
                  >
                    {paragraph.slice(0, -1)}
                  </h2>
                );
              }

              return (
                <p key={index} className="text-base sm:text-lg text-brand-secondary leading-relaxed">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Article Footer & Technical Consultation Callout */}
          <div className="mt-16 pt-12 border-t border-brand-border">
            <div className="p-8 rounded-2xl bg-brand-light border border-brand-border flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-brand-dark mb-1">
                  Facing a similar architectural challenge?
                </h3>
                <p className="text-sm text-brand-secondary max-w-lg">
                  Speak directly with the Osstap engineering team to discuss your product architecture, cloud strategy, or AI integration goals.
                </p>
              </div>
              <Button href="/contact" variant="primary" showArrow className="flex-shrink-0">
                Book a Consultation
              </Button>
            </div>
          </div>
        </Container>
      </article>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <Section variant="light">
          <SectionHeading
            eyebrow="Keep Reading"
            title="Related Engineering Insights"
            description="Explore more architectural strategies and case studies from our technical practice."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((related) => (
              <Card
                key={related.id}
                href={`/blog/${related.slug}`}
                interactive
                className="group h-full flex flex-col justify-between bg-white"
              >
                <div>
                  <span className="text-xs font-semibold text-brand-accent px-2 py-0.5 rounded bg-blue-50 border border-blue-100 uppercase tracking-wider mb-3 inline-block">
                    {related.category}
                  </span>
                  <CardTitle className="text-lg leading-snug mb-2">
                    {related.title}
                  </CardTitle>
                  <CardDescription className="text-xs line-clamp-2">
                    {related.excerpt}
                  </CardDescription>
                </div>

                <div className="mt-4 pt-4 border-t border-brand-border/60 text-xs font-semibold text-brand-dark group-hover:text-brand-accent transition-colors flex items-center justify-between">
                  <span>Read article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* Final Closing CTA */}
      <FinalCtaSection />
    </>
  );
}
