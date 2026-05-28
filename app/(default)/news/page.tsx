export const metadata = {
  title: "News - Open Credit Scoring",
  description:
    "Updates on Open Credit Scoring, causal AI research, financial AI governance, and trustworthy underwriting systems.",
};

const updates = [
  {
    date: "May 28, 2026",
    title: "Initiative website published",
    body: "Open Credit Scoring now has a public website describing the initiative's focus on causal AI, open standards, and governance-by-design for credit scoring and underwriting.",
  },
  {
    date: "May 28, 2026",
    title: "Research agenda outlined",
    body: "The Research section now summarizes the initiative's direction across causal inference, causal fairness, explainability, governance architectures, and systems thinking for financial AI.",
  },
  {
    date: "May 28, 2026",
    title: "Standards workstream introduced",
    body: "The Standards section frames the need for open interfaces, evaluation methods, governance layers, and technical safeguards for high-stakes financial AI systems.",
  },
  {
    date: "May 28, 2026",
    title: "Project areas organized",
    body: "The Projects section organizes workstreams around causal underwriting, antidiscrimination analysis, alternative data evaluation, systems thinking, and open standards.",
  },
  {
    date: "May 28, 2026",
    title: "Future updates",
    body: "Future updates may include research notes, technical drafts, standards proposals, educational materials, and collaboration announcements as the initiative develops.",
  },
];

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
              Updates on Open Credit Scoring, causal AI research, financial AI
              governance, and trustworthy underwriting systems.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5">
            {updates.map((update) => (
              <article
                className="rounded-md border border-line bg-white/85 p-6 shadow-sm shadow-midnight/[0.03]"
                key={update.title}
              >
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold">
                  <span className="rounded-sm bg-teal-accent/10 px-2.5 py-1 text-teal-accent">
                    Update
                  </span>
                  <time className="text-body">{update.date}</time>
                </div>
                <h2 className="mt-4 text-2xl font-bold text-midnight md:text-3xl">
                  {update.title}
                </h2>
                <p className="mt-4 max-w-3xl leading-7 text-body">
                  {update.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
