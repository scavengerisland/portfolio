export const appStore = {
  lyme: "https://apps.apple.com/us/app/lymetrack/id6654650507",
  ferment: "https://apps.apple.com/us/app/fermentbuddy/id6759010581",
};

export const caseStudies = [
  {
    slug: "orqestrate",
    name: "Orqestrate",
    category: "AI agents and workflows",
    role: "Founder and software engineer",
    summary:
      "An agent platform that connects AI work with projects, tools, and cloud execution.",
    problem:
      "Useful agents need more than a model call. They need access to tools, clear permissions, durable workflows, and recoverable failures.",
    contribution:
      "I build across the application, agent runtime, integrations, and AWS infrastructure. My recent work includes workflow admission, workspace membership, connector behavior, and marketplace consent flows.",
    decisions: [
      "Use isolated cloud workers and separate environments to contain agent execution.",
      "Keep permissions and credential consent explicit at the point of use.",
      "Check worker readiness and bound retries when a provider fails.",
    ],
    stack: [
      "Python",
      "TypeScript",
      "AWS",
      "Terraform",
      "Temporal",
      "Anthropic",
      "OAuth",
    ],
    evidence:
      "Recent repository work includes Temporal worker readiness, verified workspace membership, provider retry limits, and marketplace consent checks.",
    status:
      "The platform is under active development. Recent workflow and marketplace changes include staging verification; they are not all public releases.",
  },
  {
    slug: "talking-bibles",
    name: "Talking Bibles CMS",
    category: "Client application",
    role: "Independent software consultant",
    summary:
      "A content system for audio recordings, languages, agreements, and distribution workflows.",
    problem:
      "The team needs to manage related content and agreements, import existing records, and prepare audio for distribution without losing context.",
    contribution:
      "I develop the Next.js and Convex application, including data models, import workflows, audio assets, and staff-facing tools. The work also builds on my earlier AWS recovery engagement.",
    decisions: [
      "Model recordings, languages, and agreements as related records.",
      "Use import dry runs and validation before changing existing data.",
      "Keep audio assets in S3 and use controlled access for downloads.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Convex", "S3", "AI SDK"],
    evidence:
      "The repository contains import dry-run tooling, background work queues, audio download workflows, and recording merge analysis.",
    status:
      "This is a private client application. This overview describes the work without exposing client records or granting access to the system.",
  },
  {
    slug: "lymetrack",
    name: "LymeTrack",
    category: "Published iOS app",
    role: "Product designer and developer, Light Works Studio",
    summary:
      "A symptom and treatment journal that helps people record daily changes and review patterns.",
    problem:
      "A daily tracking tool must make detailed records easy to enter and keep charts and reminders easy to understand.",
    contribution:
      "I built the mobile product with React Native, Expo, and Convex, and published it through Light Works Studio. My work spans the data model, interface, check-ins, analytics, reminders, and release process.",
    decisions: [
      "Use a short check-in flow for routine symptom and treatment logging.",
      "Bring summaries and trends together in a clear mobile interface.",
      "Use crash reporting and release workflows to support the app after launch.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Convex", "Clerk", "Sentry"],
    evidence:
      "The public App Store listing shows the app, screenshots, and release history under Light Works Studio.",
    status:
      "Published in the App Store. Later native widget work is separate from the published app described here.",
    href: appStore.lyme,
    image: "/work/lymetrack-screen.jpg",
  },
  {
    slug: "fermentbuddy",
    name: "FermentBuddy",
    category: "Published iOS app",
    role: "Product designer and developer, Light Works Studio",
    summary:
      "A fermentation companion with project tracking, timers, reminders, and guided steps.",
    problem:
      "Fermentation projects run over days or weeks. People need to know what to do next and when to return.",
    contribution:
      "I built and published the app through Light Works Studio. My work includes the project interface, guided workflows, reminders, cloud data, subscriptions, and mobile release process.",
    decisions: [
      "Show the next step and project progress together.",
      "Use reminders to support work that happens outside the app.",
      "Keep subscription access clear within the product.",
    ],
    stack: ["React Native", "Expo", "TypeScript", "Convex", "EAS", "Superwall"],
    evidence:
      "The public App Store listing shows the app, screenshots, release history, and in-app purchases under Light Works Studio.",
    status:
      "Published in the App Store. The screenshots shown here are the public App Store previews.",
    href: appStore.ferment,
    image: "/work/fermentbuddy-screen.jpg",
  },
] as const;
