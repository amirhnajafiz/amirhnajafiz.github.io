// Single typed entry point for all site content. Components import from here so
// the JSON files are validated against `src/types/content.ts` at build time.
import type {
  About,
  BlogPost,
  Cv,
  EducationEntry,
  ExperienceEntry,
  LinkItem,
  Paper,
  Profile,
  Site,
  SkillGroup,
  SocialLink,
  Student,
} from "../types/content";

import aboutData from "./about.json";
import blogData from "./blog.json";
import cvData from "./cv.json";
import educationData from "./education.json";
import experienceData from "./experience.json";
import papersData from "./papers.json";
import profileData from "./profile.json";
import projectsData from "./projects.json";
import siteData from "./site.json";
import skillsData from "./skills.json";
import socialData from "./social.json";
import studentsData from "./students.json";

export const profile = profileData as Profile;
export const about = aboutData as About;
export const education = educationData as EducationEntry[];
export const experience = experienceData as ExperienceEntry[];
export const skills = skillsData as SkillGroup[];
export const students = (studentsData as Student[]).reverse();
export const papers = papersData as Paper[];
export const projects = projectsData as LinkItem[];
export const blog = blogData as BlogPost[];
export const social = socialData as SocialLink[];
export const site = siteData as Site;
export const cv = cvData as Cv;
