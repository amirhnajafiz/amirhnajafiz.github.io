import { motion } from "framer-motion";
import { experience } from "../content";
import { BriefcaseIcon } from "../lib/icons";
import { Section, SectionHeading } from "./Section";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading icon={<BriefcaseIcon />}>Work Experience</SectionHeading>
      <div className="timeline">
        {experience.map((e, i) => (
          <motion.article
            key={`${e.company}-${e.role}`}
            className="timeline-item"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-body">
              <div className="timeline-head">
                <h3>{e.role}</h3>
                <span className="exp-type">{e.type}</span>
              </div>
              <p className="card-meta">
                {e.company} · {e.period}
              </p>
              <p>{e.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
