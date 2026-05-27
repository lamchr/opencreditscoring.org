import Link from "next/link";
import Logo from "./logo";

const links = [
  ["Model", "#model"],
  ["Pilot", "#pilot"],
  ["Email", "mailto:hello@opencreditscoring.org"],
];

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between ${
            border ? "border-t border-slate-200" : ""
          }`}
        >
          <div>
            <Logo />
            <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
              Open infrastructure for transparent, auditable, and explainable
              credit scoring.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-semibold">
            {links.map(([label, href]) => (
              <Link
                className="text-slate-600 transition hover:text-slate-950"
                href={href}
                key={label}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-slate-200 py-5 text-sm text-slate-500">
          © 2026 Open Credit Scoring. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
