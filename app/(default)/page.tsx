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
      <section className="relative isolate overflow-hidden bg-midnight pt-28 text-white md:pt-36">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(120deg,rgba(20,184,166,.22),transparent_46%),linear-gradient(180deg,rgba(248,250,252,.10),transparent_40%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-px bg-linear-to-r from-transparent via-teal-accent/40 to-transparent" />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:pb-20">
          <div data-aos="fade-up">
            <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] md:text-6xl">
              Open Credit Scoring
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-surface/82">
              An AI research and standards initiative to develop the
              mathematical foundations for trustworthy credit decisions.
            </p>
          </div>

          <div
            className="overflow-hidden rounded-md shadow-xl shadow-midnight/30 ring-1 ring-teal-accent/15"
            data-aos="fade-left"
          >
            <Image
              src={HeroImage}
              alt="Causal model positioned between antidiscrimination law and supervised machine learning"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </section>

      <section id="model" className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              A scoring system people can inspect before they trust it.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {principles.map((item) => (
              <article
                className="rounded-md border border-line bg-white/80 p-6 shadow-sm shadow-midnight/[0.03]"
                key={item.title}
                data-aos="fade-up"
              >
                <h3 className="text-lg font-bold text-midnight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-body">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Built for lenders, researchers, and civic technology teams.
            </h2>
            <p className="mt-5 leading-7 text-body">
              Open Credit Scoring gives teams a common language for credit data,
              model validation, and borrower-facing explanations. Use it to
              benchmark internal models, launch transparent pilots, or publish
              reproducible research.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {modules.map((module) => (
              <div
                className="rounded-md border border-line bg-white/85 p-4 font-semibold text-midnight shadow-sm shadow-midnight/[0.03] transition hover:border-teal-accent/50"
                key={module}
                data-aos="fade-up"
              >
                {module}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-3">
            {metrics.map(([value, label]) => (
              <div
                className="rounded-md border border-line border-l-4 border-l-gold bg-white/80 p-6 shadow-sm shadow-midnight/[0.03]"
                key={value}
                data-aos="fade-up"
              >
                <p className="text-4xl font-bold text-midnight">{value}</p>
                <p className="mt-3 text-sm leading-6 text-body">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pilot"
        className="bg-[linear-gradient(135deg,#0B1F33_0%,#0D2A3D_58%,#0B1F33_100%)] py-16 text-white md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="max-w-3xl text-3xl font-bold md:text-4xl">
              Bring transparent credit scoring into your next underwriting
              pilot.
            </h2>
          </div>
          <a
            className="btn bg-teal-accent text-midnight shadow-none hover:bg-teal-accent/90"
            href="mailto:hello@opencreditscoring.org"
          >
            Contact the team
          </a>
        </div>
      </section>
    </>
  );
}
