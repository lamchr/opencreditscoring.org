export const metadata = {
  title: "News - Open Credit Scoring",
  description:
    "Updates, announcements, and notes from Open Credit Scoring.",
};

export default function NewsPage() {
  return (
    <section className="bg-white pb-16 pt-28 md:pb-20 md:pt-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold leading-[1.02] md:text-6xl">
            News
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Updates on research releases, pilot projects, model documentation,
            and public-interest credit scoring infrastructure.
          </p>
        </div>
        <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
          <h2 className="text-lg font-bold">More updates coming soon</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
            This page will collect announcements, research notes, and project
            milestones as Open Credit Scoring develops.
          </p>
        </div>
      </div>
    </section>
  );
}
