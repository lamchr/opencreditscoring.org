import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2"
      aria-label="Open Credit Scoring"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <rect width="32" height="32" rx="8" className="fill-slate-950" />
        <path
          className="fill-teal-300"
          d="M8 18.2 13.1 23 24 10.8 21.8 9 12.9 18.9 10 16.2 8 18.2Z"
        />
        <path
          className="fill-amber-300"
          d="M8 9.5h8.5v2.8H8V9.5Zm0 5.1h5.7v2.8H8v-2.8Z"
        />
      </svg>
      <span className="text-sm font-bold text-slate-950 sm:text-base">
        Open Credit Scoring
      </span>
    </Link>
  );
}
