import ICONS from "@/lib/figma-icons.json";

/**
 * The exact Iconify icons the designer placed in the Figma file, fetched by
 * the names recorded on each node (e.g. "tdesign:money") and inlined so there
 * is no runtime dependency on the Iconify CDN.
 */
  ),
  creditcard: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 9.8h19M6 14.6h3.5M14 14.6h4" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.4 12.2 2.5 2.5 4.7-5.2" />
    </>
  ),
};

export default function Icon({
  name,
  className = "h-6 w-6",
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const filled = name === "bolt";
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {PATHS[name]}
    </svg>
  );
}
