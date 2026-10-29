import Icon, { type IconName } from "./Icon";

/** The reference uses rounded colour tiles rather than one flat accent. */
const TONES: Record<string, string> = {
  blue: "bg-[#2f6bff] text-white",
  green: "bg-brand text-white",
  navy: "bg-ink text-white",
  amber: "bg-[#ffc700] text-ink",
  white: "bg-white text-ink",
};

export default function IconTile({
  icon,
  tile = "green",
  size = "md",
}: {
  icon: IconName;
  tile?: string;
  size?: "md" | "lg";
}) {
  const box = size === "lg" ? "h-[54px] w-[54px]" : "h-[48px] w-[48px]";
  const glyph = size === "lg" ? "h-7 w-7" : "h-6 w-6";
  return (
    <span
      className={`inline-flex ${box} items-center justify-center rounded-[14px] ${
        TONES[tile] ?? TONES.green
      }`}
    >
      <Icon name={icon} className={glyph} />
    </span>
  );
}
