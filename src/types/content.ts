// Type definitions for every JSON file under `src/content/`.
// These are the contract for the site's data — edit the JSON to change content,
// edit these types to change its shape.

/** Icon keys for the small icons shown next to profile details. */
export type DetailIcon = "role" | "location" | "office";

export interface ProfileDetail {
  label: string;
  value: string;
  icon: DetailIcon;
}

export interface Profile {
  name: string;
  shortName: string;
  photo: string;
  tagline: string;
  details: ProfileDetail[];
  email: string;
}

export interface About {
  paragraphs: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

/** A work / industry experience entry. */
export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  /** Employment type — e.g. "Full-time", "Part-time", "Internship". */
  type: string;
  description: string;
}

/** A group of related skills, rendered as a labelled set of tags. */
export interface SkillGroup {
  category: string;
  items: string[];
}

/** A mentored student. */
export interface Student {
  name: string;
  join: string;
  left: string;
}

/** A publication — title, year, a link to the original cite, and its BibTeX. */
export interface Paper {
  title: string;
  year: string;
  url: string;
  bibtex: string;
}

/** A Medium blog post — title, date, and link, shown as a box. */
export interface BlogPost {
  title: string;
  date: string;
  url: string;
}

/** A generic titled link — used by Projects. */
export interface LinkItem {
  content: string;
  url: string;
}

export type IconName =
  | "github"
  | "linkedin"
  | "medium"
  | "orcid"
  | "scholar"
  | "researchgate";

export interface SocialLink {
  platform: string;
  url: string;
  icon: IconName;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Site {
  siteTitle: string;
  logo: string;
  background: string;
  copyright: string;
  nav: NavItem[];
}

/** CV download — `link` points to the résumé file. */
export interface Cv {
  link: string;
}
