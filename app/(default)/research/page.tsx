export const metadata = {
  title: "Research - Open Credit Scoring",
  description:
    "Research on causal AI, systems thinking, and open standards for trustworthy financial decision systems.",
};

const causalResearch = [
  "Causal Bayesian networks",
  "Causal fairness graphs",
  "Counterfactual reasoning",
  "Interventions and policy simulation",
  "Causal debiasing techniques",
  "Systems thinking and feedback loops",
];

const fairnessIssues = [
  "Disparate treatment",
  "Disparate impact",
  "Proxy discrimination",
  "Alternative data usage",
  "Digital redlining",
  "Long-term feedback effects in financial systems",
];

const governanceSupports = [
  "Policy constraints",
  "Regulatory compliance",
  "Human oversight",
  "Institutional accountability",
  "Transparent decision processes",
  "Simulation of downstream effects over time",
];

const researchAreas = [
  "Causal AI for credit scoring and underwriting",
  "AI fairness and antidiscrimination law",
  "Alternative data and causal debiasing",
  "Causal explainability and transparency",
  "Systems thinking for AI governance",
  "Open technical standards for trustworthy AI",
  "High-stakes decision-making systems",
  "Human-centered and institutionally accountable AI",
];

export default function ResearchPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-midnight pt-28 text-white md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(20,184,166,.22),transparent_46%),linear-gradient(180deg,rgba(248,250,252,.10),transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-teal-accent/40 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold leading-[1.02] md:text-6xl">
              Research
            </h1>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-surface/82">
              <p>
                Open Credit Scoring explores how causal AI, systems thinking,
                and open standards can help build the next generation of
                trustworthy financial decision systems.
              </p>
              <p>
                Our research focuses on moving beyond purely statistical machine
                learning approaches toward AI systems that can reason about
                causation, accountability, interventions, and long-term system
                behavior.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              From proprietary black boxes to open scientific infrastructure
            </h2>
            <p className="mt-5 leading-7 text-body">
              Next-generation financial AI cannot be built only through closed
              model development. It requires shared benchmarks, transparent
              assumptions, interoperable governance frameworks, and reproducible
              research. Open Credit Scoring focuses on the scientific and
              technical infrastructure needed to move credit decision systems
              beyond opaque prediction.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              From Machine Learning to Causal AI
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Most modern AI systems in finance are based primarily on
                statistical prediction.
              </p>
              <p>
                These systems identify patterns and correlations in historical
                data, but they often struggle to distinguish between correlation
                and causation. As a result, they may unintentionally reinforce
                historical biases, produce unstable outcomes, or create systems
                that are difficult to govern and explain.
              </p>
              <p>
                Our research explores how causal inference and causal models can
                augment machine learning systems by introducing explicit
                representations of cause-and-effect relationships.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {causalResearch.map((item) => (
              <div
                className="rounded-md border border-line bg-white/80 p-4 font-semibold text-midnight shadow-sm shadow-midnight/[0.03]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              From Fairness Metrics to Causal Fairness
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Many existing AI fairness approaches rely on statistical
                fairness metrics.
              </p>
              <p>
                While useful, these metrics can become mathematically
                incompatible with one another and may fail to distinguish
                between legitimate causal relationships and discriminatory
                effects.
              </p>
              <p>
                Rather than treating fairness as a purely statistical
                optimization problem, we explore fairness as a causal and
                institutional problem that must be understood within broader
                social and economic systems.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {fairnessIssues.map((issue) => (
              <div
                className="rounded-md border border-line bg-white/80 p-4 font-semibold text-midnight shadow-sm shadow-midnight/[0.03]"
                key={issue}
              >
                {issue}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              From Explainability to Governance
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Traditional explainability approaches often focus on
                interpreting black-box machine learning models after they have
                already been trained.
              </p>
              <p>
                Our research explores a different approach: using causal models
                as operational governance architectures for high-stakes AI
                systems.
              </p>
              <div className="rounded-md border border-line bg-white/80 p-5 shadow-sm shadow-midnight/[0.03]">
                <p className="font-semibold text-midnight">
                  Instead of only asking: “How do we explain the model?”
                </p>
                <p className="mt-3 font-semibold text-midnight">
                  We also ask: “How do we govern and constrain the system
                  itself?”
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {governanceSupports.map((item) => (
              <div
                className="rounded-md border border-line bg-white/80 p-4 font-semibold text-midnight shadow-sm shadow-midnight/[0.03]"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              From Prediction to Control and Simulation
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Most machine learning systems are optimized primarily for
                prediction.
              </p>
              <p>
                Our research investigates how AI systems can evolve beyond
                prediction toward control of decision systems through causal
                inference and simulation of long-term system behavior through
                systems thinking and system dynamics.
              </p>
              <p>
                This expands the role of AI from passive prediction toward
                active governance and policy design for high-stakes domains such
                as credit underwriting and financial services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Research Areas
            </h2>
            <p className="mt-5 leading-7 text-body">
              Current research areas include:
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold md:text-4xl">
              Research Vision
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-surface/82">
              <p>
                We believe the future of financial AI requires more than
                increasingly complex black-box models.
              </p>
              <p>
                It requires systems that are scientifically grounded, causally
                informed, transparent, and governable by design.
              </p>
              <p>
                Open Credit Scoring exists to help advance that transition.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
