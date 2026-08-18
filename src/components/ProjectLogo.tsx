import type { ReactNode } from 'react';

export type LogoKey = 'vortex' | 'nexo' | 'momentum' | 'luna' | 'horizon' | 'sync';

interface ProjectLogoProps {
  name: LogoKey;
  className?: string;
}

// Original, generic geometric marks — one per case study, tied to what the
// project name evokes (a swirl for "Vortex", a crescent for "Luna", a
// sunrise for "Horizon"...). Deliberately monochrome / currentColor so
// every card renders its mark in the same palette as the rest of the
// site, regardless of the card's own gradient — that's what keeps them
// reading as one cohesive set while scrolling instead of six random logos.
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
  luna: <path d="M28 8a16 16 0 1 0 0 32 12 12 0 0 1 0-32z" fill="currentColor" stroke="none" />,
  horizon: (
    <g strokeLinecap="round">
      <path d="M12 26a12 12 0 0 1 24 0" fill="currentColor" stroke="none" />
      <line x1="6" y1="34" x2="42" y2="34" />
      <line x1="11" y1="40" x2="37" y2="40" />
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
