export const metadata = {
  title: "News - Open Credit Scoring",
  description:
    "Updates on Open Credit Scoring, causal AI research, financial AI governance, and trustworthy underwriting systems.",
};

const machineLearningTopics = [
  "Causal fairness graphs",
  "Counterfactual reasoning",
  "Causal debiasing",
  "Alternative data governance",
  "Systems thinking for financial AI",
];

const standardsAreas = [
  "AI governance frameworks",
  "Explainability standards",
  "Fairness evaluation methodologies",
  "Causal model interoperability",
  "Human oversight and accountability",
];

const alternativeDataSignals = [
  "Education data",
  "Employment data",
  "Behavioral data",
  "Digital footprints",
  "Natural language signals",
];

const upcomingReleases = [
  "Research papers",
  "Technical whitepapers",
  "Open governance proposals",
  "Reference architectures",
  "Educational materials",
  "Open technical standards",
  "Benchmark and evaluation frameworks",
];

const futureUpdates = [
  "Research announcements",
  "Technical publications",
  "Standards activities",
  "Pilot initiatives",
  "Community collaborations",
  "Public presentations and workshops",
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

export default function NewsPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-midnight pt-28 text-white md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(20,184,166,.22),transparent_46%),linear-gradient(180deg,rgba(248,250,252,.10),transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-teal-accent/40 to-transparent" />
        <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold leading-[1.02] md:text-6xl">
              News
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-surface/82">
              Stay updated on the latest developments in Open Credit Scoring,
              causal AI research, financial AI governance, and trustworthy
              underwriting systems.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <article className="max-w-3xl">
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Open Credit Scoring Initiative Launches
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                The Open Credit Scoring Initiative has officially launched to
                explore how causal AI, open standards, and transparent
                governance can help modernize credit scoring and underwriting
                systems.
              </p>
              <p>
                The initiative focuses on building a more trustworthy technical
                foundation for high-stakes financial AI through causal modeling,
                systems thinking, and open collaboration.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              New Research: From Machine Learning to Causal AI
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Open Credit Scoring has released new research exploring the
                transition from traditional statistical machine learning toward
                causal AI systems for financial decision-making.
              </p>
              <p>
                The research investigates how causal inference, causal Bayesian
                networks, and systems thinking may help improve transparency,
                explainability, and governance in AI-driven underwriting
                systems.
              </p>
              <p>Key topics include:</p>
            </div>
          </div>
          <CardGrid items={machineLearningTopics} />
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Exploring Open Standards for Trustworthy Financial AI
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                The initiative is actively exploring open technical standards
                for trustworthy AI systems in finance.
              </p>
              <p>
                The long-term goal is to help establish interoperable and
                transparent infrastructure for next-generation financial AI
                systems.
              </p>
            </div>
          </div>
          <CardGrid items={standardsAreas} />
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Alternative Data and Financial Inclusion Research
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Open Credit Scoring is conducting ongoing research into the use
                of alternative data in underwriting systems.
              </p>
              <p>
                The research focuses on balancing innovation, predictive
                performance, fairness, and institutional trust.
              </p>
            </div>
          </div>
          <CardGrid items={alternativeDataSignals} />
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <article className="max-w-3xl">
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Systems Thinking and AI Governance
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                New research efforts are examining how systems thinking and
                system dynamics can be applied to high-stakes AI systems.
              </p>
              <p>
                The initiative is exploring how feedback loops, institutional
                incentives, and long-term system behavior may influence
                financial AI outcomes over time.
              </p>
              <p>
                This work aims to move beyond static prediction systems toward
                AI systems capable of supporting governance, simulation, and
                policy design.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Upcoming Publications and Technical Releases
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>Upcoming work may include:</p>
              <p>
                Additional announcements will be published as research and
                collaborations progress.
              </p>
            </div>
          </div>
          <CardGrid items={upcomingReleases} />
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#0B1F33_0%,#0D2A3D_58%,#0B1F33_100%)] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Follow the Initiative
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-surface/82">
              <p>
                Open Credit Scoring is building an open research and
                collaboration ecosystem around trustworthy financial AI.
              </p>
              <p>For updates, follow the project and future publication releases.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {futureUpdates.map((item) => (
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
