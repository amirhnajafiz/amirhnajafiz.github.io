import { motion } from "framer-motion";
import { skills } from "../content";
import { SparklesIcon } from "../lib/icons";
import { Section, SectionHeading } from "./Section";

export function Skills() {
  return (
    <Section id="skills" className="section-tinted">
      <SectionHeading icon={<SparklesIcon />}>Skills</SectionHeading>
      <div className="skills-grid">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            className="skill-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>{group.category}</h3>
            <ul className="skill-tags">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
