export const metadata = {
  title: "About - Open Credit Scoring",
  description:
    "About Open Credit Scoring and its public-interest credit decisioning mission.",
};

export default function AboutPage() {
  return (
    <section className="bg-surface pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-[1.02] text-midnight md:text-6xl">
            About
          </h1>
          <p className="mt-6 text-lg leading-8 text-body">
            Open Credit Scoring is a public-interest effort to make credit risk
            models easier to inspect, explain, validate, and govern.
          </p>
          <p className="mt-5 leading-7 text-body">
            The work focuses on transparent model documentation, responsible
            underwriting infrastructure, and practical tools that help connect
            credit decisioning with fair lending expectations.
          </p>
        </div>
      </div>
    </section>
  );
}
