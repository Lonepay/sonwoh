import ICONS from "@/lib/figma-icons.json";

/**
 * The exact Iconify icons the designer placed in the Figma file, fetched by
 * the names recorded on each node (e.g. "tdesign:money") and inlined so there
 * is no runtime dependency on the Iconify CDN.
 */
export type IconName = keyof typeof ICONS;

export default function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: IconName;
  className?: string;
}) {
  const icon = ICONS[name];
  if (!icon) return null;

  return (
    <svg
      viewBox={icon.viewBox}
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
