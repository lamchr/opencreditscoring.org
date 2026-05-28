export const metadata = {
  title: "Projects - Open Credit Scoring",
  description:
    "Projects developing open research, technical frameworks, and governance models for trustworthy AI-driven credit systems.",
};

const initiativeGoals = [
  "Transparent",
  "Explainable",
  "Accountable",
  "Interoperable",
  "Safe by design",
];

const initiativeFocus = [
  "Open governance frameworks",
  "Causal credit scoring architectures",
  "Fairness and antidiscrimination analysis",
  "Alternative data evaluation",
  "Trustworthy AI infrastructure",
  "Long-term institutional accountability",
];

const underwritingRelationships = [
  "Creditworthiness",
  "Financial behavior",
  "Alternative data",
  "Protected attributes",
  "Lending decisions",
  "Loan outcomes",
];

const underwritingGoals = [
  "Explainability",
  "Fairness analysis",
  "Regulatory alignment",
  "Policy control",
  "System stability",
];

const fairnessAreas = [
  "Disparate treatment",
  "Disparate impact",
  "Proxy discrimination",
  "Mediation analysis",
  "Counterfactual reasoning",
  "Causal debiasing",
  "Fair lending compliance",
];

const alternativeDataAreas = [
  "Education data",
  "Employment data",
  "Behavioral data",
  "Digital footprint data",
  "Natural language signals",
  "Psychometric indicators",
];

const systemsAreas = [
  "Feedback loops",
  "Institutional incentives",
  "Dynamic discrimination effects",
  "Financial inclusion dynamics",
  "Consumer behavior adaptation",
  "Policy intervention modeling",
];

const standardsAreas = [
  "AI governance frameworks",
  "Explainability standards",
  "Causal model interoperability",
  "Fairness testing methodologies",
  "Regulatory alignment",
  "Transparent AI infrastructure",
];

const futureDirections = [
  "Open-source reference implementations",
  "Benchmark datasets and evaluation frameworks",
  "Public-interest AI governance models",
  "AI safety for financial systems",
  "Human-centered underwriting systems",
  "Simulation environments for financial AI",
  "Causal world models for socioeconomic systems",
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

export default function ProjectsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-midnight pt-28 text-white md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(20,184,166,.22),transparent_46%),linear-gradient(180deg,rgba(248,250,252,.10),transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-teal-accent/40 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold leading-[1.02] md:text-6xl">
              Projects
            </h1>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-surface/82">
              <p>
                Open Credit Scoring is developing open research, technical
                frameworks, and governance models for trustworthy AI-driven
                credit and underwriting systems.
              </p>
              <p>
                Our projects focus on advancing causal AI, transparency,
                fairness, and institutional trust in high-stakes financial
                decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Open Credit Scoring Initiative
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                The Open Credit Scoring Initiative explores how open standards,
                causal AI, and transparent governance can help modernize credit
                scoring and underwriting systems.
              </p>
              <p>
                The initiative aims to create an open technical foundation for
                next-generation financial AI systems.
              </p>
              <p>Key focus areas include:</p>
            </div>
          </div>
          <div className="space-y-6">
            <CardGrid items={initiativeGoals} />
            <CardGrid items={initiativeFocus} />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Causal AI for Credit Underwriting
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                This project explores how causal inference and causal Bayesian
                networks can augment traditional machine learning systems used
                in credit underwriting.
              </p>
              <p>
                Rather than relying solely on statistical correlations, causal
                models attempt to explicitly represent relationships between key
                financial and decision variables.
              </p>
              <p>
                This work investigates how causal AI may help financial
                institutions better distinguish between legitimate predictive
                signals and potentially discriminatory effects.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <CardGrid items={underwritingRelationships} />
            <CardGrid items={underwritingGoals} />
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Causal Fairness and Antidiscrimination Research
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                This research project focuses on applying causal models to
                questions of fairness, discrimination, and compliance in
                financial AI systems.
              </p>
              <p>
                The project also explores how causal models may provide a more
                operational framework for translating antidiscrimination
                principles into system design constraints.
              </p>
            </div>
          </div>
          <CardGrid items={fairnessAreas} />
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Alternative Data and Causal Debiasing
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Alternative data has the potential to improve financial
                inclusion, but it also introduces new risks related to proxy
                discrimination, digital redlining, and opaque decision-making.
              </p>
              <p>
                This project explores how causal inference techniques may help
                evaluate alternative data sources more rigorously.
              </p>
              <p>
                The goal is to develop more trustworthy approaches for
                evaluating whether alternative data has a legitimate causal
                relationship to creditworthiness.
              </p>
            </div>
          </div>
          <CardGrid items={alternativeDataAreas} />
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Systems Thinking and Financial AI
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Most AI systems are optimized primarily for short-term
                prediction.
              </p>
              <p>
                This project explores how systems thinking and system dynamics
                can help model long-term feedback effects within financial
                systems.
              </p>
              <p>
                The objective is to move beyond static AI models toward systems
                capable of simulating long-term economic and social outcomes.
              </p>
            </div>
          </div>
          <CardGrid items={systemsAreas} />
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Open Standards for Trustworthy AI
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Open Credit Scoring supports the development of open technical
                standards for high-stakes AI systems.
              </p>
              <p>
                We believe open standards are essential for creating trusted and
                interoperable AI ecosystems in finance.
              </p>
            </div>
          </div>
          <CardGrid items={standardsAreas} />
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Future Directions
            </h2>
            <p className="mt-5 leading-7 text-body">
              Open Credit Scoring is exploring future research directions
              including:
            </p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {futureDirections.map((direction) => (
              <div
                className="rounded-md border border-line bg-white/80 p-4 font-semibold text-midnight shadow-sm shadow-midnight/[0.03]"
                key={direction}
              >
                {direction}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#0B1F33_0%,#0D2A3D_58%,#0B1F33_100%)] py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold md:text-4xl">
              Financial AI needs more than better prediction
            </h2>
            <p className="mt-5 leading-7 text-surface/82">
              We believe the future of financial AI depends not only on better
              prediction, but on better governance, transparency, and
              institutional trust.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
