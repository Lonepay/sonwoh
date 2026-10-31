import Link from "next/link";

/** The Sonwoh mark: a green disc with a white bolt. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center rounded-full bg-brand ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-[55%] w-[55%]" fill="none">
        <path
          d="M13.8 2.2 5.4 13.1a.6.6 0 0 0 .47.97h4.3l-.97 7.73a.6.6 0 0 0 1.06.44l8.4-10.9a.6.6 0 0 0-.47-.97h-4.3l.97-7.73a.6.6 0 0 0-1.06-.44Z"
          fill="#ffffff"
        />
      </svg>
    </span>
  );
}

export default function Logo({
  className = "",
  wordmark = true,
  tone = "light",
}: {
  className?: string;
  wordmark?: boolean;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Sonwoh home"
    >
      <LogoMark className="h-9 w-9" />
      {wordmark && (
        <span
          className={`font-display text-[26px] font-bold tracking-tight ${
            tone === "dark" ? "text-white" : "text-ink"
          }`}
        >
          sonwoh
        </span>
      )}
    </Link>
  );
}
