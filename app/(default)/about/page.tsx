export const metadata = {
  title: "About - Open Credit Scoring",
  description:
    "About Open Credit Scoring and its mission to advance transparent, accountable, and trustworthy financial AI.",
};

const whyQuestions = [
  "Transparency",
  "Fairness",
  "Accountability",
  "Explainability",
  "Institutional trust",
  "Long-term societal impact",
];

const causalRepresentations = [
  "Cause-and-effect relationships",
  "Policy interventions",
  "Counterfactual reasoning",
  "Feedback loops",
  "Long-term system behavior",
  "Institutional dynamics",
];

const researchMethods = [
  "Causal Bayesian networks",
  "Causal fairness analysis",
  "Causal debiasing",
  "Alternative data governance",
  "AI transparency and explainability",
  "Systems thinking for financial AI",
];

const ecosystemBenefits = [
  "Interoperability",
  "Transparency",
  "Scientific rigor",
  "Public trust",
  "Institutional accountability",
  "Long-term innovation",
];

const collaborators = [
  "Financial services",
  "Research institutions",
  "Standards organizations",
  "Civil society groups",
  "Policymakers",
  "Technology companies",
  "Consumer advocates",
];

const researchAreas = [
  "Causal AI for credit underwriting",
  "Fair lending and antidiscrimination analysis",
  "Alternative data evaluation",
  "Explainable and governable AI systems",
  "Systems thinking and system dynamics",
  "Human-centered financial AI",
  "Open technical infrastructure for trustworthy AI",
];

const visionPrinciples = [
  "Scientifically grounded",
  "Transparent by design",
  "Institutionally accountable",
  "Fair and explainable",
  "Safe for high-stakes use cases",
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

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-midnight pt-28 text-white md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(20,184,166,.22),transparent_46%),linear-gradient(180deg,rgba(248,250,252,.10),transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-teal-accent/40 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold leading-[1.02] md:text-6xl">
              About
            </h1>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-surface/82">
              <p>
                Open Credit Scoring is an initiative focused on advancing more
                transparent, accountable, and trustworthy approaches to credit
                scoring and AI-driven underwriting.
              </p>
              <p>
                We believe high-stakes financial AI systems should not operate
                as opaque black boxes that are difficult for consumers,
                institutions, and regulators to understand or govern.
              </p>
              <p>
                Our mission is to explore how causal AI, systems thinking, and
                open standards can help build the next generation of financial
                decision systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Why Open Credit Scoring?
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Credit scores influence access to housing, transportation,
                education, entrepreneurship, and economic opportunity.
              </p>
              <p>
                Yet much of the infrastructure behind modern credit scoring
                remains proprietary and difficult to evaluate externally.
              </p>
              <p>
                At the same time, advances in machine learning and alternative
                data are rapidly transforming financial decision-making systems.
                While these technologies may improve predictive performance,
                they also raise important questions.
              </p>
              <p>
                Open Credit Scoring was created to explore whether a more open,
                scientifically grounded, and governable approach to financial AI
                is possible.
              </p>
            </div>
          </div>
          <CardGrid items={whyQuestions} />
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Our Approach
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                The initiative investigates how causal inference and systems
                thinking can augment traditional machine learning approaches
                used in credit underwriting.
              </p>
              <p>
                Rather than relying only on statistical correlations, we explore
                how causal models may help represent complex relationships,
                interventions, and long-term system behavior.
              </p>
              <p>
                We believe trustworthy AI requires more than prediction accuracy
                alone.
              </p>
              <p>
                It also requires systems that can be understood, governed,
                challenged, and improved over time.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <CardGrid items={causalRepresentations} />
            <CardGrid items={researchMethods} />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Open Standards and Collaboration
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Open Credit Scoring supports the development of open technical
                standards and collaborative research for high-stakes AI systems.
              </p>
              <p>
                We believe open ecosystems can help improve interoperability,
                transparency, scientific rigor, public trust, institutional
                accountability, and long-term innovation.
              </p>
              <p>The initiative welcomes collaboration across:</p>
            </div>
          </div>
          <div className="space-y-6">
            <CardGrid items={ecosystemBenefits} />
            <CardGrid items={collaborators} />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Research Areas
            </h2>
            <p className="mt-5 leading-7 text-body">
              Current areas of focus include:
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {researchAreas.map((area) => (
              <div
                className="rounded-md border border-line bg-white/80 p-4 font-semibold text-midnight shadow-sm shadow-midnight/[0.03]"
                key={area}
              >
                {area}
              </div>
            ))}
          </div>
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
                We believe the future of financial AI requires a transition
                from opaque predictive systems toward transparent and governable
                decision architectures.
              </p>
              <p>
                Our long-term vision is to help establish an open technical
                foundation for trustworthy financial AI systems.
              </p>
              <p>Open Credit Scoring exists to help advance that future.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {visionPrinciples.map((principle) => (
              <div
                className="rounded-md border border-white/10 bg-white/[0.06] p-4 font-semibold text-surface shadow-sm shadow-midnight/[0.03]"
                key={principle}
              >
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
