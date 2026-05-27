import Image from "next/image";
import HeroImage from "@/public/images/cylinder-and-shadows.png";

export const metadata = {
  title: "Open Credit Scoring",
  description:
    "Transparent credit scoring infrastructure for lenders, researchers, and public-interest builders.",
};

const principles = [
  {
    title: "Open by design",
    text: "Model cards, feature definitions, validation notes, and policy limits are documented so teams can understand why a score moves.",
  },
  {
    title: "Auditable decisions",
    text: "Every score can be traced to source data, transformation logic, and the versioned model used at decision time.",
  },
  {
    title: "Fair lending ready",
    text: "Bias monitoring, adverse-action reason mapping, and drift checks are treated as first-class operating requirements.",
  },
];

const modules = [
  "Data contribution standards",
  "Explainable scorecards",
  "Model validation workspace",
  "Reason-code library",
  "Portfolio monitoring",
  "Compliance exports",
];

const metrics = [
  ["8.4M", "synthetic and contributed records mapped to open schemas"],
  ["31", "policy and model checks before a score is released"],
  ["14 days", "typical cycle from validation package to pilot launch"],
];

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-slate-950 pt-28 text-white md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(15,118,110,.24),transparent_42%),linear-gradient(180deg,rgba(255,255,255,.08),transparent_38%)]" />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:pb-20">
          <div data-aos="fade-up">
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/8 px-3 py-1 text-sm font-medium text-teal-100">
              Transparent infrastructure for responsible lending
            </p>
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] md:text-6xl">
              Open Credit Scoring
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              A public-interest credit scoring platform that makes risk models
              inspectable, explainable, and easier to govern without slowing
              down modern underwriting teams.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className="btn bg-teal-400 text-slate-950 shadow-teal-950/20 hover:bg-teal-300"
                href="#pilot"
              >
                Start a pilot
              </a>
              <a
                className="btn border border-white/15 bg-white/10 text-white shadow-none hover:bg-white/15"
                href="#model"
              >
                Explore the model
              </a>
            </div>
          </div>

          <div
            className="overflow-hidden rounded-lg border border-white/10 bg-white/[.06] p-2 shadow-2xl shadow-black/30"
            data-aos="fade-left"
          >
            <Image
              src={HeroImage}
              alt="Causal model positioned between antidiscrimination law and supervised machine learning"
              className="h-auto w-full rounded-md"
              priority
            />
          </div>
        </div>
      </section>

      <section id="model" className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-teal-700">
              Model governance
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              A scoring system people can inspect before they trust it.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {principles.map((item) => (
              <article
                className="rounded-lg border border-slate-200 bg-slate-50 p-6"
                key={item.title}
                data-aos="fade-up"
              >
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-sky-700">
              Shared operating layer
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Built for lenders, researchers, and civic technology teams.
            </h2>
            <p className="mt-5 leading-7 text-slate-700">
              Open Credit Scoring gives teams a common language for credit data,
              model validation, and borrower-facing explanations. Use it to
              benchmark internal models, launch transparent pilots, or publish
              reproducible research.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {modules.map((module) => (
              <div
                className="rounded-lg border border-slate-200 bg-white p-4 font-semibold text-slate-800 shadow-sm"
                key={module}
                data-aos="fade-up"
              >
                {module}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {metrics.map(([value, label]) => (
              <div
                className="border-l-4 border-amber-400 bg-slate-50 p-6"
                key={value}
                data-aos="fade-up"
              >
                <p className="text-4xl font-bold text-slate-950">{value}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pilot" className="bg-slate-950 py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-teal-200">
              Launch responsibly
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold md:text-4xl">
              Bring transparent credit scoring into your next underwriting
              pilot.
            </h2>
          </div>
          <a
            className="btn bg-white text-slate-950 shadow-none hover:bg-slate-100"
            href="mailto:hello@opencreditscoring.org"
          >
            Contact the team
          </a>
        </div>
      </section>
    </>
  );
}
