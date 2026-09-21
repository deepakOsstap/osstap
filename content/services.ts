export interface ServiceCapability {
  title: string;
  description: string;
}

export interface ServiceApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  heroDescription: string;
  iconName: string;
  problem: {
    title: string;
    description: string;
    points: string[];
  };
  capabilities: ServiceCapability[];
  technologies: {
    category: string;
    items: string[];
  }[];
  approach: ServiceApproachStep[];
  outcomes: string[];
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "product-engineering",
    slug: "product-engineering",
    number: "01",
    title: "Product Engineering",
    shortDescription:
      "Design, architect, and build scalable digital products from initial proof-of-concept to global production.",
    heroDescription:
      "We partner with ambitious startups and enterprises to transform complex product concepts into resilient, high-performance software systems that scale effortlessly.",
    iconName: "Boxes",
    problem: {
      title: "The Challenge of Scaling Beyond an MVP",
      description:
        "Many companies struggle when early prototypes need to become robust enterprise products. Fragile architectures, slow feature velocity, and ballooning technical debt quickly stall growth.",
      points: [
        "Inability to handle surges in concurrent traffic and data volume",
        "Tightly coupled codebases that slow down feature releases",
        "Lack of standardized automated testing and CI/CD pipelines",
        "Difficulty translating business requirements into resilient technical blueprints",
      ],
    },
    capabilities: [
      {
        title: "Full-Lifecycle Product Development",
        description:
          "End-to-end engineering from discovery, system design, and database schema modeling to production deployment and telemetry.",
      },
      {
        title: "MVP to Enterprise Scaling",
        description:
          "Refactor, modularize, and re-platform early products into cloud-native architectures capable of serving millions of active users.",
      },
      {
        title: "Robust API & Microservices Design",
        description:
          "High-throughput RESTful, GraphQL, and gRPC service contracts built with strict typing, rate limiting, and observability.",
      },
      {
        title: "Quality Assurance & Test Automation",
        description:
          "Comprehensive unit, integration, and automated end-to-end test suites integrated directly into deployment gates.",
      },
    ],
    technologies: [
      {
        category: "Languages",
        items: ["TypeScript", "Go", "Python", "Rust", "Java"],
      },
      {
        category: "Frameworks & Runtimes",
        items: ["Node.js", "Next.js", "FastAPI", "Spring Boot", "Echo"],
      },
      {
        category: "Databases & Storage",
        items: ["PostgreSQL", "Redis", "MongoDB", "ClickHouse"],
      },
    ],
    approach: [
      {
        step: "01",
        title: "Technical Discovery & Specification",
        description:
          "Deep dive into product requirements, domain modeling, expected workloads, and risk factors.",
      },
      {
        step: "02",
        title: "Architecture & System Prototyping",
        description:
          "Draft system design documents, define API contracts, and establish modular foundations.",
      },
      {
        step: "03",
        title: "Iterative Engineering Sprints",
        description:
          "Bi-weekly delivery cadence with automated test coverage, security scans, and continuous integration.",
      },
      {
        step: "04",
        title: "Production Hardening & Scale",
        description:
          "Load testing, latency optimization, observability setup, and seamless handover.",
      },
    ],
    outcomes: [
      "99.99% system availability under peak enterprise workloads",
      "Up to 4x faster release velocity through modular codebases and automated pipelines",
      "Sub-50ms API response latencies through intelligent caching and query optimization",
      "Clean, documented codebases that in-house teams can easily maintain and extend",
    ],
    deliverables: [
      "Production-ready codebase with test suite",
      "System architecture documentation & data models",
      "Automated CI/CD pipelines with security checks",
      "Infrastructure-as-code templates and deployment guides",
    ],
  },
  {
    id: "web-engineering",
    slug: "web-engineering",
    number: "02",
    title: "Web Engineering",
    shortDescription:
      "Modern, ultra-fast web applications built with Next.js, React, and server-first architectures.",
    heroDescription:
      "We engineer enterprise web applications that pair instantaneous load times with complex workflows, pristine UX, and uncompromising Core Web Vitals.",
    iconName: "Globe",
    problem: {
      title: "Slow, Bloated, and Fragile Web Experiences",
      description:
        "Modern web users demand near-instantaneous page loads. Heavy JavaScript bundles, uncontrolled client re-renders, and poor accessibility degrade conversions and search rankings.",
      points: [
        "Failing Core Web Vitals (poor LCP, high CLS, sluggish INP)",
        "Overly complex client-side state resulting in unpredictable UI bugs",
        "Poor SEO performance due to non-optimized client rendering",
        "Difficult accessibility compliance across varied devices and assistive technologies",
      ],
    },
    capabilities: [
      {
        title: "Server Components & Edge Rendering",
        description:
          "Harness React Server Components and edge computing to minimize client JavaScript payload and achieve instant TTFB.",
      },
      {
        title: "Complex Web Application Portals",
        description:
          "Rich interactive dashboards, data visualizations, and workflows engineered for reliability and high responsiveness.",
      },
      {
        title: "Progressive Web Apps (PWA)",
        description:
          "Offline-first experiences with service workers, background sync, and native-feeling desktop and mobile web capabilities.",
      },
      {
        title: "Core Web Vitals Optimization",
        description:
          "Systematic auditing and refactoring to achieve 95+ Lighthouse scores across Performance, Accessibility, and SEO.",
      },
    ],
    technologies: [
      {
        category: "Frontend Stack",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      },
      {
        category: "State & Data Layer",
        items: ["TanStack Query", "Zustand", "tRPC", "GraphQL"],
      },
      {
        category: "Testing & Tooling",
        items: ["Playwright", "Vitest", "Storybook", "Turborepo"],
      },
    ],
    approach: [
      {
        step: "01",
        title: "Design System & Performance Budget",
        description:
          "Establish strict bundle size thresholds, token architectures, and accessibility criteria.",
      },
      {
        step: "02",
        title: "Server-First Component Architecture",
        description:
          "Maximize server rendering, isolating client interactivity to leaf components.",
      },
      {
        step: "03",
        title: "Interactive Flow Implementation",
        description:
          "Build complex UI workflows with optimistic updates and resilient error boundaries.",
      },
      {
        step: "04",
        title: "Vitals & Accessibility Verification",
        description:
          "Automated Lighthouse audits and screen reader verification across mobile and desktop.",
      },
    ],
    outcomes: [
      "Sub-second Largest Contentful Paint (LCP < 1.2s)",
      "95+ Lighthouse score across Performance, Accessibility, and SEO",
      "Significant conversion uplift and lower bounce rates",
      "Seamless cross-browser and cross-device consistency",
    ],
    deliverables: [
      "Production web application codebase",
      "Modular design system component library",
      "Playwright end-to-end test suite",
      "Comprehensive performance audit report",
    ],
  },
  {
    id: "mobile-engineering",
    slug: "mobile-engineering",
    number: "03",
    title: "Mobile Engineering",
    shortDescription:
      "Native iOS and Android mobile applications crafted with Swift, Kotlin, and modern cross-platform frameworks.",
    heroDescription:
      "We design and build top-tier mobile experiences that combine platform-native craftsmanship, buttery 120Hz animations, and robust offline sync.",
    iconName: "Smartphone",
    problem: {
      title: "Bridging Native Performance and Cross-Platform Speed",
      description:
        "Mobile users have zero tolerance for app crashes, laggy scrolling, or battery drains. Many teams compromise between code reuse and true native feel.",
      points: [
        "Sluggish UI rendering and frame drops during complex list scrolling",
        "Fragile offline synchronization that causes data conflicts and loss",
        "Cumbersome App Store and Play Store release pipelines with frequent rejections",
        "Difficulty supporting modern platform features like Widgets, dynamic islands, and background tasks",
      ],
    },
    capabilities: [
      {
        title: "Native iOS (Swift & SwiftUI)",
        description:
          "High-performance native iOS applications utilizing modern Concurrency, SwiftData, Combine, and Apple HIG guidelines.",
      },
      {
        title: "Native Android (Kotlin & Jetpack Compose)",
        description:
          "Clean Architecture Android apps using Jetpack Compose, Coroutines, Flow, and Material You design systems.",
      },
      {
        title: "Cross-Platform (React Native / Flutter)",
        description:
          "Shared codebases with native bridges for projects demanding rapid simultaneous release across both ecosystems.",
      },
      {
        title: "Offline-First Sync & Storage",
        description:
          "Robust local database engines with conflict resolution, background sync queues, and zero data loss.",
      },
    ],
    technologies: [
      {
        category: "iOS",
        items: ["Swift", "SwiftUI", "Combine", "CoreData / SwiftData", "XCTest"],
      },
      {
        category: "Android",
        items: ["Kotlin", "Jetpack Compose", "Coroutines", "Room", "Hilt"],
      },
      {
        category: "Cross-Platform",
        items: ["React Native", "Flutter", "Capacitor"],
      },
    ],
    approach: [
      {
        step: "01",
        title: "Mobile Architecture Definition",
        description:
          "Establish MVVM / Clean Architecture boundaries, offline caching policies, and native bridges.",
      },
      {
        step: "02",
        title: "Design System & Gesture Engineering",
        description:
          "Implement high-fidelity platform components, custom animations, and haptic feedback.",
      },
      {
        step: "03",
        title: "Network & Background Sync Optimization",
        description:
          "Build resilient networking with exponential backoff, request batching, and cache invalidation.",
      },
      {
        step: "04",
        title: "Store Submission & Telemetry",
        description:
          "Automate Fastlane builds, TestFlight distribution, crash reporting, and App Store compliance.",
      },
    ],
    outcomes: [
      "Fluid 60/120 FPS UI performance with zero stutter",
      "99.9% crash-free user sessions in production telemetry",
      "Flawless offline capabilities for field and low-connectivity environments",
      "Streamlined CI/CD app store release cycles within minutes",
    ],
    deliverables: [
      "Native iOS and/or Android application binaries and source code",
      "Fastlane automated distribution scripts",
      "Mobile architecture specification & offline sync manual",
      "App Store and Google Play publication support",
    ],
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    number: "04",
    title: "AI & Automation",
    shortDescription:
      "Integrate intelligent LLM agents, workflow automation, and custom ML pipelines into core business operations.",
    heroDescription:
      "We help forward-thinking organizations move beyond AI hype to deploy production-grade LLM architectures, intelligent agent workflows, and automated reasoning pipelines.",
    iconName: "Cpu",
    problem: {
      title: "Moving From Toy Demos to Production Reliability",
      description:
        "While simple LLM prompts are easy to prototype, taking AI into enterprise production introduces severe challenges around hallucinations, latency, cost unpredictability, and data security.",
      points: [
        "Unreliable outputs and hallucination in critical workflows",
        "High inference latency and spiraling cloud API expenses",
        "Security concerns regarding confidential customer data leakage",
        "Brittle prompt chains that break on edge cases",
      ],
    },
    capabilities: [
      {
        title: "Autonomous AI Agent Workflows",
        description:
          "Multi-agent architectures with tool calling, memory stores, and self-correcting validation loops.",
      },
      {
        title: "Enterprise RAG & Knowledge Retrieval",
        description:
          "Hybrid vector and keyword search pipelines utilizing semantic chunking, re-ranking, and citation verification.",
      },
      {
        title: "Intelligent Workflow Automation",
        description:
          "Automate manual back-office data processing, document extraction, customer routing, and verification.",
      },
      {
        title: "LLM Guardrails & Observability",
        description:
          "Input sanitization, output validation, cost budgeting, token optimization, and end-to-end tracing.",
      },
    ],
    technologies: [
      {
        category: "LLM Frameworks",
        items: ["LangChain", "LlamaIndex", "Instructor", "DSPy"],
      },
      {
        category: "Vector & Search",
        items: ["Pinecone", "Qdrant", "pgvector", "OpenSearch"],
      },
      {
        category: "Models & Providers",
        items: ["OpenAI", "Anthropic Claude", "Gemini", "Llama 3 (Local/Ollama)"],
      },
    ],
    approach: [
      {
        step: "01",
        title: "Use Case Feasibility & ROI Audit",
        description:
          "Identify high-impact operational bottlenecks where AI delivers genuine 5x-10x productivity gains.",
      },
      {
        step: "02",
        title: "Data Pipeline & Retrieval Engineering",
        description:
          "Index proprietary company context with semantic chunking, embeddings, and metadata tagging.",
      },
      {
        step: "03",
        title: "Agent Architecture & Evaluation Benchmarks",
        description:
          "Develop prompt chains with automated evaluation datasets (evals) to rigorously measure accuracy.",
      },
      {
        step: "04",
        title: "Deployment, Guardrails & Tracing",
        description:
          "Integrate security guardrails, rate limiting, and observability for token cost and latency monitoring.",
      },
    ],
    outcomes: [
      "Up to 80% reduction in manual document and ticket processing time",
      "Sub-2s response latencies on complex RAG retrieval queries",
      "Rigorous guardrails preventing hallucinations and sensitive data leakage",
      "Measurable return on AI investment with transparent unit economics",
    ],
    deliverables: [
      "Custom AI agent service or embedded application code",
      "Vector search indexing pipeline and knowledge base setup",
      "Automated evaluation benchmark test suite",
      "Token budget, latency, and observability dashboard",
    ],
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    number: "05",
    title: "Cloud & DevOps",
    shortDescription:
      "Secure, resilient cloud infrastructure, Kubernetes orchestration, CI/CD automation, and cloud cost optimization.",
    heroDescription:
      "We architect cloud infrastructure that guarantees high availability, automated resilience, strict compliance, and disciplined cloud unit economics.",
    iconName: "Cloud",
    problem: {
      title: "Infrastructure Fragility and Uncontrolled Cloud Spend",
      description:
        "Manual server configurations, fragmented deployment scripts, and neglected cloud architectures lead to frequent outages, security vulnerabilities, and bloated monthly bills.",
      points: [
        "Downtime during deployments with manual rollback procedures",
        "Runaway AWS/Azure cloud bills without clear cost attribution",
        "Security blind spots and unpatched container vulnerabilities",
        "Slow engineer onboarding due to lack of reproducible environments",
      ],
    },
    capabilities: [
      {
        title: "Infrastructure as Code (IaC)",
        description:
          "Declarative, reproducible cloud provisioning using Terraform, OpenTofu, and AWS CDK with automated drift detection.",
      },
      {
        title: "Container & Kubernetes Orchestration",
        description:
          "Production-ready EKS, GKE, or ECS clusters with autoscaling, zero-downtime rolling updates, and service mesh.",
      },
      {
        title: "Zero-Downtime CI/CD Pipelines",
        description:
          "Automated build, test, scan, and deploy pipelines using GitHub Actions, GitLab CI, or ArgoCD.",
      },
      {
        title: "FinOps & Cloud Cost Optimization",
        description:
          "Architectural audits to eliminate idle resources, rightsizing compute, and optimize storage tiers.",
      },
    ],
    technologies: [
      {
        category: "Cloud Providers",
        items: ["Amazon Web Services (AWS)", "Google Cloud (GCP)", "Microsoft Azure", "Cloudflare"],
      },
      {
        category: "IaC & Orchestration",
        items: ["Terraform", "Kubernetes", "Docker", "Helm", "ArgoCD"],
      },
      {
        category: "Observability",
        items: ["Datadog", "Prometheus", "Grafana", "OpenTelemetry"],
      },
    ],
    approach: [
      {
        step: "01",
        title: "Infrastructure & Security Audit",
        description:
          "Review existing cloud configurations, security postures, bottleneck points, and cost drivers.",
      },
      {
        step: "02",
        title: "IaC Blueprints & Network Design",
        description:
          "Draft modular Terraform templates with secure VPC topology, IAM least privilege, and encryption.",
      },
      {
        step: "03",
        title: "Pipeline Automation & Containerization",
        description:
          "Build automated CI/CD workflows with container image vulnerability scanning and automated tests.",
      },
      {
        step: "04",
        title: "Telemetry & Chaos Testing",
        description:
          "Configure SLO dashboards, alerting matrices, and simulate failovers to ensure self-healing resilience.",
      },
    ],
    outcomes: [
      "99.99% uptime with automated multi-zone failover",
      "Average 30-50% reduction in monthly cloud infrastructure costs",
      "Deployment cycle reduced from hours to under 5 minutes",
      "SOC 2 and ISO 27001 infrastructure readiness",
    ],
    deliverables: [
      "Modular Terraform / IaC repository with documentation",
      "Hardened Kubernetes manifests or ECS task definitions",
      "Automated GitHub Actions CI/CD workflows",
      "Cost optimization audit & centralized observability dashboard",
    ],
  },
  {
    id: "technology-consulting",
    slug: "technology-consulting",
    number: "06",
    title: "Technology Consulting",
    shortDescription:
      "Strategic architecture reviews, legacy modernization, digital transformation, and technical due diligence.",
    heroDescription:
      "We advise executive leadership, CTOs, and founders on high-stakes technology decisions, modernizing monolithic architectures, and aligning tech roadmaps with commercial goals.",
    iconName: "Compass",
    problem: {
      title: "Technical Uncertainty at Pivotal Business Milestones",
      description:
        "Leaders frequently face high-risk decisions around technology stack selection, legacy rewrites, or vendor evaluations where wrong moves cost millions and delay strategic goals.",
      points: [
        "Aging monolithic systems that no longer support business innovation",
        "Unclear ROI on planned architectural overhauls and migrations",
        "Technical due diligence requirements for mergers, acquisitions, or funding rounds",
        "Disconnect between engineering velocity and executive business targets",
      ],
    },
    capabilities: [
      {
        title: "Architecture Reviews & Modernization",
        description:
          "In-depth analysis of existing system bottlenecks, scalability limits, and structured migration roadmaps.",
      },
      {
        title: "Technical Due Diligence",
        description:
          "Comprehensive audits of code quality, architecture scalability, security risks, and team velocity for investors and acquirers.",
      },
      {
        title: "Fractional CTO & Strategic Advisory",
        description:
          "Senior technical leadership to help define product roadmaps, engineering culture, hiring criteria, and tech stacks.",
      },
      {
        title: "Performance & Security Audits",
        description:
          "Deep-dive profiling of database queries, API bottlenecks, and security posture with actionable remediation steps.",
      },
    ],
    technologies: [
      {
        category: "Methodologies",
        items: ["Domain-Driven Design (DDD)", "Clean Architecture", "Event-Driven Architecture", "Strangler Fig Pattern"],
      },
      {
        category: "Evaluation Frameworks",
        items: ["DORA Metrics", "C4 Model", "STRIDE Threat Modeling", "Well-Architected Framework"],
      },
    ],
    approach: [
      {
        step: "01",
        title: "Deep-Dive Discovery & Stakeholder Interviews",
        description:
          "Examine business goals, pain points, architectural diagrams, code repositories, and telemetry.",
      },
      {
        step: "02",
        title: "Technical Analysis & Benchmarking",
        description:
          "Perform static code analysis, database profiling, infrastructure cost audits, and process evaluation.",
      },
      {
        step: "03",
        title: "Strategic Roadmap Formulation",
        description:
          "Create phased recommendations prioritized by commercial impact, feasibility, and risk mitigation.",
      },
      {
        step: "04",
        title: "Executive Presentation & Handover",
        description:
          "Deliver actionable architecture blueprints and guide internal engineering teams through initial execution.",
      },
    ],
    outcomes: [
      "Clarity on technical debt prioritization and modernization ROI",
      "Risk mitigation prior to major capital investments or acquisitions",
      "Actionable roadmap preventing costly rewrites and technology mismatches",
      "Direct alignment between engineering productivity and business growth",
    ],
    deliverables: [
      "Comprehensive Architecture Assessment Report",
      "Phased Modernization & Migration Roadmap",
      "Technical Due Diligence findings and risk matrix",
      "Executive summary presentation for board and investors",
    ],
  },
  {
    id: "dedicated-engineering-teams",
    slug: "dedicated-engineering-teams",
    number: "07",
    title: "Dedicated Engineering Teams",
    shortDescription:
      "Senior, autonomous product engineering squads integrated seamlessly into your organizational rhythm.",
    heroDescription:
      "We provide seasoned engineering pods—comprising lead architects, full-stack engineers, and QA specialists—who integrate directly into your workflow to ship high-impact features fast.",
    iconName: "Users",
    problem: {
      title: "The Friction of Scaling In-House Engineering Quickly",
      description:
        "Hiring top-tier senior engineers takes months, and conventional staff augmentation vendors often provide low-quality, disengaged developers requiring excessive management oversight.",
      points: [
        "Month-long hiring delays that stall critical roadmap milestones",
        "High management overhead dealing with low-context outsourced contractors",
        "Code quality compromises that create long-term architectural debt",
        "Cultural and timezone friction that disrupts agile sprint cadence",
      ],
    },
    capabilities: [
      {
        title: "Autonomous Product Squads",
        description:
          "Self-organizing pods with tech leads, senior engineers, and QA automation specialists ready to execute from day one.",
      },
      {
        title: "Strategic Staff Augmentation",
        description:
          "Hand-picked senior specialists in iOS, Cloud, Backend, or AI who embed directly into your existing team rituals.",
      },
      {
        title: "Continuous Delivery Ownership",
        description:
          "Engineers who take complete ownership of ticket breakdown, code reviews, testing, deployment, and on-call monitoring.",
      },
      {
        title: "Seamless Team Integration",
        description:
          "Full alignment with your Slack, Jira/Linear, GitHub, and daily standup rituals with transparent overlap hours.",
      },
    ],
    technologies: [
      {
        category: "Disciplines",
        items: ["Full-Stack Engineering", "Mobile Specialists (iOS/Android)", "Cloud & DevOps Architects", "AI/ML Engineers", "QA Automation"],
      },
      {
        category: "Collaboration Stack",
        items: ["GitHub / GitLab", "Linear / Jira", "Slack", "Figma", "Notion"],
      },
    ],
    approach: [
      {
        step: "01",
        title: "Engineering Needs Assessment",
        description:
          "Analyze skill gaps, codebase maturity, sprint cadence, and immediate roadmap priorities.",
      },
      {
        step: "02",
        title: "Squad Selection & Technical Matching",
        description:
          "Assemble an experienced team whose technical background precisely aligns with your domain.",
      },
      {
        step: "03",
        title: "Accelerated Onboarding Sprint",
        description:
          "Set up local environments, review architecture, and deliver initial pull requests within the first week.",
      },
      {
        step: "04",
        title: "Continuous Sprint Execution & Reporting",
        description:
          "Deliver weekly velocity metrics, transparent progress updates, and consistent code quality.",
      },
    ],
    outcomes: [
      "Zero recruitment lead time: onboard senior talent in under 2 weeks",
      "Immediate acceleration of feature roadmap velocity",
      "High-rigor code quality matching or exceeding in-house standards",
      "Flexible capacity scaling aligned with product release milestones",
    ],
    deliverables: [
      "Dedicated senior engineering capacity",
      "Full transparency via GitHub commits, PRs, and sprint demos",
      "Bi-weekly sprint reports and velocity tracking",
      "Complete intellectual property ownership and documentation",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
