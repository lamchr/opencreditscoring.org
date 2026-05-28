export const metadata = {
  title: "What is Open Credit Scoring? - Open Credit Scoring",
  description:
    "An overview of Open Credit Scoring as a research and standards initiative for trustworthy credit decisions.",
};

const foundations = [
  {
    title: "Mathematical trust",
    text: "Credit models should be specified, tested, and monitored with transparent assumptions rather than treated as opaque scoring machinery.",
  },
  {
    title: "Causal AI",
    text: "Responsible credit decisions require attention to causal structure, policy constraints, and the difference between prediction and justification.",
  },
  {
    title: "Open standards",
    text: "Shared definitions, documentation, and validation practices make credit systems easier to inspect, compare, and improve.",
  },
];

export default function WhatIsOpenCreditScoringPage() {
  return (
    <section className="bg-surface pb-16 pt-36 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-[1.02] text-midnight md:text-6xl">
            What is Open Credit Scoring?
          </h1>
          <p className="mt-6 text-lg leading-8 text-body">
            Open Credit Scoring is an AI research and standards initiative to
            develop the mathematical foundations for trustworthy credit
            decisions.
          </p>
          <p className="mt-5 leading-7 text-body">
            The goal is to make credit decisioning more transparent,
            explainable, auditable, and grounded in rigorous model governance.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {foundations.map((item) => (
            <article
              className="rounded-md border border-line bg-white/80 p-6 shadow-sm shadow-midnight/[0.03]"
              key={item.title}
            >
              <h2 className="text-lg font-bold text-midnight">{item.title}</h2>
              <p className="mt-3 text-sm leading-6 text-body">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
