export const metadata = {
  title: "Standards - Open Credit Scoring",
  description:
    "Open technical standards and governance models for trustworthy financial AI systems.",
};

const standardGoals = [
  "Transparent",
  "Explainable",
  "Accountable",
  "Interoperable",
  "Governable",
  "Safe by design",
];

const noStandardsRisks = [
  "Increasingly opaque",
  "Difficult to audit",
  "Difficult to govern",
  "Fragmented across institutions",
  "Vulnerable to hidden bias and instability",
  "Dependent on closed proprietary ecosystems",
];

const governanceResearch = [
  "Causal governance frameworks",
  "AI control architectures",
  "Transparent decision systems",
  "Policy-aware AI design",
  "Human oversight mechanisms",
  "Long-term system monitoring",
  "Institutional accountability structures",
];

const infrastructureAreas = [
  "Causal model interoperability",
  "Explainability frameworks",
  "Fairness evaluation methodologies",
  "Alternative data governance",
  "Counterfactual explanation protocols",
  "AI transparency documentation",
  "Benchmark and testing frameworks",
  "Simulation environments for high-stakes AI",
];

const highStakesDomains = [
  "Access to credit",
  "Housing opportunities",
  "Insurance eligibility",
  "Consumer financial health",
  "Economic mobility",
];

const collaborators = [
  "Financial institutions",
  "Standards organizations",
  "Research institutions",
  "Technology companies",
  "Policymakers",
  "Consumer advocates",
  "Civil society organizations",
];

const visionFoundations = [
  "Transparent governance",
  "Institutional accountability",
  "Scientific rigor",
  "Open interoperability",
  "Human-centered oversight",
  "Long-term system resilience",
];

function CardGrid({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          className="rounded-md border border-line bg-white/80 p-4 font-semibold text-midnight shadow-sm shadow-midnight/[0.03]"
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

export default function StandardsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-midnight pt-28 text-white md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(20,184,166,.22),transparent_46%),linear-gradient(180deg,rgba(248,250,252,.10),transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-teal-accent/40 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold leading-[1.02] md:text-6xl">
              Standards
            </h1>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-surface/82">
              <p>
                Modern financial systems increasingly rely on artificial
                intelligence and automated decision-making.
              </p>
              <p>
                Yet many of these systems remain proprietary, opaque, and
                difficult to independently evaluate. As AI becomes more deeply
                integrated into credit underwriting and financial
                infrastructure, the need for transparent and interoperable
                governance frameworks becomes increasingly important.
              </p>
              <p>
                Open Credit Scoring supports the development of open technical
                standards and governance models for high-stakes financial AI
                systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Building Open Standards for Trustworthy Financial AI
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Our goal is to help establish a shared technical foundation for
                AI systems that are transparent, explainable, accountable,
                interoperable, governable, and safe by design.
              </p>
              <p>
                The goal is not to eliminate proprietary innovation. The goal
                is to define open interfaces, evaluation methods, governance
                layers, and technical safeguards that allow innovation to scale
                responsibly in high-stakes financial systems.
              </p>
            </div>
          </div>
          <CardGrid items={standardGoals} />
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Why Standards Matter
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Open standards played a foundational role in building the modern
                internet, cybersecurity ecosystem, and global communications
                infrastructure.
              </p>
              <p>
                We believe high-stakes AI systems require a similar transition
                toward transparent and interoperable technical frameworks.
              </p>
              <p>
                Open standards can help create shared frameworks for evaluating,
                governing, and improving financial AI systems over time.
              </p>
            </div>
          </div>
          <CardGrid items={noStandardsRisks} />
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              From Auditing to Governance
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Many current approaches to AI governance focus primarily on
                post-hoc audits and compliance reviews.
              </p>
              <p>
                While important, auditing alone is often insufficient for
                governing highly complex decision systems.
              </p>
              <p>
                Open Credit Scoring explores how causal AI and systems thinking
                may support a more proactive governance model where
                transparency, accountability, and policy constraints are
                designed directly into system architectures.
              </p>
            </div>
          </div>
          <CardGrid items={governanceResearch} />
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Open Technical Infrastructure
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                The initiative supports the development of open technical
                infrastructure for trustworthy financial AI.
              </p>
              <p>
                The objective is not to standardize innovation itself, but to
                help create trusted interfaces and governance layers that allow
                innovation to scale responsibly.
              </p>
            </div>
          </div>
          <CardGrid items={infrastructureAreas} />
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              High-Stakes AI Requires Higher Standards
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Financial AI systems operate within environments where errors
                can have significant economic and societal consequences.
              </p>
              <p>
                As a result, high-stakes AI systems require stronger
                governance, transparency, and accountability mechanisms than
                low-risk consumer applications.
              </p>
              <p>
                Open Credit Scoring explores how causal AI and open standards
                may help support safer and more trustworthy deployment of AI in
                these environments.
              </p>
            </div>
          </div>
          <CardGrid items={highStakesDomains} />
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Collaboration and Ecosystem Development
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                We believe trustworthy financial AI cannot be built by any
                single institution alone.
              </p>
              <p>
                Long-term trust in financial AI will likely depend on open
                collaboration between technical, legal, institutional, and
                public-interest stakeholders.
              </p>
            </div>
          </div>
          <CardGrid items={collaborators} />
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#0B1F33_0%,#0D2A3D_58%,#0B1F33_100%)] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Long-Term Vision
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-surface/82">
              <p>
                Our long-term vision is to help advance an open ecosystem for
                trustworthy financial AI systems.
              </p>
              <p>
                We believe the future of financial AI requires not only more
                powerful models, but stronger governance architectures capable
                of supporting public trust at scale.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {visionFoundations.map((item) => (
              <div
                className="rounded-md border border-white/10 bg-white/[0.06] p-4 font-semibold text-surface shadow-sm shadow-midnight/[0.03]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
