import Link from "next/link";
import Logo from "./logo";

const navItems = [
  ["Open Credit Scoring", "/open-credit-scoring"],
  ["Research", "/research"],
  ["Projects", "/projects"],
  ["Standards", "/standards"],
  ["News", "/news"],
  ["About", "/about"],
];

export default function Header() {
  return (
    <header className="fixed top-0 z-30 w-full border-b border-line bg-surface/95 shadow-sm shadow-midnight/[0.04] backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-6xl flex-col gap-3 px-4 py-3 sm:px-6 md:flex-row md:items-center md:justify-between">
        <Logo />

        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold sm:gap-x-6">
          {navItems.map(([label, href]) => (
            <Link
              className="text-body transition hover:text-teal-accent"
              href={href}
              key={label}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
