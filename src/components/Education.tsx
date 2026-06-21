import { motion } from "framer-motion";
import { education } from "../content";
import { CapIcon } from "../lib/icons";
import { Section, SectionHeading } from "./Section";

export function Education() {
  return (
    <Section id="education" className="section-tinted">
      <SectionHeading icon={<CapIcon />}>Education</SectionHeading>
      <div className="grid-2">
        {education.map((e, i) => (
          <motion.article
            key={e.degree}
            className="card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>{e.degree}</h3>
            <p className="card-meta">
              {e.institution} · {e.period}
            </p>
            <p>{e.description}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
