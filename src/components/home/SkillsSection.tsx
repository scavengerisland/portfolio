const categories = [
  {
    title: "AI agents and integrations",
    evidence: "Orqestrate",
    skills:
      "Anthropic API, tool integrations, agent workflows, MCP, OAuth, PostgreSQL, pgvector",
  },
  {
    title: "Web and backend",
    evidence: "Talking Bibles CMS and client websites",
    skills:
      "TypeScript, React, Next.js, Convex, Python, Java, Spring Boot, REST APIs, S3",
  },
  {
    title: "Mobile products",
    evidence: "LymeTrack and FermentBuddy",
    skills:
      "React Native, Expo, EAS, Convex, Clerk, subscriptions, notifications, mobile releases",
  },
  {
    title: "Cloud and delivery",
    evidence: "FedEx and independent platforms",
    skills:
      "AWS, Terraform, Docker, GitHub Actions, OIDC, Jenkins, IAM, KMS, Sentry, PostHog",
  },
];
export function SkillsSection() {
  return (
    <section id="skills" className="py-16 lg:py-24">
      <div className="container px-5 sm:px-8">
        <h2 className="text-3xl font-bold text-forest-900 sm:text-4xl">
          Skills tied to real work.
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {categories.map((item) => (
            <div key={item.title} className="border-t border-forest-200 pt-6">
              <h3 className="text-xl font-semibold text-forest-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-forest-600">
                {item.evidence}
              </p>
              <p className="mt-4 leading-relaxed text-forest-700">
                {item.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
