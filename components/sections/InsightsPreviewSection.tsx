import React from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { blogPostsData } from "@/content/blog";
import { ArrowRight, Clock } from "lucide-react";

export function InsightsPreviewSection() {
  const latestPosts = blogPostsData.slice(0, 3);

  return (
    <Section id="insights" variant="light">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <SectionHeading
          eyebrow="Insights & Engineering"
          title="Perspectives from our engineering lab."
          description="In-depth technical analyses, architecture trade-offs, and practical lessons from shipping production systems."
          className="mb-0"
        />
        <div className="flex-shrink-0">
          <Button href="/blog" variant="outline" showArrow>
            View All Insights
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {latestPosts.map((post) => (
          <Card
            key={post.id}
            href={`/blog/${post.slug}`}
            interactive
            className="group h-full flex flex-col justify-between bg-white"
          >
            <div>
              {/* Card Meta Top */}
              <div className="flex items-center justify-between text-xs text-brand-secondary mb-4">
                <span className="font-semibold text-brand-accent px-2 py-0.5 rounded bg-blue-50 border border-blue-100 uppercase tracking-wider text-[11px]">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <Clock className="w-3 h-3 text-brand-secondary" />
                  {post.readingTime}
                </span>
              </div>

              <CardTitle className="text-xl group-hover:text-brand-accent transition-colors leading-snug mb-3">
                {post.title}
              </CardTitle>

              <CardDescription className="line-clamp-3 text-sm">
                {post.excerpt}
              </CardDescription>
            </div>

            <CardFooter className="pt-6 border-t border-brand-border/60 text-xs font-semibold text-brand-dark group-hover:text-brand-accent transition-colors">
              <span>Read article</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
