import { projects } from "../content";
import { StackIcon } from "../lib/icons";
import { LinkList } from "./LinkList";
import { Section, SectionHeading } from "./Section";

export function Projects() {
  return (
    <Section id="projects" className="section-tinted">
      <SectionHeading icon={<StackIcon />}>Projects</SectionHeading>
      <LinkList items={projects} />
    </Section>
  );
}
