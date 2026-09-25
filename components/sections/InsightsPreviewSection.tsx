import React from "react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { blogPostsData } from "@/content/blog";
import { ArrowRight, Clock } from "lucide-react";

export function InsightsPreviewSection() {
  const latestPosts = blogPostsData.slice(0, 3);

  return (
    <Section id="insights" variant="light" className="relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#B4F000]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

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
            variant="yellowGreen"
            className="group h-full flex flex-col justify-between hover:border-lime-500 hover:shadow-xl hover:shadow-lime-500/10 transition-all"
          >
            <div>
              {/* Card Meta Top */}
              <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                <span className="font-mono font-bold text-lime-900 px-3 py-0.5 rounded-lg bg-lime-100 border border-lime-300 shadow-xs uppercase tracking-wider text-[11px]">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#84CC16]" />
                  {post.readingTime}
                </span>
              </div>

              <CardTitle className="text-xl group-hover:text-lime-700 transition-colors leading-snug mb-3">
                {post.title}
              </CardTitle>

              <CardDescription className="line-clamp-3 text-sm text-slate-600">
                {post.excerpt}
              </CardDescription>
            </div>

            <CardFooter className="pt-6 border-t border-slate-200 text-xs font-mono font-bold text-slate-700 group-hover:text-lime-700 transition-colors">
              <span>Read article</span>
              <ArrowRight className="w-4 h-4 text-[#84CC16] transition-transform group-hover:translate-x-1" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
