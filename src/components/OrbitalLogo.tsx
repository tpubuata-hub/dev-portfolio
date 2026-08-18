import { useEffect, useRef, useState } from 'react';
import ProjectLogo, { type LogoKey } from './ProjectLogo';

interface RingConfig {
  w: number;
  h: number;
  tilt: number;
  baseSpeed: number; // deg/s while idle
  hoverSpeed: number; // deg/s while hovered (not active)
  activeSpeed: number; // deg/s once toggled active by a click/tap
  dir: 1 | -1;
  particles: number[]; // starting angle offsets (deg) around the ellipse
}

// Balanced elliptical rings, each tilted differently for a sense of depth,
// each spinning at its own speed and (mostly) opposing direction so the
// system reads as orbits rather than one rigid spinning wheel.
const RINGS: RingConfig[] = [
  { w: 108, h: 84, tilt: -20, baseSpeed: 3, hoverSpeed: 12, activeSpeed: 30, dir: 1, particles: [35] },
  { w: 150, h: 118, tilt: 14, baseSpeed: 2, hoverSpeed: 9, activeSpeed: 22, dir: -1, particles: [150, 265] },
  { w: 192, h: 150, tilt: -8, baseSpeed: 1.2, hoverSpeed: 5, activeSpeed: 14, dir: 1, particles: [95] },
];

// Same idea, flattened for Momentum ("орбиты слегка вытянуты по горизонтали").
const RINGS_WIDE: RingConfig[] = [
  { w: 124, h: 70, tilt: -8, baseSpeed: 3, hoverSpeed: 12, activeSpeed: 30, dir: 1, particles: [35] },
  { w: 172, h: 96, tilt: 5, baseSpeed: 2, hoverSpeed: 9, activeSpeed: 22, dir: -1, particles: [150, 265] },
  { w: 218, h: 122, tilt: -3, baseSpeed: 1.2, hoverSpeed: 5, activeSpeed: 14, dir: 1, particles: [95] },
];

interface OrbitalLogoProps {
  logo: LogoKey;
  hovered: boolean;
  wide?: boolean;
}

/**
 * A logo suspended at the center of a small "digital solar system": thin
 * tilted elliptical orbits with glowing particles, spinning slowly around
 * it. Idle = nearly still. Hovering the card nudges the rotation awake.
 * Clicking/tapping the mark toggles a persistent, slower-than-you'd-expect
 * "activated" spin that keeps going until it's clicked again — eased in
 * and out every frame so speed changes never snap.
 */
export default function OrbitalLogo({ logo, hovered, wide = false }: OrbitalLogoProps) {
  const [active, setActive] = useState(false);
  const hoveredRef = useRef(hovered);
  const activeRef = useRef(active);
  hoveredRef.current = hovered;
  activeRef.current = active;

  const rings = wide ? RINGS_WIDE : RINGS;
  const ringRefs = useRef<(HTMLDivElement | null)[]>([]);
  const angles = useRef(rings.map(() => 0));
  const speeds = useRef(rings.map(() => 0));

  useEffect(() => {
    let raf = 0;
    let lastTs: number | null = null;

    const tick = (ts: number) => {
      if (lastTs === null) lastTs = ts;
      const dt = Math.min((ts - lastTs) / 1000, 0.05);
      lastTs = ts;

      rings.forEach((ring, i) => {
        const magnitude = activeRef.current
          ? ring.activeSpeed
          : hoveredRef.current
            ? ring.baseSpeed + ring.hoverSpeed
            : ring.baseSpeed;
        const target = magnitude * ring.dir;

        // Ease current speed toward target instead of snapping — this is
        // what makes hover/click transitions feel like acceleration
        // rather than a switch flipping.
        speeds.current[i] += (target - speeds.current[i]) * Math.min(dt * 1.6, 1);
        angles.current[i] += speeds.current[i] * dt;

        const el = ringRefs.current[i];
        if (el) {
          el.style.transform = `translate(-50%, -50%) rotate(${ring.tilt + angles.current[i]}deg)`;
        }
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [rings]);

  const toggleActive = () => setActive((v) => !v);

  return (
    <div
      className="relative flex h-[220px] w-[220px] shrink-0 items-center justify-center"
      role="button"
      tabIndex={0}
      aria-pressed={active}
      aria-label={`${logo} — активировать анимацию орбит`}
      onClick={toggleActive}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleActive();
        }
      }}
    >
      {rings.map((ring, i) => (
        <div
          key={i}
          ref={(el) => {
            ringRefs.current[i] = el;
          }}
          className="absolute left-1/2 top-1/2 rounded-full border border-violet-400/25"
          style={{ width: ring.w, height: ring.h }}
        >
          {ring.particles.map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const left = 50 + 50 * Math.cos(rad);
            const top = 50 + 50 * Math.sin(rad);
            return (
              <span
                key={angle}
                className="absolute h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  boxShadow: '0 0 8px 2px rgba(168,85,247,0.85)',
                }}
              />
            );
          })}
        </div>
      ))}

      <div
        className={`orbital-core relative z-10 flex h-[72px] w-[72px] cursor-pointer items-center justify-center rounded-2xl border backdrop-blur-md transition-all duration-500 ${
          active
            ? 'scale-110 border-violet-400/70 bg-violet-500/20 shadow-[0_0_45px_-6px_rgba(168,85,247,0.9)]'
            : hovered
              ? 'scale-105 border-violet-400/55 bg-violet-500/15 shadow-[0_0_36px_-8px_rgba(168,85,247,0.7)]'
              : 'border-violet-500/30 bg-violet-500/10 shadow-[0_0_22px_-8px_rgba(139,92,246,0.5)]'
        }`}
      >
        <ProjectLogo name={logo} className="h-8 w-8 text-violet-200" />
      </div>
    </div>
  );
}
