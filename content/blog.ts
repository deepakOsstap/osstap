export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  category: "Engineering" | "AI" | "Cloud" | "Mobile" | "Architecture" | "Strategy";
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  readingTime: string;
  coverImage: string;
  featured?: boolean;
  content: string[]; // Structured paragraphs/subsections for clean rendering
}

export const blogCategories = [
  "All",
  "Engineering",
  "AI",
  "Cloud",
  "Mobile",
  "Architecture",
  "Strategy",
] as const;

export const blogPostsData: BlogPost[] = [
  {
    id: "architecting-scalable-digital-products",
    slug: "architecting-scalable-digital-products",
    title: "Architecting Scalable Digital Products for Enterprise Growth",
    subtitle:
      "A systematic guide to decoupling monolithic systems, designing idempotent APIs, and establishing resilient data pipelines.",
    excerpt:
      "When ambitious startups transition to enterprise scale, initial architectural shortcuts quickly become insurmountable roadblocks. Here is how modern engineering leaders design for long-term scalability from day one.",
    category: "Architecture",
    author: {
      name: "Osstap Engineering",
      role: "System Architecture Group",
    },
    publishedAt: "2026-09-15",
    readingTime: "6 min read",
    coverImage: "/images/blog/scalable-architecture.webp",
    featured: true,
    content: [
      "The defining dilemma of modern software product development is balancing initial shipping speed with structural longevity. Early in a venture's lifecycle, tight couplings and monolithic databases are entirely rational: they eliminate distributed systems complexity, simplify developer onboarding, and maximize iteration speed.",
      "However, as user concurrency crosses the tipping point and business operations expand, the cracks begin to multiply. Database connection pools become exhausted, a single slow query in an ancillary reporting feature freezes customer-facing checkout transactions, and independent teams constantly collide during deployments.",
      "The remedy is not an immediate, reckless rewrite to microservices. Instead, seasoned technology partners employ modular monolith architectures with strictly enforced domain boundaries, asynchronous event queuing, and isolated read/write paths.",
      "Key Architectural Principles for Scaling:",
      "1. Enforce Domain Isolation Early: Structure your codebase into distinct domain modules with private schemas and clean interfaces, even while residing within a single repository.",
      "2. Embrace Idempotency and At-Least-Once Delivery: In any network-dependent application, assuming network perfection is a fatal assumption. Design state-changing APIs with idempotency keys and transactional outbox patterns.",
      "3. Decouple Reads from Writes: As data volume grows, transactional databases suffer under analytical workloads. Implement read replicas and specialized search indices (e.g. Elasticsearch or ClickHouse) for reporting and heavy search queries.",
      "4. Automate Observability and Golden Signals: Do not wait for user complaints to diagnose regressions. Instrument latency, error rate, request volume, and resource saturation across every critical service boundary.",
      "By approaching software architecture as an evolving asset rather than a static deliverable, engineering organizations maintain release velocity without compromising system stability under load.",
    ],
  },
  {
    id: "autonomous-ai-agents-production",
    slug: "autonomous-ai-agents-production",
    title: "Deploying Autonomous AI Agents in Production: Patterns and Pitfalls",
    subtitle:
      "Moving beyond prompt engineering to multi-agent architectures, deterministic tool-calling, and evaluation benchmarks.",
    excerpt:
      "While building demo AI chatbots takes minutes, operating production-grade agentic systems requires deterministic validation, memory management, and rigorous cost observability.",
    category: "AI",
    author: {
      name: "Osstap AI Research",
      role: "Applied Intelligence Lab",
    },
    publishedAt: "2026-09-10",
    readingTime: "7 min read",
    coverImage: "/images/blog/ai-agents.webp",
    featured: false,
    content: [
      "The rapid rise of Large Language Models has sparked an industry-wide rush to automate complex knowledge tasks. Yet, enterprise technology executives frequently find that early prototypes fail catastrophically when introduced to real-world edge cases, unstructured inputs, and high-concurrency demands.",
      "The fundamental challenge lies in reconciling the probabilistic, nondeterministic nature of LLMs with the absolute deterministic reliability expected from enterprise software systems.",
      "Core Patterns for Reliable AI Systems:",
      "1. Typed Schema Contracts: Never accept raw, unstructured text outputs from an LLM in programmatic workflows. Use structured schema enforcement (e.g. Instructor, Pydantic, DSPy) to force models to output validated JSON with strict schema validation.",
      "2. Multi-Agent Specialization: Monolithic prompts attempting to solve multi-step problems suffer from high error rates. Break workflows into specialized agents: a router agent, a research/retrieval agent, an execution agent, and a critical validation/evaluator agent.",
      "3. Hybrid Retrieval-Augmented Generation (RAG): Simple dense vector retrieval is insufficient for enterprise data with precise identifiers, serial numbers, or code references. Combine dense vector embeddings with sparse BM25 keyword search, followed by a cross-encoder re-ranking model.",
      "4. Continuous Evaluation (Evals): You cannot optimize what you do not systematically measure. Implement deterministic eval test suites that measure factual consistency, tool execution correctness, and token budget consumption on every pull request.",
      "Organizations that treat prompt engineering as code—applying version control, automated testing, and telemetry—are the ones successfully turning AI into a sustainable competitive advantage.",
    ],
  },
  {
    id: "modern-cloud-infrastructure-resilience",
    slug: "modern-cloud-infrastructure-resilience",
    title: "Modern Cloud Infrastructure: Moving from Monolith to Resilient Microservices",
    subtitle:
      "How to execute zero-downtime infrastructure migrations using Infrastructure-as-Code and Kubernetes GitOps.",
    excerpt:
      "Monolith modernization does not require a risky 'big bang' migration. Discover the Strangler Fig pattern, declarative Terraform topologies, and GitOps delivery frameworks.",
    category: "Cloud",
    author: {
      name: "Osstap DevOps",
      role: "Cloud Infrastructure Team",
    },
    publishedAt: "2026-09-02",
    readingTime: "5 min read",
    coverImage: "/images/blog/cloud-resilience.webp",
    featured: false,
    content: [
      "Many enterprises are held back by brittle legacy servers: manually configured EC2 instances, fragmented shell scripts, and terrifying deployment windows that require scheduled weekend downtime.",
      "Modernizing cloud infrastructure requires adopting declarative paradigms where every resource—from VPC routing tables to IAM permission policies—is defined as code, version-controlled, and automatically audited.",
      "The Strangler Fig Migration Strategy:",
      "Rather than pausing feature development for an 18-month rewrite, progressive teams use the Strangler Fig pattern. A reverse proxy or API gateway is placed in front of the existing system. New capabilities are implemented as cloud-native microservices on Kubernetes or managed container platforms, while traffic is incrementally shifted away from the legacy core.",
      "Key Pillars of Resilient Cloud Delivery:",
      "1. Declarative Infrastructure as Code: Replace manual cloud console tweaks with modular Terraform or OpenTofu repositories. Any state drift is automatically detected and remediated.",
      "2. GitOps with ArgoCD: Eliminate direct cluster SSH access. Changes to production clusters are executed purely via Git pull requests, providing an instant audit trail and one-click rollbacks.",
      "3. Automated Cost Discipline (FinOps): Run continuous anomaly detection on cloud resources. Idle compute, over-provisioned memory buffers, and unattached EBS volumes must be programmatically pruned.",
      "The result is infrastructure that delivers 99.99% reliability while reducing operational overhead and accelerating software delivery cycles.",
    ],
  },
  {
    id: "building-high-performance-ios-apps",
    slug: "building-high-performance-ios-apps",
    title: "Building High-Performance iOS Applications with Modern Swift & Declarative UI",
    subtitle:
      "Achieving fluid 120 FPS scrolling, flawless offline synchronization, and predictable state management.",
    excerpt:
      "Mobile users expect instant responsiveness. Learn how to leverage modern Swift Concurrency, avoid SwiftUI view tree redraw pitfalls, and build resilient offline sync engines.",
    category: "Mobile",
    author: {
      name: "Osstap Mobile",
      role: "Apple Platform Architects",
    },
    publishedAt: "2026-08-25",
    readingTime: "6 min read",
    coverImage: "/images/blog/ios-performance.webp",
    featured: false,
    content: [
      "Crafting an iOS application that feels truly world-class requires obsessive attention to performance details: maintaining a rock-solid 120 FPS frame rate on ProMotion displays, eliminating memory churn, and delivering an experience that works seamlessly whether offline on a subway or on high-speed 5G.",
      "While SwiftUI has radically accelerated UI development velocity, naive state modeling can cause entire view hierarchies to repeatedly re-evaluate on minor state changes, causing noticeable micro-stutters during scrolling.",
      "Modern Swift Engineering Best Practices:",
      "1. Strict Concurrency with Swift Actors: Leverage Swift's compile-time concurrency checking to prevent data races. Keep network and persistence operations strictly off the MainActor, dispatching only UI updates back to the main thread.",
      "2. Granular View Invalidation: Break large, monolithic SwiftUI views into smaller, focused subviews. Use `@Observable` (iOS 17+) to ensure that views only subscribe and re-render when the specific properties they access undergo mutation.",
      "3. Resilient Offline-First Data Architecture: Treat local storage as the primary source of truth. Mutations should be applied optimistically to the local database, added to a persistent background dispatch queue, and synced to the cloud API with exponential backoff and conflict resolution.",
      "4. Memory Profiling in Instruments: Regular profiling with the Allocations and Time Profiler instruments in Xcode is essential to catch retain cycles, heavy image decoding overhead, and unnecessary view body evaluations.",
      "When native craftsmanship is paired with disciplined architectural rigor, mobile applications elevate brand perception and cultivate intense user loyalty.",
    ],
  },
  {
    id: "technical-debt-vs-velocity",
    slug: "technical-debt-vs-velocity",
    title: "Technical Debt vs. Feature Velocity: Engineering Trade-offs That Matter",
    subtitle:
      "How high-growth technology companies balance commercial urgency with architectural sustainability.",
    excerpt:
      "Not all technical debt is bad debt. Learn the taxonomy of prudent vs. reckless tech debt and how CTOs negotiate refactoring sprints with executive stakeholders.",
    category: "Strategy",
    author: {
      name: "Osstap Strategy",
      role: "Technology Advisory",
    },
    publishedAt: "2026-08-18",
    readingTime: "5 min read",
    coverImage: "/images/blog/tech-debt-strategy.webp",
    featured: false,
    content: [
      "One of the most persistent sources of tension inside technology organizations is the ongoing friction between product management demanding faster feature delivery and engineering teams pleading for time to refactor mounting technical debt.",
      "The mistake most teams make is treating all technical debt as a moral failing. In reality, like financial debt, technical debt can be taken on prudently to capture a time-sensitive market opportunity—provided the interest payments are understood and paid down methodically.",
      "Categorizing Technical Debt:",
      "1. Prudent & Deliberate Debt: 'We must ship this MVP this month to validate customer demand. We will hardcode the payment flow and refactor next quarter once product-market fit is established.' This is healthy commercial pragmatism.",
      "2. Reckless & Inadvertent Debt: 'We didn't write automated tests or document our architecture because we were sloppy.' This is compounding toxicity that paralyzes future velocity.",
      "How to Negotiate Refactoring with Leadership:",
      "Engineering leaders must translate technical debt into commercial impact. Never ask for an abstract 'two-month cleanup sprint'. Instead, quantify the cost: 'This legacy module currently causes 14 hours of developer downtime per sprint and is directly responsible for 40% of customer support escalations.'",
      "Dedicate a constant 15-20% of every sprint's capacity to continuous architectural hygiene and automated testing. By maintaining this steady investment, engineering organizations sustain high feature velocity year after year without grinding to a sudden, painful halt.",
    ],
  },
];

export function getArticleBySlug(slug: string): BlogPost | undefined {
  return blogPostsData.find((post) => post.slug === slug);
}

export function getAllArticleSlugs(): string[] {
  return blogPostsData.map((post) => post.slug);
}

export function getRelatedArticles(currentSlug: string, category: string): BlogPost[] {
  return blogPostsData
    .filter((post) => post.slug !== currentSlug && (post.category === category || true))
    .slice(0, 3);
}
