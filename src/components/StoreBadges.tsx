import Link from "next/link";

function AppleGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M16.37 12.78c.02 2.52 2.2 3.36 2.23 3.37-.02.06-.35 1.2-1.15 2.37-.69 1.02-1.41 2.03-2.55 2.05-1.11.02-1.47-.66-2.75-.66-1.28 0-1.68.64-2.73.68-1.09.04-1.93-1.1-2.63-2.11-1.43-2.08-2.53-5.87-1.06-8.43.73-1.27 2.04-2.08 3.46-2.1 1.08-.02 2.09.72 2.75.72.66 0 1.89-.89 3.19-.76.54.02 2.07.22 3.05 1.65-.08.05-1.82 1.07-1.81 3.22ZM14.3 4.84c.58-.71.98-1.7.87-2.69-.84.04-1.86.56-2.46 1.27-.54.63-1.01 1.64-.88 2.6.94.08 1.89-.47 2.47-1.18Z" />
    </svg>
  );
}

/** Full-colour Play mark for light surfaces; flat green on dark ones. */
function PlayGlyph({ className = "", flat = false }: { className?: string; flat?: boolean }) {
  if (flat) {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden>
        <path d="M3.6 2.3a1 1 0 0 0-.6.92v17.56a1 1 0 0 0 .6.92l10.9-9.7L3.6 2.3Z" fill="#00b86b" />
        <path d="M14.5 12 3.6 21.7a1 1 0 0 0 .9-.05l15.9-9.09a1 1 0 0 0 0-1.74L4.5 1.73a1 1 0 0 0-.9-.05L14.5 12Z" fill="#00b86b" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path d="M3.6 2.3a1 1 0 0 0-.6.92v17.56a1 1 0 0 0 .6.92l9.5-9.7L3.6 2.3Z" fill="#00c3ff" />
      <path d="M17.9 9.3 14.6 7.4 4.5 1.63a1 1 0 0 0-.9-.05l9.5 9.7 4.8-1.98Z" fill="#00e37a" />
      <path d="m13.1 11.28-9.5 9.7a1 1 0 0 0 .9-.05l10.1-5.77 3.3-1.9-4.8-1.98Z" fill="#ff3a44" />
      <path d="m17.9 9.3-4.8 1.98 4.8 1.98 2.6-1.49a1 1 0 0 0 0-1.74L17.9 9.3Z" fill="#ffc700" />
    </svg>
  );
}

type Tone = "light" | "dark";

export default function StoreBadges({
  tone = "light",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const light = tone === "light";

  const shell =
    "inline-flex h-[60px] w-[220px] items-center gap-3 rounded-[10px] border px-4 transition-colors";

  return (
    <div className={`flex flex-wrap items-center gap-4 ${className}`}>
      <Link
        href="#get-the-app"
        className={`${shell} ${
          light
            ? "border-ink/25 bg-white text-ink hover:border-ink/50"
            : "border-white/40 bg-transparent text-white hover:border-white/70"
        }`}
      >
        <AppleGlyph className="h-8 w-8 shrink-0" />
        <span className="flex flex-col leading-none">
          <span className="text-[11px] font-medium opacity-70">
            Download on the
          </span>
          <span className="mt-1 text-[19px] font-semibold">App Store</span>
        </span>
      </Link>

      <Link
        href="#get-the-app"
        className={`${shell} ${
          light
            ? "border-ink/25 bg-white text-ink hover:border-ink/50"
            : "border-white/40 bg-transparent text-brand hover:border-white/70"
        }`}
      >
        <PlayGlyph className="h-8 w-8 shrink-0" flat={!light} />
        <span className="flex flex-col leading-none">
          <span
            className={`text-[11px] font-medium ${
              light ? "opacity-70" : "text-white/70"
            }`}
          >
            GET IT ON
          </span>
          <span className="mt-1 text-[19px] font-semibold">Google play</span>
        </span>
      </Link>
    </div>
  );
}
