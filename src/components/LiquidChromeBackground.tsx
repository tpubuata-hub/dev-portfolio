import LiquidChrome from './LiquidChrome';

// Stable reference so the WebGL context isn't torn down and rebuilt on
// every parent re-render (LiquidChrome's effect depends on this array).
const BASE_COLOR: [number, number, number] = [0.08627450980392157, 0.08627450980392157, 0.11372549019607843];

/**
 * Pins <LiquidChrome /> as a full-viewport ambient background behind the
 * page content. Positioned with inline styles (not a class) so it can't
 * lose a cascade fight with Tailwind utilities.
 */
export default function LiquidChromeBackground() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100vw',
        height: '100vh',
      }}
    >
      <LiquidChrome baseColor={BASE_COLOR} speed={0.07} amplitude={0.27} interactive={false} />
    </div>
  );
}
