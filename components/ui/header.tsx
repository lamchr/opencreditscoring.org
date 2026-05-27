import Link from "next/link";
import Logo from "./logo";

const navItems = [
  ["Model", "#model"],
  ["Pilot", "#pilot"],
  ["Contact", "mailto:hello@opencreditscoring.org"],
];

export default function Header() {
  return (
    <header className="fixed top-0 z-30 w-full border-b border-slate-200 bg-white/95 shadow-lg shadow-slate-950/[0.04] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
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

        <Link
          href="#pilot"
          className="btn-sm bg-slate-950 text-white shadow-none hover:bg-slate-800"
        >
          Start pilot
        </Link>
      </div>
    </header>
  );
}
