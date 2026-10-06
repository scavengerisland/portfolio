export function AboutSection() {
  return (
    <section id="about" className="bg-cream-100/60 py-16 lg:py-24">
      <div className="container grid gap-8 px-5 sm:px-8 lg:grid-cols-[0.65fr_1.35fr]">
        <h2 className="text-3xl font-bold text-forest-900 sm:text-4xl">
          From the workflow
          <br className="hidden lg:block" /> to the working product.
        </h2>
        <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-forest-700">
          <p>
            I develop AI agents, mobile apps, and web applications. Through
            Light Works Studio, I work with clients and build products of my
            own.
          </p>
          <p>
            At FedEx, I work on enterprise Java and Spring Boot systems, cloud
            modernization, and CI/CD. That experience shapes how I test,
            release, and support smaller products.
          </p>
          <p>
            I use AI throughout development and review the result as an
            engineer. I focus on clear data models, explicit permissions, useful
            tests, and failures that people can recover from.
          </p>
        </div>
      </div>
    </section>
  );
}
