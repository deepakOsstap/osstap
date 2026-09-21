# Osstap Website - Product Requirements Document (PRD)

**Product:** Osstap Corporate Website  
**Company:** Osstap  
**Tagline concept:** One Stop Solution to All Problems  
**Product type:** B2B IT Consultancy / Technology Services Website  
**Version:** V1  
**Primary objective:** Establish a premium global technology consultancy presence and convert visitors into potential clients, partners, and prospective employees.

---

## 1. Executive Summary

Osstap is a technology consultancy company providing software engineering, digital transformation, cloud, AI, mobile, web, and technology consulting services.

The website should establish Osstap as:

> **A modern, engineering-first technology partner that helps businesses transform ideas into scalable digital products.**

The website should not feel like a generic IT outsourcing website.

It should communicate:

- Engineering expertise
- Technical credibility
- Modern technology
- Business understanding
- Premium execution
- Global capability
- Reliability
- Long-term partnership

The website should be:

- Fast
- Responsive
- SEO-friendly
- Accessible
- Mobile-first
- Visually premium
- Easy to maintain
- Static for V1
- Prepared for future CMS/backend integration
- Optimized for lead generation

---

# 2. Reference Website

Reference:

https://www.algoqube.com/

Use Algoqube primarily as **information architecture inspiration**, not as a design to copy.

The reference website demonstrates a useful structure:

1. Hero
2. Solutions / capabilities
3. About
4. Services
5. Articles / insights
6. CTA
7. Footer

Osstap should retain this high-level structure but create an independent visual identity.

---

# 3. Product Vision

Build a website that makes a potential CTO, founder, product leader, or business owner think:

> "These people understand technology and can actually build what we need."

The website should sell **confidence**, not just services.

---

# 4. Target Audience

## Primary

### 1. Startup Founders

Looking for:

- MVP development
- Product engineering
- Mobile applications
- Web applications
- Technical consulting
- CTO-level guidance

### 2. CTOs / VP Engineering

Looking for:

- Engineering teams
- Architecture consulting
- Legacy modernization
- Cloud transformation
- AI integration
- Performance optimization
- Technology strategy

### 3. Enterprises

Looking for:

- Digital transformation
- Application modernization
- Staff augmentation
- Managed engineering
- Cloud solutions
- AI solutions

### 4. Product Companies

Looking for:

- Product development
- Dedicated engineering teams
- Mobile development
- Backend engineering
- UI/UX
- QA automation

## Secondary

- Job seekers
- Technology partners
- Freelancers
- Consultants
- Potential investors
- Industry peers

---

# 5. Primary Business Goals

### Goal 1: Establish credibility

Visitors should immediately understand that Osstap is a serious technology company.

### Goal 2: Explain capabilities

Visitors should clearly understand what Osstap can do.

### Goal 3: Generate leads

Primary CTA:

> **Let's Talk**

Secondary CTA:

> **Explore Services**

### Goal 4: Establish global presence

The site should not feel restricted to one geography.

Suggested positioning:

> Building technology solutions for ambitious businesses worldwide.

### Goal 5: Recruit talent

Careers should communicate that Osstap is an engineering-driven company.

---

# 6. V1 Scope

The first release contains:

```text
/
├── Home
├── About
├── Services
├── Careers
├── Blog
│   ├── Blog Listing
│   └── Blog Detail
├── Contact
├── Privacy Policy
└── Terms
```

Although Contact was not explicitly listed initially, it should be included because the website's primary business purpose is lead generation.

---

# 7. Recommended Technology Stack

## Frontend

Recommended:

```text
Next.js
TypeScript
React
Tailwind CSS
```

Use the latest stable versions available at implementation time.

Alternative:

```text
Astro + React
```

If maximum static performance is the highest priority, Astro is also an excellent option.

However, the recommended choice is:

> **Next.js + TypeScript + Tailwind**

because it provides an excellent foundation for future:

- CMS
- Authentication
- APIs
- Dashboards
- Blog management
- Lead management
- Dynamic content

---

# 8. Architecture

Recommended structure:

```text
Next.js
│
├── app/
│   ├── page.tsx
│   ├── about/
│   ├── services/
│   ├── careers/
│   ├── blog/
│   ├── contact/
│   ├── privacy/
│   └── terms/
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── sections/
│   ├── cards/
│   ├── animations/
│   ├── forms/
│   └── ui/
│
├── content/
│   ├── services/
│   ├── blog/
│   └── careers/
│
├── lib/
│   ├── seo/
│   ├── analytics/
│   └── utils/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
└── styles/
```

---

# 9. Design Direction

Do **not** build:

- Generic Bootstrap-looking website
- Excessive gradients
- Stock-photo-heavy website
- Huge amount of text
- Random animations
- Excessive glassmorphism
- Template-looking cards

Instead:

### Design keywords

```text
Premium
Minimal
Technical
Confident
Modern
Global
Elegant
Engineering-first
High-trust
Editorial
```

Visual inspiration can be thought of as:

> **McKinsey + Linear + Vercel + modern technology consultancy**

rather than a generic IT outsourcing website.

---

# 10. Brand Positioning

## Company

**OSSTAP**

Possible brand interpretation:

> **One Stop Solution To All Problems**

Do not make the acronym explanation the dominant branding element.

Brand should primarily appear as:

# OSSTAP

with supporting positioning such as:

> **Technology. Engineering. Transformation.**

or:

> **Building technology that moves businesses forward.**

---

# 11. Color System

Use a premium neutral foundation.

### Primary

```text
Near Black
#08090B
```

### Background

```text
#FFFFFF
```

### Secondary Background

```text
#F6F7F9
```

### Primary Text

```text
#111318
```

### Secondary Text

```text
#626873
```

### Accent

Use one strong accent.

Potential:

```text
Electric Blue
#2563EB
```

or:

```text
Violet
#7C3AED
```

Do not use multiple unrelated accent colors.

---

# 12. Typography

Recommended:

### Primary

```text
Inter
```

or:

```text
Geist
```

If using Next.js, prefer an optimized locally served font rather than fetching Google Fonts at runtime.

Typography hierarchy:

```text
Hero:
64–80px desktop

Section heading:
44–56px

Subheading:
20–24px

Body:
16–18px

Small:
14px
```

Mobile typography should scale down appropriately.

---

# 13. Global Navigation

Desktop:

```text
OSSTAP

About
Services
Careers
Blog

                 Let's Talk
```

Navigation behavior:

- Sticky navigation
- Transparent over hero initially
- Transitions to solid/blurred background after scroll
- Subtle border
- Smooth transition
- Mobile hamburger

Do not create a complicated mega-menu in V1.

---

# 14. HOME PAGE

The Home page is the most important page.

## 14.1 Hero Section

Large editorial hero.

Suggested headline:

> **We build technology that moves businesses forward.**

Supporting text:

> Osstap is a technology consultancy helping businesses design, build and scale high-quality digital products through engineering, modern technology and strategic expertise.

CTA:

```text
Let's Talk →
Explore Services →
```

Visual:

A sophisticated abstract technology visualization.

Avoid generic stock photos.

Possible visual:

```text
abstract 3D geometric system
+
subtle grid
+
data lines
+
floating technical elements
```

Animation should be extremely subtle.

---

## 14.2 Trust / Capability Strip

Immediately below hero.

Example:

```text
Product Engineering
AI & Automation
Cloud & DevOps
Web & Mobile
Technology Consulting
```

This quickly communicates breadth.

---

## 14.3 What We Do

Section heading:

> **From idea to impact.**

Supporting copy:

> We help businesses solve complex technology problems across strategy, engineering and product delivery.

Display 4–6 capability cards.

### Product Engineering

Design and build scalable digital products from concept to production.

### Web & Mobile

Modern applications across web, iOS and Android.

### AI & Automation

Integrate AI into products, operations and customer experiences.

### Cloud & DevOps

Build secure, scalable and cost-efficient cloud infrastructure.

### Technology Consulting

Architecture, modernization and technology strategy.

### Dedicated Engineering Teams

Extend your engineering organization with experienced technology professionals.

---

## 14.4 Featured Services

Create visually strong service cards.

Each card:

```text
Icon / visual

SERVICE NAME

Short description

Explore →
```

Hover interaction:

- Card moves slightly
- Border changes
- Arrow moves
- Background changes subtly

Avoid excessive animation.

---

## 14.5 Why Osstap

Heading:

> **Technology is only valuable when it solves the right problem.**

Create four principles.

### Engineering First

We prioritize robust engineering and long-term maintainability.

### Business Focused

Technology decisions should create measurable business value.

### Built to Scale

Architecture should support tomorrow's requirements, not just today's.

### Long-Term Partnership

We work as an extension of your team rather than a disconnected vendor.

---

## 14.6 Technology Expertise

Create a visually impressive technology section.

Example:

```text
Swift
iOS
Android
React
Next.js
Node.js
Python
Kotlin
Java
AWS
Azure
Docker
Kubernetes
PostgreSQL
MongoDB
AI / ML
```

Do not turn this into a giant logo wall.

Use categories:

```text
Frontend
Backend
Mobile
Cloud
Data
AI
DevOps
```

---

## 14.7 Process

Heading:

> **How we work**

Four steps:

```text
01 Discover
02 Design
03 Build
04 Scale
```

### Discover

Understand business objectives, users and technical challenges.

### Design

Define architecture, product experience and delivery strategy.

### Build

Engineer, test and ship production-ready solutions.

### Scale

Optimize, evolve and continuously improve.

---

## 14.8 Global Capability

Large visual section.

Heading:

> **Built for a global world.**

Copy:

> From startups to growing enterprises, Osstap partners with teams across geographies to solve complex technology challenges.

Potential visual:

```text
world map
+
subtle connection lines
```

Do not claim specific offices/countries unless those are actually established.

---

## 14.9 Insights

Display 3 latest blog articles.

Card:

```text
Category
Date

Article title

Short excerpt

Read article →
```

---

## 14.10 Final CTA

Large dark section.

Example:

> **Have a technology challenge?  
> Let's solve it together.**

Buttons:

> Start a conversation →

> Explore our services →

---

# 15. ABOUT PAGE

URL:

```text
/about
```

Hero:

> **Technology built around your ambitions.**

Supporting copy explaining Osstap.

## About Sections

### 1. Who We Are

Describe Osstap as an engineering-focused technology consultancy.

### 2. Our Mission

Example:

> To help businesses use technology as a competitive advantage.

### 3. Our Vision

Example:

> To become a trusted global technology partner for companies building what comes next.

### 4. Our Principles

```text
Ownership
Engineering Excellence
Transparency
Customer Obsession
Continuous Learning
Integrity
```

### 5. How We Think

```text
Business problem
↓
Technology strategy
↓
Architecture
↓
Execution
↓
Measurement
↓
Continuous improvement
```

### 6. Leadership

V1 can contain placeholders if leadership information is not ready.

Structure:

```text
Photo
Name
Role
Short bio
LinkedIn
```

Do not fabricate team members.

---

# 16. SERVICES PAGE

URL:

```text
/services
```

Hero:

> **Technology expertise for every stage of your journey.**

Services should be categorized.

## Service 1 - Product Engineering

Includes:

- Product development
- MVP development
- Architecture
- Backend
- Frontend
- Mobile
- API development
- Testing

## Service 2 - Web Engineering

Includes:

- React
- Next.js
- Progressive Web Apps
- Enterprise web applications
- Performance optimization

## Service 3 - Mobile Engineering

Includes:

- iOS
- Android
- Cross-platform
- Mobile architecture
- App modernization
- App performance

## Service 4 - AI & Automation

Includes:

- AI integrations
- AI agents
- LLM applications
- Workflow automation
- Intelligent search
- Customer support automation

## Service 5 - Cloud & DevOps

Includes:

- AWS
- Azure
- Infrastructure
- CI/CD
- Containers
- Kubernetes
- Monitoring
- Cost optimization

## Service 6 - Technology Consulting

Includes:

- Architecture reviews
- Technology strategy
- Digital transformation
- Legacy modernization
- Performance audits
- Technical due diligence

## Service 7 - Dedicated Engineering Teams

Includes:

- Dedicated developers
- Team augmentation
- Technical leadership
- Long-term engineering partnerships

---

# 17. Individual Service Page Template

Every service should eventually support:

```text
/services/product-engineering
```

Template:

### Hero

Service name.

### Problem

What business problem does this solve?

### Capabilities

Detailed capabilities.

### Technology

Relevant stack.

### Approach

How Osstap delivers the service.

### Outcomes

Business-oriented outcomes.

### CTA

> Discuss your project →

V1 may use static service pages.

---

# 18. CAREERS PAGE

URL:

```text
/careers
```

Hero:

> **Build what comes next.**

Supporting:

> Join a team that enjoys solving difficult problems with technology.

## Culture

Cards:

```text
Learn constantly
Own your work
Build with quality
Think like an entrepreneur
Help each other grow
```

## Open Positions

V1 static.

Example:

```text
Senior iOS Engineer
Remote / India
Full-time

View role →
```

Other possible roles:

```text
Senior Backend Engineer
Frontend Engineer
AI Engineer
Product Designer
QA Automation Engineer
DevOps Engineer
```

Only publish positions that actually exist.

---

# 19. JOB DETAIL PAGE

Example:

```text
/careers/senior-ios-engineer
```

Structure:

```text
Role
Location
Employment type

About the role

Responsibilities

Requirements

Nice to have

What we offer

Apply
```

CTA:

> Apply now

V1 can open an email application or external application URL.

---

# 20. BLOG

URL:

```text
/blog
```

Blog is important for SEO and authority.

Hero:

> **Ideas, engineering and technology.**

Categories:

```text
Engineering
AI
Cloud
Mobile
Web
Product
Technology Strategy
Company
```

---

# 21. Blog Listing

Grid:

```text
Featured article

3-column article grid
```

Each article:

```text
Image
Category
Title
Excerpt
Date
Reading time
```

Filtering:

```text
All
Engineering
AI
Cloud
Mobile
Product
```

Client-side filtering is acceptable for V1.

---

# 22. Blog Detail

URL:

```text
/blog/[slug]
```

Must support:

```text
Title
Subtitle
Author
Date
Category
Reading time
Cover image
Article content
Related articles
CTA
```

SEO requirements:

- Canonical URL
- OpenGraph metadata
- Twitter/X metadata
- Article schema
- Breadcrumbs
- Semantic headings

---

# 23. CONTACT PAGE

URL:

```text
/contact
```

Hero:

> **Let's build something meaningful.**

Form:

```text
Name *
Work Email *
Company
Phone
What can we help with? *
Budget
Message *
```

CTA:

> Send enquiry

V1 can either:

1. Submit to a future API
2. Use Formspree/Resend/etc.
3. Use mailto as temporary fallback

Frontend should abstract the implementation.

Example:

```typescript
submitContactForm()
```

rather than tightly coupling UI to an external provider.

---

# 24. Footer

Structure:

```text
OSSTAP

One stop solution to all problems.

Technology. Engineering. Transformation.

Company
About
Careers
Blog
Contact

Services
Product Engineering
AI & Automation
Cloud & DevOps
Web & Mobile
Technology Consulting

Connect
LinkedIn
GitHub
Email

Privacy
Terms

© 2026 Osstap. All rights reserved.
```

Only include social profiles that actually exist.

---

# 25. UX Requirements

The website must feel:

### Fast

No unnecessary loading states.

### Predictable

Navigation must be obvious.

### Elegant

Whitespace should be intentional.

### Responsive

Breakpoints:

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Recommended:

```text
320+
640+
768+
1024+
1280+
1536+
```

---

# 26. Animation Philosophy

Animation should communicate quality, not distract.

Use:

### Page entrance

Subtle fade + translate.

### Cards

Small hover movement.

### Buttons

Arrow movement.

### Navigation

Smooth background transition.

### Hero

Very subtle background motion.

Avoid:

- Excessive parallax
- Bouncing elements
- Loading animations everywhere
- Huge scroll effects
- Autoplay video

Respect:

```css
prefers-reduced-motion
```

---

# 27. Performance Requirements

Google's Core Web Vitals include LCP, INP and CLS.

Target:

```text
LCP ≤ 2.5s
INP ≤ 200ms
CLS ≤ 0.1
```

## Lighthouse targets

```text
Performance: 95+
Accessibility: 95+
Best Practices: 95+
SEO: 95+
```

These are engineering targets, not guarantees across every device/network.

---

# 28. Image Optimization

Never load unnecessarily large images.

Use:

```text
WebP
AVIF
```

where appropriate.

Use responsive image sizes.

Example:

```text
320w
640w
768w
1024w
1440w
1920w
```

If Next.js is used, use:

```text
next/image
```

Do not load 3000px images into a 400px container.

---

# 29. Font Optimization

Prefer:

```text
next/font
```

or locally hosted fonts.

Limit font weights:

```text
400
500
600
700
```

Avoid loading unnecessary font variants.

---

# 30. JavaScript Optimization

Avoid unnecessary client-side React.

Prefer:

```text
Server Components
```

where possible.

Use `"use client"` only when necessary.

Avoid unnecessary dependencies such as:

- Large animation libraries
- Large UI frameworks
- Moment.js
- Lodash

unless genuinely required.

---

# 31. CSS Requirements

Use Tailwind CSS.

Avoid:

```text
!important
```

unless absolutely necessary.

Create reusable design tokens:

```css
--color-background
--color-foreground
--color-muted
--color-accent
--radius
--spacing
```

---

# 32. Component Architecture

Create reusable components.

Example:

```text
Button
Container
Section
SectionHeading
Badge
ServiceCard
BlogCard
JobCard
TestimonialCard
Icon
Navigation
Footer
CTASection
```

Example:

```tsx
<Section>
  <SectionHeading
    eyebrow="Services"
    title="Technology expertise for every stage"
    description="..."
  />

  ...
</Section>
```

Avoid duplicate markup.

---

# 33. Design System

Create:

```text
Button
Card
Badge
Input
Textarea
Select
Navigation
Modal
Accordion
Tabs
```

Button variants:

```text
primary
secondary
outline
ghost
```

---

# 34. SEO

Every page must have:

```text
title
description
canonical URL
OpenGraph
Twitter metadata
```

Example homepage title:

> Osstap | Technology Consulting & Digital Engineering

Example description:

> Osstap helps businesses build, modernize and scale digital products through software engineering, AI, cloud and technology consulting.

---

# 35. Structured Data

Implement JSON-LD.

Organization:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Osstap",
  "url": "https://osstap.com"
}
```

Replace the domain with the actual production domain.

Also support:

```text
Article
BreadcrumbList
JobPosting
```

where applicable.

---

# 36. Sitemap

Generate:

```text
/sitemap.xml
```

Include:

```text
/
/about
/services
/careers
/blog
/contact
```

and published blog/job pages.

---

# 37. Robots

Create:

```text
/robots.txt
```

Allow search engines to crawl public content.

Block future private paths such as:

```text
/admin
/api/internal
```

if they are later introduced.

---

# 38. Accessibility

Target:

> WCAG 2.2 AA

Requirements:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Proper heading hierarchy
- Alt text
- Accessible forms
- Sufficient contrast
- ARIA only where necessary
- Screen-reader-friendly navigation

---

# 39. Security

Even though V1 is static:

### Required

HTTPS.

Security headers:

```text
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
Strict-Transport-Security
```

Do not expose secrets in frontend code.

Environment variables:

```text
NEXT_PUBLIC_*
```

only for values safe to expose.

Never place:

```text
API keys
private keys
database credentials
SMTP passwords
```

in client-side code.

---

# 40. Analytics

Keep analytics architecture provider-independent.

Create:

```typescript
trackEvent()
```

Example events:

```typescript
trackEvent("contact_cta_clicked")
trackEvent("service_viewed")
trackEvent("blog_opened")
trackEvent("career_application_clicked")
```

Possible V1:

```text
Google Analytics
Google Search Console
```

or a privacy-focused analytics solution.

Do not load analytics before consent where applicable to the deployment's privacy requirements.

---

# 41. Lead Tracking

Structure the frontend for future integration.

Potential future:

```text
Contact Form
     ↓
API
     ↓
CRM
     ↓
Email notification
     ↓
Lead dashboard
```

Do not hardcode the CRM into UI components.

---

# 42. Content Architecture

Do not hardcode every paragraph directly into JSX.

Use content objects.

Example:

```typescript
const services = [
  {
    slug: "product-engineering",
    title: "Product Engineering",
    description: "...",
    capabilities: [...]
  }
]
```

Blog content should ideally be Markdown/MDX.

Example:

```text
content/
  blog/
    building-scalable-ios-apps.mdx
    ai-agents-enterprise.mdx
```

This keeps V1 static while remaining CMS-ready.

---

# 43. Blog Architecture

Recommended:

```text
MDX
+
frontmatter
```

Example:

```yaml
---
title: "Building Scalable Digital Products"
description: "..."
date: "2026-09-21"
author: "Osstap"
category: "Engineering"
cover: "/images/blog/scalable-products.webp"
---
```

---

# 44. Error Pages

Create:

```text
404
500
loading
```

404 example:

> **Looks like this page took a wrong turn.**

CTA:

> Back to home

Keep error pages on-brand.

---

# 45. Responsive Design

## Mobile

Navigation:

```text
Logo     Menu
```

Hero:

```text
Headline
Description
CTA
```

Cards:

```text
1 column
```

## Tablet

```text
2 columns
```

## Desktop

```text
3 / 4 columns
```

Do not simply shrink desktop layouts.

Design mobile intentionally.

---

# 46. Mobile Performance

Test:

```text
Fast 4G
Slow 4G
```

Important:

- No huge hero video
- Optimized images
- Limited JS
- No layout jumps
- Lazy-load below-the-fold media
- Preload only critical assets

---

# 47. Caching

For static pages:

Use aggressive caching/CDN.

Potential deployment:

```text
Vercel
Cloudflare
AWS CloudFront
```

For V1, Vercel is the easiest operational choice if using Next.js.

---

# 48. Deployment

Recommended:

```text
GitHub
   ↓
CI/CD
   ↓
Vercel
   ↓
Production
```

Branches:

```text
main
develop
feature/*
```

Production deployment:

```text
main
```

Preview deployments:

```text
Pull Request
```

---

# 49. Environment Configuration

Create:

```text
.env.local
.env.example
```

Never commit:

```text
.env.local
```

Example:

```text
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_ANALYTICS_ID=
CONTACT_API_URL=
```

---

# 50. Testing

## Unit

Test:

- Utility functions
- Content parsing
- Form validation

## Component

Test:

- Navigation
- Contact form
- Service cards
- Blog cards

## E2E

Use Playwright.

Test:

```text
Home loads
Navigation works
Services page works
Blog opens
Blog detail works
Contact form validation works
Mobile menu works
404 works
```

---

# 51. SEO Testing

Verify:

```text
Title
Meta description
Canonical
OG image
robots
sitemap
structured data
heading hierarchy
alt attributes
internal links
```

Use:

```text
Google Search Console
Lighthouse
PageSpeed Insights
```

---

# 52. Performance Testing

Every PR should ideally check:

```text
Lighthouse
Bundle size
Image sizes
Core Web Vitals
Accessibility
```

Targets:

```text
LCP < 2.5 sec
INP < 200 ms
CLS < 0.1
```

Test on both desktop and mobile because real-world performance varies by device and network.

---

# 53. Content Strategy

Avoid generic corporate language.

### Weak

> We leverage innovative technologies to deliver transformational solutions.

### Strong

> We design and build digital products, modernize legacy systems, and help engineering teams solve complex technology problems.

Be specific.

---

# 54. Homepage Content Hierarchy

The homepage should approximately follow:

```text
NAV
↓
HERO
↓
Capability Strip
↓
What We Do
↓
Featured Services
↓
Why Osstap
↓
Technology Expertise
↓
How We Work
↓
Global Capability
↓
Insights
↓
CTA
↓
FOOTER
```

This is similar at the information-architecture level to the reference site, while keeping Osstap's positioning and visual identity independent.

---

# 55. Visual Assets

Prefer:

- Custom illustrations
- 3D geometric objects
- Technical diagrams
- Abstract networks
- Code fragments
- Data visualization
- Architecture diagrams
- Minimal editorial photography

For hero backgrounds, avoid large raster images where CSS/SVG can achieve the same effect.

---

# 56. Iconography

Use one consistent icon library.

Recommended:

```text
Lucide
```

Avoid mixing multiple icon systems unless necessary.

---

# 57. Microinteractions

### Button

Default:

```text
Let's Talk →
```

On hover:

```text
Let's Talk   →
             ↗
```

### Service Card

Card subtly lifts.

### Navigation

Active page gets an accent indicator.

### Blog Card

Image zoom:

```text
scale(1.02)
```

Keep it subtle.

---

# 58. Glassmorphism

Do not overuse glassmorphism.

A small amount may be used for:

- Navigation
- Floating UI
- Hero elements

Overall website should remain clean.

---

# 59. Dark / Light Theme

For V1, use a primarily light website with strategically dark sections.

Example:

```text
Light Hero
Light Services
Dark Why Osstap
Light Technology
Dark CTA
Dark Footer
```

A full light/dark toggle can be V2.

---

# 60. International / Global Readiness

Prepare architecture for future:

```text
/en
/us
/eu
```

but do not implement localization in V1 unless required.

All copy should be written in professional global English.

Avoid region-specific claims unless factually established.

---

# 61. Future Roadmap

## V1

Static corporate website.

## V1.1

Contact backend.

## V1.2

CMS.

## V2

Admin dashboard.

## V2

Blog CMS.

## V2

Lead CRM integration.

## V2

AI chatbot.

## V3

Client portal.

Potential architecture:

```text
Website
   ↓
API
   ↓
CMS
   ↓
CRM
   ↓
Analytics
```

---

# 62. Suggested Repository

```text
osstap-web/
│
├── app/
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── sections/
│   ├── services/
│   ├── blog/
│   └── careers/
│
├── content/
│   ├── blogs/
│   ├── services/
│   └── careers/
│
├── lib/
│
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── tests/
│
├── e2e/
│
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

# 63. Development Phases

## Phase 1 - Foundation

Build:

```text
Next.js
TypeScript
Tailwind
ESLint
Prettier
Git
```

Create design tokens.

## Phase 2 - Global Components

Build:

```text
Navigation
Footer
Container
Section
Button
Typography
Card
```

## Phase 3 - Homepage

Implement:

```text
Hero
Capabilities
Services
Why Osstap
Technology
Process
Global
Insights
CTA
```

## Phase 4 - About

Implement:

```text
Hero
Story
Mission
Vision
Principles
Leadership
CTA
```

## Phase 5 - Services

Implement:

```text
Service listing
Service cards
Service detail template
```

## Phase 6 - Careers

Implement:

```text
Careers hero
Culture
Benefits
Jobs
Job detail
Application CTA
```

## Phase 7 - Blog

Implement:

```text
Blog listing
Categories
Blog detail
Related articles
SEO
```

## Phase 8 - Contact

Implement:

```text
Contact page
Form
Validation
Success state
Error state
```

## Phase 9 - SEO

Implement:

```text
Metadata
Sitemap
Robots
Schema
OG images
Canonical URLs
```

## Phase 10 - Performance

Optimize:

```text
Images
Fonts
JavaScript
CSS
Animations
Caching
Server rendering
```

## Phase 11 - QA

Test:

```text
Chrome
Safari
Firefox
Edge

iPhone
Android
Tablet
Desktop
```

---

# 64. Definition of Done

## Functional

- [ ] All navigation works
- [ ] All pages render
- [ ] Mobile menu works
- [ ] Contact form works
- [ ] Blog listing works
- [ ] Blog details work
- [ ] Career pages work
- [ ] 404 works

## Design

- [ ] Premium visual identity
- [ ] Consistent typography
- [ ] Consistent spacing
- [ ] Responsive
- [ ] No visual bugs
- [ ] No horizontal overflow

## Performance

- [ ] Lighthouse Performance >=95 target
- [ ] LCP <=2.5s target
- [ ] INP <=200ms target
- [ ] CLS <=0.1 target
- [ ] Images optimized
- [ ] Fonts optimized
- [ ] JS minimized

## SEO

- [ ] Metadata
- [ ] Sitemap
- [ ] Robots
- [ ] Canonicals
- [ ] Schema
- [ ] OG images

## Accessibility

- [ ] Keyboard navigation
- [ ] Focus states
- [ ] Alt text
- [ ] Semantic HTML
- [ ] Accessible forms
- [ ] WCAG AA target

## Security

- [ ] HTTPS
- [ ] Security headers
- [ ] No secrets committed
- [ ] Input validation
- [ ] Dependency audit

---

# 65. AI IDE Master Instructions

Use the following instructions in Cursor / Claude Code / Antigravity / Gemini:

```text
You are a Staff-level Full Stack Engineer and Senior Product Designer.

Build the Osstap corporate website according to this PRD.

Do not blindly implement everything in one huge file.

First create the architecture and design system.

Then implement reusable components.

Then build each page using those components.

Requirements:

1. Use TypeScript strictly.
2. Avoid `any` unless absolutely necessary.
3. Use semantic HTML.
4. Prefer server components.
5. Minimize client-side JavaScript.
6. Do not introduce unnecessary dependencies.
7. Optimize all images.
8. Optimize fonts.
9. Follow accessibility best practices.
10. Follow SEO best practices.
11. Build responsive layouts mobile-first.
12. Respect prefers-reduced-motion.
13. Keep animations subtle.
14. Do not use generic template designs.
15. Do not use excessive gradients.
16. Do not use excessive glassmorphism.
17. Do not use stock photos unless explicitly requested.
18. Do not fabricate company information.
19. Do not fabricate clients, revenue, employees, offices, certifications or awards.
20. Use placeholder content where actual business information is unavailable.
21. Keep content separated from presentation wherever practical.
22. Make services/blog/careers data-driven.
23. Design the architecture so a CMS can be added later.
24. Keep the website static-first.
25. Optimize for Core Web Vitals.
26. Use accessible focus states.
27. Test keyboard navigation.
28. Test mobile layouts.
29. Add automated tests for critical flows.
30. Run lint, typecheck and tests before considering a feature complete.

Before implementing a page:

1. Understand its purpose.
2. Identify the user's primary action.
3. Establish visual hierarchy.
4. Reuse existing components.
5. Ensure responsive behavior.
6. Verify accessibility.
7. Verify SEO.
8. Verify performance.

Never create duplicate components when an existing reusable component can be extended.
```

---

# 66. Recommended AI Development Workflow

Do **not** give the AI the entire project and simply say:

> "Build the website."

Use the following sequence.

### Prompt 1 - Architecture

> Read the Osstap PRD. Do not write application code yet. Analyze the requirements and propose the complete technical architecture, component hierarchy, routes, content model, design tokens and folder structure. Identify ambiguities and assumptions.

Review the output before continuing.

### Prompt 2 - Design System

> Implement the design system and global layout only. Build typography, colors, spacing, buttons, containers, cards, navigation and footer. Do not build page-specific sections yet.

### Prompt 3 - Homepage

> Implement the homepage according to the PRD. Focus on premium visual hierarchy, responsive design, performance and subtle interactions.

### Prompt 4 - About + Services

> Implement About, Services and Service Detail pages using reusable components.

### Prompt 5 - Careers

> Implement Careers and Job Detail pages.

### Prompt 6 - Blog

> Implement Blog listing and MDX-based Blog Detail pages.

### Prompt 7 - Contact

> Implement Contact page and form architecture.

### Prompt 8 - Audit

> Perform a complete SEO, accessibility and performance audit of the project. Fix all issues you identify.

### Prompt 9 - Visual QA

> Perform a visual QA pass across mobile, tablet and desktop. Identify layout inconsistencies, spacing issues, typography issues, animation problems and responsive bugs. Fix them.

---

# 67. Product Positioning Recommendation

Do **not** launch Osstap with dozens of services.

The website should appear specialized even if Osstap is capable of many things.

The homepage can say:

> **We solve complex technology problems.**

Then organize capabilities into approximately:

```text
01 Product Engineering

02 AI & Automation

03 Web & Mobile

04 Cloud & DevOps

05 Technology Consulting

06 Engineering Teams
```

Avoid a long list such as:

```text
Web Development
Mobile Development
PHP
Java
Python
React
SEO
Digital Marketing
Testing
Cloud
Blockchain
...
```

The latter can make the company look like a conventional outsourcing agency.

---

# 68. Recommended Brand Narrative

Structure Osstap's narrative around:

```text
PROBLEM
↓
EXPERTISE
↓
ENGINEERING
↓
OUTCOME
```

Rather than:

```text
WE ARE GREAT
↓
WE HAVE MANY SERVICES
↓
PLEASE CONTACT US
```

Example:

> **Complex technology problems deserve better solutions.**

Then:

> **Osstap brings product thinking, engineering expertise and modern technology together to help businesses build, transform and scale.**

Then:

> **From a new product idea to modernizing an existing platform, we work alongside your team to turn difficult technology challenges into practical outcomes.**

This gives the company a stronger consultancy identity.

---

# 69. Final Recommended Site Map

```text
OSSTAP
│
├── Home
│
├── About
│   ├── Our Story
│   ├── Mission
│   ├── Vision
│   └── Principles
│
├── Services
│   ├── Product Engineering
│   ├── Web Engineering
│   ├── Mobile Engineering
│   ├── AI & Automation
│   ├── Cloud & DevOps
│   ├── Technology Consulting
│   └── Dedicated Engineering Teams
│
├── Careers
│   ├── Open Positions
│   └── Job Detail
│
├── Blog
│   ├── All Articles
│   ├── Engineering
│   ├── AI
│   ├── Cloud
│   ├── Mobile
│   └── Product
│
├── Contact
│
├── Privacy Policy
│
└── Terms
```

---

# 70. Next Artifact to Create

Before asking the AI IDE to code this, create an additional artifact:

**Osstap Design System + Complete Homepage Wireframe/Content Specification**

It should define:

```text
Exact navbar
Exact hero layout
Hero headline
Hero subtitle
CTA labels
Desktop grid
Mobile grid
Card dimensions
Typography sizes
Colors
Border radius
Button styles
Animation behavior
Section spacing
Homepage copy
Service card copy
Footer structure
```

This will turn the PRD from a technical/product specification into a much more precise implementation blueprint, which is where AI coding agents generally perform better.

---

## Recommended initial homepage narrative

### Hero

**We build technology that moves businesses forward.**

### Supporting text

**Osstap is a technology consultancy helping businesses design, build and scale high-quality digital products through engineering, modern technology and strategic expertise.**

### Primary CTA

**Let's Talk →**

### Secondary CTA

**Explore Services →**

### Final CTA

**Have a technology challenge?  
Let's solve it together.**

---

# 71. Final Engineering Principles

The Osstap website should follow these principles throughout development:

1. **Performance over unnecessary visual complexity**
2. **Accessibility by default**
3. **SEO by architecture, not as an afterthought**
4. **Reusable components over duplicated markup**
5. **Static-first architecture**
6. **Minimal client-side JavaScript**
7. **Content separated from presentation**
8. **CMS-ready content model**
9. **Mobile-first responsive design**
10. **Subtle, purposeful animation**
11. **No fabricated business claims**
12. **Premium visual design without excessive effects**
13. **Strong typography and whitespace**
14. **Clear conversion paths**
15. **Simple infrastructure for V1**
16. **Easy evolution toward a full digital platform**

---

# End of PRD
