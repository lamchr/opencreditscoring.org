import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import HeroImage from "@/public/images/cylinder-and-shadows.png";

export const metadata = {
  title: "Open Credit Scoring",
  description:
    "Building open infrastructure for trustworthy AI credit decision systems.",
};

const proprietaryCards = [
  "Closed systems limit reproducibility",
  "Incumbents optimize for stability, not paradigm shifts",
  "Trustworthy AI requires open technical infrastructure",
];

const decisionQuestions = [
  "Why was a decision made?",
  "Which data actually caused the result?",
  "Is the model relying on a proxy for a protected attribute?",
  "Would the decision change under a fair counterfactual?",
  "How will the system affect consumers and markets over time?",
];

const approachAreas = [
  "Causal AI for credit underwriting",
  "Fair lending and antidiscrimination analysis",
  "Alternative data evaluation",
  "Explainable and governable AI systems",
  "Systems thinking for financial AI",
  "Open standards for high-stakes decision systems",
];

const audience = [
  "Researchers",
  "Financial institutions",
  "Standards experts",
  "Policymakers",
  "Consumer advocates",
  "Technology builders",
];

function LightCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="rounded-md border border-line bg-white/85 p-4 font-semibold text-midnight shadow-sm shadow-midnight/[0.03]"
      data-aos="fade-up"
    >
      {children}
    </div>
  );
}

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
              Building open infrastructure for trustworthy AI credit decision
              systems.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-surface/82">
              Open Credit Scoring advances causal AI, open standards, and
              governance-by-design for credit scoring and underwriting.
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

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Why proprietary credit scoring slows innovation
            </h2>
            <p className="mt-5 leading-7 text-body">
              Credit scoring has become critical financial infrastructure, but
              much of today's infrastructure remains proprietary, opaque, and
              difficult to independently evaluate. Closed scoring systems can
              limit scientific reproducibility, slow ecosystem-wide innovation,
              and make it harder to build AI systems that are transparent,
              governable, and trusted.
            </p>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-3">
            {proprietaryCards.map((card) => (
              <LightCard key={card}>{card}</LightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Credit scoring needs a new foundation.
            </h2>
            <p className="mt-5 leading-7 text-body">
              Credit scores shape access to mortgages, auto loans, credit
              cards, housing, and economic opportunity. Yet the technical
              infrastructure behind these decisions remains difficult to
              inspect, contest, and govern. As AI enters underwriting, the
              challenge is no longer just better prediction. The challenge is
              building decision systems that are transparent, causal, auditable,
              and safe by design.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Beyond black-box prediction
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                Most credit scoring systems are built around statistical
                prediction.
              </p>
              <p>
                But high-stakes financial decisions require more than accurate
                predictions. They require systems that can answer deeper
                questions.
              </p>
              <p>
                Open Credit Scoring investigates how causal models can help
                answer these questions.
              </p>
            </div>
          </div>
          <div className="grid gap-3">
            {decisionQuestions.map((question) => (
              <LightCard key={question}>{question}</LightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-[linear-gradient(180deg,#F8FAFC_0%,#EEF6F6_100%)] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Our approach
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>The goal is not simply to create another credit score.</p>
              <p>
                The goal is to help establish an open technical foundation for
                trustworthy financial AI.
              </p>
              <p>We are developing a research agenda around:</p>
              <Link
                className="inline-flex rounded-md bg-teal-accent px-5 py-3 text-sm font-bold text-midnight shadow-sm shadow-teal-accent/20 transition hover:bg-teal-accent/85"
                href="/standards/"
              >
                Explore the Standards Work
              </Link>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {approachAreas.map((area) => (
              <LightCard key={area}>{area}</LightCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-midnight md:text-4xl">
              Why now?
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-body">
              <p>
                AI is rapidly entering credit underwriting, lending, insurance,
                housing, and other high-stakes financial systems.
              </p>
              <p>
                At the same time, institutions face growing pressure to improve
                transparency, reduce bias, manage regulatory risk, and maintain
                public trust.
              </p>
              <p className="border-l-4 border-gold bg-white/80 py-3 pl-5 font-semibold text-midnight shadow-sm shadow-midnight/[0.03]">
                Financial AI should be accurate, transparent, governable, and
                safe by design.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#0B1F33_0%,#0D2A3D_58%,#0B1F33_100%)] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Build the future of trustworthy financial AI
            </h2>
            <div className="mt-5 space-y-5 leading-7 text-surface/82">
              <p>
                Open Credit Scoring is for researchers, financial institutions,
                standards experts, policymakers, consumer advocates, and
                technology builders working to modernize credit decision
                systems.
              </p>
              <p>
                We are building an open ecosystem for the next generation of
                credit scoring and financial AI.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {audience.map((item) => (
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
