import type { ReactNode } from 'react';

export type LogoKey = 'vortex' | 'nexo' | 'momentum' | 'luna' | 'horizon' | 'sync';

interface ProjectLogoProps {
  name: LogoKey;
  className?: string;
}

// Original, generic geometric marks — one per case study, tied to what the
// project name evokes (a swirl for "Vortex", a crescent for "Luna", a
// planet bisected by a horizon line for "Horizon"...). Pure currentColor
// strokes/fills so every mark can be recolored uniformly wherever it's
// used (see OrbitalLogo) instead of reading as six unrelated logos.
const paths: Record<LogoKey, ReactNode> = {
  vortex: (
    <g strokeLinecap="round">
      <path d="M24 6c9 2 14 8 14 16" transform="rotate(0 24 24)" />
      <path d="M24 6c9 2 14 8 14 16" transform="rotate(120 24 24)" />
      <path d="M24 6c9 2 14 8 14 16" transform="rotate(240 24 24)" />
    </g>
  ),
  nexo: <path d="M12 34V14l24 20V14" strokeLinecap="round" strokeLinejoin="round" />,
  momentum: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 12l12 12-12 12" />
      <path d="M26 12l12 12-12 12" />
    </g>
  ),
  luna: (
    <path
      d="M42 25.58A18 18 0 1 1 22.42 6 14 14 0 0 0 42 25.58z"
      fill="currentColor"
      stroke="none"
    />
  ),
  horizon: (
    <g strokeLinecap="round">
      <circle cx="24" cy="24" r="13" />
      <line x1="5" y1="24" x2="43" y2="24" />
    </g>
  ),
  sync: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 20a10 10 0 0 1 18-6l3-3" />
      <path d="M35 12v7h-7" />
      <path d="M34 28a10 10 0 0 1-18 6l-3-3" />
      <path d="M13 36v-7h7" />
    </g>
  ),
};

export default function ProjectLogo({ name, className = 'h-7 w-7' }: ProjectLogoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
