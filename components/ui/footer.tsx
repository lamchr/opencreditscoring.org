import Link from "next/link";
import Logo from "./logo";

const links = [
  ["Open Credit Scoring", "/open-credit-scoring"],
  ["Research", "/research"],
  ["Projects", "/projects"],
  ["Standards", "/standards"],
  ["News", "/news"],
  ["About", "/about"],
];

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between ${
            border ? "border-t border-line" : ""
          }`}
        >
          <div>
            <Logo />
            <p className="mt-3 max-w-md text-sm leading-6 text-body">
              Open infrastructure for causal, transparent, auditable, and
              governable credit decision systems.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 text-sm font-semibold">
            {links.map(([label, href]) => (
              <Link
                className="text-body transition hover:text-teal-accent"
                href={href}
                key={label}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-line py-5 text-sm text-body">
          &copy; 2026 Open Credit Scoring. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
