import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { BlogListClient } from "@/components/blog/BlogListClient";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { blogPostsData } from "@/content/blog";
import { BreadcrumbsJsonLd } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Insights & Engineering Lab",
  description:
    "Explore architectural blueprints, system scalability deep-dives, and production lessons from the Osstap engineering team.",
};

export default function BlogPage() {
  return (
    <>
      <BreadcrumbsJsonLd
        items={[
          { name: "Home", url: "https://osstap.com" },
          { name: "Insights", url: "https://osstap.com/blog" },
        ]}
      />

      {/* Blog Hub Hero */}
      <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-24 overflow-hidden bg-white border-b border-brand-border">
        <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />
        <Container>
          <div className="max-w-3xl">
            <div className="mb-6">
              <Badge variant="accent">Engineering Lab &amp; Research</Badge>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.15] mb-6">
              Ideas, engineering and technology.
            </h1>
            <p className="text-lg sm:text-xl text-brand-secondary leading-relaxed max-w-2xl">
              Practical lessons, architectural patterns, and engineering trade-offs from building and scaling enterprise digital products.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Listing Section with Client-Side Filtering */}
      <Section variant="light">
        <BlogListClient initialPosts={blogPostsData} />
      </Section>

      {/* Final Closing CTA */}
      <FinalCtaSection />
    </>
  );
}
