export interface CulturePillar {
  number: string;
  title: string;
  description: string;
}

export interface BenefitItem {
  iconName: string;
  title: string;
  description: string;
}

export interface JobPosition {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time / Contract
  experienceLevel: string;
  shortSummary: string;
  aboutRole: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  whatWeOffer: string[];
}

export const culturePillars: CulturePillar[] = [
  {
    number: "01",
    title: "Learn Constantly",
    description:
      "Technology shifts relentlessly. We cultivate curiosity, provide learning stipends, and celebrate engineering depth over superficial solutions.",
  },
  {
    number: "02",
    title: "Own Your Work",
    description:
      "Engineers at Osstap have complete ownership from architectural design to production monitoring. No micro-management, only outcome accountability.",
  },
  {
    number: "03",
    title: "Build with Quality",
    description:
      "We believe that clean architecture, test automation, and readable code save time in the long run. We take pride in craftsmanship that stands the test of scale.",
  },
  {
    number: "04",
    title: "Think Like an Entrepreneur",
    description:
      "We don't write code in a vacuum. Every technical decision is weighed against real business impact, user experience, and long-term maintainability.",
  },
  {
    number: "05",
    title: "Help Each Other Grow",
    description:
      "Egoless collaboration. We conduct empathetic code reviews, share post-mortems transparently, and mentor teammates across all seniority levels.",
  },
];

export const benefitsData: BenefitItem[] = [
  {
    iconName: "Globe",
    title: "Remote-First Flexibility",
    description:
      "Work from where you are most productive. We operate on asynchronous, high-trust communication across time zones.",
  },
  {
    iconName: "Laptop",
    title: "Top-Tier Hardware",
    description:
      "Every engineer receives high-spec Apple Silicon hardware, 4K displays, and all ergonomic peripherals required to do exceptional work.",
  },
  {
    iconName: "BookOpen",
    title: "Learning & Conference Budget",
    description:
      "Generous annual stipends for technical books, online courses, certification exams, and global engineering conferences.",
  },
  {
    iconName: "HeartPulse",
    title: "Comprehensive Healthcare",
    description:
      "Premium health, dental, and wellness coverage for you and your dependents, plus mental health support programs.",
  },
  {
    iconName: "Clock",
    title: "Flexible Working Hours",
    description:
      "We measure outputs, not hours spent in a seat. Manage your daily schedule around your family and creative peaks.",
  },
  {
    iconName: "TrendingUp",
    title: "Competitive Compensation & Bonus",
    description:
      "Top-market salary packages benchmarked against leading global tech companies, with performance incentives.",
  },
];

export const openPositionsData: JobPosition[] = [
  {
    id: "senior-ios-engineer",
    slug: "senior-ios-engineer",
    title: "Senior iOS Engineer",
    department: "Mobile Engineering",
    location: "Remote (Global / India)",
    type: "Full-time",
    experienceLevel: "Senior (5+ years)",
    shortSummary:
      "Architect and build high-performance, platform-native iOS applications using modern Swift, SwiftUI, and Clean Architecture.",
    aboutRole:
      "As a Senior iOS Engineer at Osstap, you will spearhead the design and development of mission-critical mobile applications for ambitious venture-backed startups and established enterprises. You will champion modern iOS engineering best practices, design fluid 120Hz gesture-driven interfaces, and build resilient offline-first synchronization layers.",
    responsibilities: [
      "Architect, develop, and maintain high-performance native iOS applications using Swift and SwiftUI",
      "Collaborate with backend architects to design clean, high-throughput REST and GraphQL contracts",
      "Implement robust local persistence and offline sync engines using SwiftData, CoreData, or SQLite",
      "Write comprehensive unit and UI test suites achieving high code coverage and reliability",
      "Automate build, code signing, TestFlight distribution, and App Store releases via Fastlane and CI/CD",
      "Conduct thorough code reviews and mentor intermediate mobile developers",
    ],
    requirements: [
      "5+ years of professional native iOS development experience",
      "Deep proficiency with modern Swift, SwiftUI, Combine, and modern Swift Concurrency (async/await, Actors)",
      "Strong understanding of architectural patterns (MVVM, Clean Architecture, Composable Architecture)",
      "Proven track record shipping multiple top-rated apps to the Apple App Store",
      "Solid understanding of memory management, Instruments profiling, and battery/network optimization",
      "Excellent communication skills and ability to operate effectively in an asynchronous, remote-first team",
    ],
    niceToHave: [
      "Experience with cross-platform frameworks (React Native, Flutter) or Kotlin Multiplatform",
      "Familiarity with iOS background tasks, Push Notifications (APNs), and Dynamic Island / Live Activities",
      "Active contributor to open-source Swift packages or tech blogging",
    ],
    whatWeOffer: [
      "Competitive global compensation package with annual review",
      "Top-tier MacBook Pro M-series hardware setup",
      "Annual $2,000 learning & conference allowance",
      "Comprehensive medical insurance coverage for you and family",
      "Flexible, remote-first work environment",
    ],
  },
  {
    id: "senior-backend-engineer",
    slug: "senior-backend-engineer",
    title: "Senior Backend Engineer",
    department: "Product Engineering",
    location: "Remote (Global / India)",
    type: "Full-time",
    experienceLevel: "Senior (5+ years)",
    shortSummary:
      "Design and deploy resilient, high-throughput microservices, distributed data systems, and APIs in Go or TypeScript/Node.js.",
    aboutRole:
      "Osstap is seeking a Senior Backend Engineer to architect cloud-native distributed backend services that power high-concurrency client products. You will tackle real-world scalability challenges, design fault-tolerant data pipelines, and ensure sub-50ms API latencies under heavy enterprise load.",
    responsibilities: [
      "Design, implement, and scale backend services in Go, Node.js/TypeScript, or Python",
      "Model relational and non-relational database schemas using PostgreSQL, Redis, and message queues",
      "Implement event-driven architectures with Kafka, RabbitMQ, or AWS SQS/SNS",
      "Build secure authentication, rate limiting, and observability with OpenTelemetry and Prometheus",
      "Partner with frontend and mobile teams to define clean API contracts and data models",
      "Troubleshoot distributed system bottlenecks and execute root-cause post-mortems",
    ],
    requirements: [
      "5+ years designing and running backend services in production environments",
      "Strong proficiency in Go or TypeScript/Node.js, with solid fundamentals in concurrent programming",
      "Deep experience with PostgreSQL (query optimization, indexing, connection pooling, migrations)",
      "Hands-on experience with cloud providers (AWS or GCP) and containerization (Docker, Kubernetes)",
      "Understanding of distributed system patterns: idempotency, circuit breakers, distributed locking",
      "Commitment to test-driven engineering and robust automated CI/CD pipelines",
    ],
    niceToHave: [
      "Familiarity with gRPC and Protocol Buffers",
      "Experience with high-scale analytics engines such as ClickHouse or Snowflake",
      "Experience working with AI/LLM integration APIs and vector databases",
    ],
    whatWeOffer: [
      "Market-leading salary package with performance bonuses",
      "Top-tier Apple Silicon MacBook Pro and workstation setup",
      "Annual conference and learning budget",
      "Comprehensive medical insurance for employee and dependents",
      "High-autonomy remote work culture",
    ],
  },
  {
    id: "ai-engineer",
    slug: "ai-engineer",
    title: "AI & Automation Engineer",
    department: "AI & Emerging Tech",
    location: "Remote (Global / India)",
    type: "Full-time",
    experienceLevel: "Mid-Senior (3+ years)",
    shortSummary:
      "Develop production-grade LLM agent workflows, enterprise RAG architectures, and automated reasoning pipelines.",
    aboutRole:
      "Join our emerging technology team to build practical, high-value AI solutions for global clients. You will bridge cutting-edge generative AI research with production software engineering, crafting agentic workflows, semantic search systems, and automated evaluation suites.",
    responsibilities: [
      "Architect and deploy autonomous AI agents with structured tool-calling and memory stores",
      "Engineer hybrid enterprise RAG systems with semantic chunking, re-ranking, and vector embeddings",
      "Implement robust evaluation datasets (evals) to measure hallucination rates and accuracy benchmarks",
      "Optimize prompt chains, caching, and token usage to ensure predictable latency and unit economics",
      "Implement security guardrails, PII redaction, and audit logging for enterprise compliance",
    ],
    requirements: [
      "3+ years in software engineering with at least 1.5+ years focused on applied LLMs / GenAI",
      "Strong proficiency in Python and TypeScript",
      "Hands-on experience with frameworks like LangChain, LlamaIndex, Instructor, or DSPy",
      "Practical experience with vector databases (Qdrant, Pinecone, pgvector) and search techniques",
      "Understanding of prompt engineering, few-shot techniques, and model evaluation methodologies",
      "Disciplined engineering mindset regarding automated testing, observability, and cost control",
    ],
    niceToHave: [
      "Experience fine-tuning open-source models (Llama 3, Mistral) with LoRA/QLoRA",
      "Knowledge of local model execution with Ollama or vLLM",
      "Experience deploying ML microservices with FastAPI, Docker, and Kubernetes",
    ],
    whatWeOffer: [
      "Competitive salary and performance bonuses",
      "Workstation hardware of your choice and cloud computing budget",
      "Dedicated time and budget for AI experimentation and open-source contributions",
      "Comprehensive health and wellness benefits",
      "100% remote-first company culture",
    ],
  },
  {
    id: "cloud-devops-architect",
    slug: "cloud-devops-architect",
    title: "Lead Cloud & DevOps Architect",
    department: "Cloud & Infrastructure",
    location: "Remote (Global / India)",
    type: "Full-time",
    experienceLevel: "Lead (6+ years)",
    shortSummary:
      "Lead the architecture of declarative cloud infrastructure, Kubernetes platforms, and security compliance frameworks.",
    aboutRole:
      "As Lead Cloud & DevOps Architect, you will establish the infrastructure standards across all Osstap client engagements. You will author reusable Terraform modules, design production Kubernetes clusters, implement rock-solid CI/CD pipelines, and conduct cloud security audits.",
    responsibilities: [
      "Architect resilient, multi-region cloud infrastructures on AWS and GCP using Terraform / OpenTofu",
      "Design and maintain production Kubernetes (EKS/GKE) clusters with autoscaling and GitOps (ArgoCD)",
      "Build secure, automated CI/CD pipelines with automated vulnerability scanning and preview environments",
      "Implement centralized telemetry, metrics, and alerting using Prometheus, Grafana, and Datadog",
      "Conduct FinOps reviews to optimize cloud architecture spend and eliminate waste",
      "Guide client engineering teams through security compliance (SOC 2, ISO 27001) preparedness",
    ],
    requirements: [
      "6+ years in cloud engineering, site reliability, or DevOps roles",
      "Expert knowledge of AWS core services (VPC, IAM, EKS, RDS, CloudFront, Route53)",
      "Deep expertise in Infrastructure as Code with Terraform / OpenTofu and Terragrunt",
      "Extensive production experience operating Kubernetes in mission-critical environments",
      "Strong scripting proficiency in Python, Bash, or Go",
      "Demonstrated experience setting up comprehensive monitoring, SLOs, and incident response runbooks",
    ],
    niceToHave: [
      "AWS Certified Solutions Architect Professional or CKA/CKS certification",
      "Experience with zero-trust networking, Cloudflare Zero Trust, and service meshes (Istio/Linkerd)",
      "Experience with serverless paradigms and edge compute architectures",
    ],
    whatWeOffer: [
      "Top-percentile compensation package",
      "Hardware setup of choice (MacBook Pro or high-end Linux laptop)",
      "Annual conference and certification sponsorship",
      "Comprehensive family healthcare benefits",
      "Full remote-work flexibility with autonomy",
    ],
  },
];

export function getJobBySlug(slug: string): JobPosition | undefined {
  return openPositionsData.find((job) => job.slug === slug);
}

export function getAllJobSlugs(): string[] {
  return openPositionsData.map((job) => job.slug);
}
