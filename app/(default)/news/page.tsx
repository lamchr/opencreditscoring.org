export const metadata = {
  title: "News - Open Credit Scoring",
  description:
    "Updates, announcements, and notes from Open Credit Scoring.",
};

export default function NewsPage() {
  return (
    <section className="bg-surface pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-[1.02] text-midnight md:text-6xl">
            News
          </h1>
          <p className="mt-6 text-lg leading-8 text-body">
            Updates on research releases, pilot projects, model documentation,
            and public-interest credit scoring infrastructure.
          </p>
        </div>
        <div className="mt-10 rounded-md border border-line bg-white/80 p-6 shadow-sm shadow-midnight/[0.03]">
          <h2 className="text-lg font-bold text-midnight">
            More updates coming soon
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-body">
            This page will collect announcements, research notes, and project
            milestones as Open Credit Scoring develops.
          </p>
        </div>
      </div>
    </section>
  );
}
