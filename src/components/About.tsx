import { about } from "../content";
import { UserIcon } from "../lib/icons";
import { Section, SectionHeading } from "./Section";

export function About() {
  return (
    <Section id="about">
      <SectionHeading icon={<UserIcon />}>About Me</SectionHeading>
      <div className="prose">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}
