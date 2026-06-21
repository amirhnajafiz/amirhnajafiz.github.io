// Self-contained inline SVG icons — replaces the Font Awesome CDN.
// Each icon inherits the current text color via `fill`/`stroke`.
import type { SVGProps } from "react";
import type { DetailIcon, IconName } from "../types/content";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

/* ----- UI icons ----- */
export const UserIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const CapIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M22 10 12 5 2 10l10 5 10-5Z" />
    <path d="M6 12v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5" />
  </svg>
);

export const PaperIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M8 13h8M8 17h8M8 9h2" />
  </svg>
);

export const StackIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="m12 2 9 5-9 5-9-5 9-5Z" />
    <path d="m3 12 9 5 9-5" />
    <path d="m3 17 9 5 9-5" />
  </svg>
);

export const PencilIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

export const ArrowUpIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M12 19V5" />
    <path d="m5 12 7-7 7 7" />
  </svg>
);

export const ChevronDownIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

export const ExternalIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

export const DownloadIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="M7 10l5 5 5-5" />
    <path d="M12 15V3" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

export const CloseIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const BriefcaseIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <rect width="20" height="14" x="2" y="7" rx="2" />
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    <path d="M2 13h20" />
  </svg>
);

export const MapPinIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const BuildingIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <rect width="16" height="20" x="4" y="2" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
  </svg>
);

/** Cute icon for the students / mentees section — a little sprout. */
export const SproutIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M7 20h10" />
    <path d="M12 20c0-5 0-8 0-10" />
    <path d="M12 10C12 6 9 4 5 4c0 4 3 6 7 6Z" />
    <path d="M12 13c0-3 2.5-5 6-5 0 3.5-2.5 5-6 5Z" />
  </svg>
);

export const SparklesIcon = (p: IconProps) => (
  <svg {...stroke(p)}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
    <path d="m6.5 6.5 2 2M15.5 15.5l2 2M17.5 6.5l-2 2M8.5 15.5l-2 2" />
  </svg>
);

/* ----- Brand icons (filled) ----- */
const GitHubIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1.7 1.9 2.6 1.4.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.3-5.2-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.2 5.7.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5Z" />
  </svg>
);

const LinkedInIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

const MediumIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12Zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42S20.96 8.46 20.96 12ZM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12Z" />
  </svg>
);

const OrcidIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.516.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z" />
  </svg>
);

const ScholarIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M5.242 13.769 0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
  </svg>
);

const ResearchGateIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <text
      x="12"
      y="18"
      textAnchor="middle"
      fontSize="16"
      fontWeight="700"
      letterSpacing="-1.5"
      fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
    >
      RG
    </text>
  </svg>
);

const BRAND_ICONS: Record<IconName, (p: IconProps) => JSX.Element> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  medium: MediumIcon,
  orcid: OrcidIcon,
  scholar: ScholarIcon,
  researchgate: ResearchGateIcon,
};

/** Render a brand icon by name (used for social links from JSON). */
export function BrandIcon({ name, ...props }: { name: IconName } & IconProps) {
  const Icon = BRAND_ICONS[name];
  return Icon ? <Icon {...props} /> : null;
}

const DETAIL_ICONS: Record<DetailIcon, (p: IconProps) => JSX.Element> = {
  role: BriefcaseIcon,
  location: MapPinIcon,
  office: BuildingIcon,
};

/** Render the small icon shown next to a profile detail (role/location/office). */
export function DetailGlyph({
  name,
  ...props
}: { name: DetailIcon } & IconProps) {
  const Icon = DETAIL_ICONS[name];
  return Icon ? <Icon {...props} /> : null;
}
