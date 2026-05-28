export const metadata = {
  title: "Open Credit Scoring - Open Credit Scoring",
  description:
    "An overview of Open Credit Scoring as a transparent, scientifically grounded approach to credit scoring and AI-driven underwriting.",
};

const structuralProblems = [
  "Limited transparency into how scores are calculated",
  "Difficulty identifying hidden sources of bias or discrimination",
  "Limited ability for consumers to challenge or improve outcomes",
  "Heavy dependence on a small number of dominant providers",
  "Slow adaptation to new forms of economic behavior and alternative data",
];

const systemGoals = [
  "More accurate",
  "More explainable",
  "More accountable",
  "More interoperable",
  "More trustworthy",
];

export default function OpenCreditScoringPage() {
  return (
    <section className="bg-surface pb-16 pt-36 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <article className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-[1.02] text-midnight md:text-6xl">
            What is Open Credit Scoring?
          </h1>

          <div className="mt-8 space-y-5 text-lg leading-8 text-body">
            <p>
              Credit scores shape access to modern economic life. They
              influence whether people can obtain mortgages, auto loans, credit
              cards, insurance, apartments, and sometimes even employment
              opportunities.
            </p>
            <p>
              Yet most credit scoring systems remain proprietary black boxes.
              Consumers, lenders, regulators, and even many institutions often
              cannot fully understand how these systems operate, how decisions
              are made, or how bias and errors propagate through the system.
            </p>
          </div>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-midnight">
              The Problem with Proprietary Credit Scoring
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Traditional credit scoring systems were designed for a
                different era of finance. While they helped standardize lending
                decisions at scale, they also introduced several structural
                problems:
              </p>
              <ul className="space-y-3">
                {structuralProblems.map((problem) => (
                  <li className="flex gap-3" key={problem}>
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-teal-accent" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
              <p>
                Modern AI and machine learning systems have made these
                challenges even more complex. Many newer underwriting systems
                rely on highly sophisticated statistical models that can improve
                predictive accuracy, but often at the cost of interpretability
                and institutional trust.
              </p>
              <p>
                This creates a growing tension between innovation, fairness,
                accountability, and public confidence.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-midnight">
              Why Existing Solutions Are Not Enough
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Most current approaches attempt to solve these problems after
                the fact through audits, fairness metrics, or compliance
                reviews.
              </p>
              <p className="border-l-4 border-gold bg-white/80 py-3 pl-5 font-semibold text-midnight shadow-sm shadow-midnight/[0.03]">
                But post-hoc auditing alone is not sufficient.
              </p>
              <p>
                A system can satisfy one fairness metric while violating
                another. Statistical correlations can appear fair while masking
                deeper causal problems. Even highly accurate machine learning
                systems may unintentionally reinforce historical biases embedded
                in the underlying data.
              </p>
              <p>
                The core issue is that correlation does not imply causation.
              </p>
              <p>
                Without understanding causal relationships, institutions cannot
                reliably distinguish between legitimate predictors of
                creditworthiness and variables that may act as hidden proxies
                for discrimination or structural inequality.
              </p>
              <p>
                This is especially important in high-stakes financial systems
                where decisions affect millions of people and where trust is
                essential for long-term adoption.
              </p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-midnight">
              What Open Credit Scoring Is About
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Open Credit Scoring is an initiative to develop a more
                transparent, scientifically grounded, and openly governed
                approach to credit scoring and AI-driven underwriting.
              </p>
              <p>
                The initiative explores how causal AI, open standards, and
                transparent governance can help create next-generation financial
                decision systems that are:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {systemGoals.map((goal) => (
                  <div
                    className="rounded-md border border-line bg-white/80 px-4 py-3 font-semibold text-midnight shadow-sm shadow-midnight/[0.03]"
                    key={goal}
                  >
                    {goal}
                  </div>
                ))}
              </div>
              <p>
                Rather than treating fairness and compliance as external audits
                applied after deployment, Open Credit Scoring explores how they
                can be designed directly into the architecture of the system
                itself.
              </p>
              <p>
                The goal is not simply to replace one proprietary score with
                another.
              </p>
              <p>
                The goal is to help establish an open technical foundation for
                trustworthy financial AI systems, similar to how open standards
                helped build the modern internet.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-md border border-line bg-[linear-gradient(135deg,#FFFFFF_0%,#EEF6F6_100%)] p-6 shadow-sm shadow-midnight/[0.03]">
            <h2 className="text-3xl font-bold text-midnight">Our Vision</h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                We believe the future of financial AI requires more than larger
                models and more data.
              </p>
              <p>
                It requires systems that institutions, regulators, lenders, and
                consumers can understand, evaluate, and trust.
              </p>
              <p>
                Open Credit Scoring is working toward a future where high-stakes
                AI systems are not only powerful, but transparent, accountable,
                and safe by design.
              </p>
            </div>
          </section>
        </article>
      </div>
    </section>
  );
}
