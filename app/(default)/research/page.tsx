export const metadata = {
  title: "Research - Open Credit Scoring",
  description:
    "Research agenda for transparent, explainable, and fair credit scoring.",
};

const topics = [
  "Causal model design for credit decisioning",
  "Fair lending validation and adverse-action explanation",
  "Open benchmarks for model performance and drift",
  "Data standards for reproducible credit research",
];

export default function ResearchPage() {
  return (
    <section className="bg-white pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-[1.02] md:text-6xl">
            Research
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Open Credit Scoring studies how transparent models, causal
            reasoning, and antidiscrimination law can improve credit
            decisioning without hiding risk logic from borrowers or reviewers.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {topics.map((topic) => (
            <article
              className="rounded-lg border border-slate-200 bg-slate-50 p-6"
              key={topic}
            >
              <h2 className="text-lg font-bold">{topic}</h2>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
