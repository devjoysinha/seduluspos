export const BRAND_PATH =
  "M26.5 13.5C24.8 11.2 22.4 10 19.8 10 15.6 10 12.8 12.2 12.8 15.2c0 7 14.6 3.2 14.6 10.4 0 3.2-3.2 5.4-7.2 5.4-3.4 0-6-1.2-7.8-3.4";

export function BrandGlyph() {
  return (
    <svg viewBox="0 0 40 40">
      <path d={BRAND_PATH} />
    </svg>
  );
}

export default function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <span className={`brand-mark${small ? " brand-mark--small" : ""}`} aria-hidden="true">
      <BrandGlyph />
    </span>
  );
}
