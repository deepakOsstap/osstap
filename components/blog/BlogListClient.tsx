"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BlogPost, blogCategories } from "@/content/blog";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { ArrowRight, Clock, Calendar, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogListClientProps {
  initialPosts: BlogPost[];
}

export function BlogListClient({ initialPosts }: BlogListClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? initialPosts
      : initialPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = initialPosts.find((post) => post.featured) || initialPosts[0];
  const remainingPosts = filteredPosts.filter((p) => p.id !== featuredPost.id);

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 pb-2">
        {blogCategories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent",
                isSelected
                  ? "bg-brand-dark text-white shadow-sm"
                  : "bg-brand-light text-brand-secondary hover:text-brand-dark hover:bg-brand-light-hover border border-brand-border/60"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Featured Post (only shown when 'All' is selected or featured matches category) */}
      {(selectedCategory === "All" || featuredPost.category === selectedCategory) && (
        <div className="rounded-2xl bg-brand-dark text-white p-8 sm:p-12 border border-brand-dark-border shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs mb-4">
              <span className="inline-flex items-center gap-1 font-semibold text-brand-accent px-2.5 py-0.5 rounded bg-blue-950/80 border border-blue-800/80 uppercase tracking-wider text-[11px]">
                <Sparkles className="w-3 h-3" />
                Featured Insight
              </span>
              <span className="text-slate-400 font-mono text-[11px]">
                {featuredPost.category}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400 font-mono text-[11px] flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {featuredPost.readingTime}
              </span>
            </div>

            <Link href={`/blog/${featuredPost.slug}`} className="block group">
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 group-hover:text-brand-accent transition-colors leading-tight">
                {featuredPost.title}
              </h2>
            </Link>

            <p className="text-base text-slate-300 leading-relaxed mb-8 max-w-2xl">
              {featuredPost.excerpt}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-brand-dark-border">
              <div className="text-xs text-slate-400">
                <span>By {featuredPost.author.name}</span>
                <span className="mx-2">•</span>
                <span>{featuredPost.publishedAt}</span>
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="text-sm font-semibold text-brand-accent hover:underline inline-flex items-center gap-1.5"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Grid of Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {(selectedCategory === "All" ? remainingPosts : filteredPosts).map((post) => (
          <Card
            key={post.id}
            href={`/blog/${post.slug}`}
            interactive
            className="group h-full flex flex-col justify-between bg-white border-brand-border"
          >
            <div>
              {/* Meta Top */}
              <div className="flex items-center justify-between text-xs text-brand-secondary mb-4">
                <span className="font-semibold text-brand-accent px-2.5 py-0.5 rounded bg-blue-50 border border-blue-100 uppercase tracking-wider text-[11px]">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px]">
                  <Clock className="w-3 h-3 text-brand-secondary" />
                  {post.readingTime}
                </span>
              </div>

              {/* Title */}
              <CardTitle className="text-xl group-hover:text-brand-accent transition-colors leading-snug mb-3">
                {post.title}
              </CardTitle>

              {/* Excerpt */}
              <CardDescription className="line-clamp-3 text-sm">
                {post.excerpt}
              </CardDescription>
            </div>

            {/* Footer */}
            <div>
              <div className="pt-4 mt-6 border-t border-brand-border/60 flex items-center justify-between text-xs text-brand-secondary">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.publishedAt}
                </span>
                <span className="font-semibold text-brand-dark group-hover:text-brand-accent transition-colors inline-flex items-center gap-1">
                  Read article
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-16 text-brand-secondary">
          <p className="text-base font-medium">No articles found in this category.</p>
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className="mt-2 text-sm text-brand-accent hover:underline font-semibold cursor-pointer"
          >
            View all insights
          </button>
        </div>
      )}
    </div>
  );
}
