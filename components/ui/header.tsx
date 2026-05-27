import Link from "next/link";
import Logo from "./logo";

const navItems = [
  ["Research", "/research"],
  ["Projects", "/projects"],
  ["News", "/news"],
  ["About", "/about"],
];

export default function Header() {
  return (
    <header className="fixed top-0 z-30 w-full border-b border-slate-200 bg-white/95 shadow-lg shadow-slate-950/[0.04] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Logo />

        <nav className="flex items-center gap-4 text-sm font-semibold sm:gap-6">
          {navItems.map(([label, href]) => (
            <Link
              className="text-slate-600 transition hover:text-slate-950"
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
