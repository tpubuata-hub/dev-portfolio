/**
 * Absolutely-positioned first child for a `position: relative` section.
 * Blurs whatever shows through behind the section (the LiquidChrome
 * background) most strongly right at the section's top/bottom divider
 * lines, fading toward the center — but never disappearing entirely: the
 * mask bottoms out at 35% in the middle instead of 0%.
 */
export default function SectionBlur() {
  return <div className="section-edge-blur" aria-hidden="true" />;
}
