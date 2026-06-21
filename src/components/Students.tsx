import { motion } from "framer-motion";
import { students } from "../content";
import { SproutIcon } from "../lib/icons";
import { Section, SectionHeading } from "./Section";

export function Students() {
  return (
    <Section id="students">
      <SectionHeading icon={<SproutIcon />}>Students</SectionHeading>
      <div className="students-grid">
        {students.map((s, i) => (
          <motion.article
            key={s.name}
            className="student-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>{s.name}</h3>
            <p className="card-meta">
              {s.join} – {s.left}
            </p>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
