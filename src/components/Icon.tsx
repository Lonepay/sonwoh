export type IconName =
  | "bolt"
  | "shield"
  | "swap"
  | "support"
  | "exchange"
  | "transfer"
  | "giftcard"
  | "power"
  | "phone"
  | "more"
  | "card"
  | "creditcard"
  | "check";

const PATHS: Record<IconName, React.ReactNode> = {
  bolt: <path d="M13 2 4.5 13.5H11l-1 8.5L19.5 10H13l1-8Z" />,
  shield: (
    <>
      <path d="M12 2.8 4.8 5.6v6c0 4.6 3.1 8.6 7.2 9.7 4.1-1.1 7.2-5.1 7.2-9.7v-6L12 2.8Z" />
      <path d="m8.9 11.9 2.2 2.3 4-4.5" />
    </>
  ),
  swap: (
    <>
      <path d="M4 8h13l-3.2-3.3M20 16H7l3.2 3.3" />
    </>
  ),
  support: (
    <>
      <path d="M4.5 14v-2a7.5 7.5 0 0 1 15 0v2" />
      <path d="M4.5 13.3h1.8a1 1 0 0 1 1 1v2.9a1 1 0 0 1-1 1H5.6a1.1 1.1 0 0 1-1.1-1.1v-3.8ZM19.5 13.3h-1.8a1 1 0 0 0-1 1v2.9a1 1 0 0 0 1 1h.7a1.1 1.1 0 0 0 1.1-1.1v-3.8Z" />
      <path d="M19.5 18.2v.4a2.6 2.6 0 0 1-2.6 2.6H13" />
    </>
  ),
  exchange: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M10 8.6h3.2a2 2 0 0 1 0 4H10h3.6a2 2 0 0 1 0 4H10M11.6 6.6v12" />
    </>
  ),
  transfer: (
    <>
      <path d="M4 7.8h12.4l-3-3M20 16.2H7.6l3 3" />
      <circle cx="12" cy="12" r="9" strokeOpacity="0.25" />
    </>
  ),
  giftcard: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2.2" />
      <path d="M3 12h18M12 7.5V20" />
      <path d="M12 7.5s-1-3.5-3.2-3.5a1.9 1.9 0 0 0 0 3.5H12Zm0 0s1-3.5 3.2-3.5a1.9 1.9 0 0 1 0 3.5H12Z" />
    </>
  ),
  power: (
    <>
      <path d="M12 3v8.5" />
      <path d="M17.3 6.8a7.2 7.2 0 1 1-10.6 0" />
    </>
  ),
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  more: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="2" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="2" />
      <path d="M17 13.9v6.2M13.9 17h6.2" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 9.8h19" />
      <path d="M6 14.6h3.5" />
    </>
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
