export const metadata = {
  title: "Projects - Open Credit Scoring",
  description:
    "Projects and working prototypes from the Open Credit Scoring initiative.",
};

const projects = [
  {
    title: "Open model cards",
    text: "Structured documentation for model purpose, features, validation limits, and governance controls.",
  },
  {
    title: "Reason-code library",
    text: "Borrower-facing explanations mapped from score drivers to clear adverse-action language.",
  },
  {
    title: "Validation workspace",
    text: "Tools for monitoring drift, bias, and model version behavior before and after launch.",
  },
];

export default function ProjectsPage() {
  return (
    <section className="bg-surface pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-[1.02] text-midnight md:text-6xl">
            Projects
          </h1>
          <p className="mt-6 text-lg leading-8 text-body">
            Practical building blocks for lenders, researchers, and civic
            technology teams working toward more auditable credit decisions.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article
              className="rounded-md border border-line bg-white/80 p-6 shadow-sm shadow-midnight/[0.03]"
              key={project.title}
            >
              <h2 className="text-lg font-bold text-midnight">
                {project.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-body">
                {project.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
