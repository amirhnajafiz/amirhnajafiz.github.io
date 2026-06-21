import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

/** A page section that fades + slides into view the first time it's scrolled to. */
export function Section({ id, className = "", children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`section ${className}`.trim()}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container">{children}</div>
    </motion.section>
  );
}

/** Gradient-chip heading shared by every section. */
export function SectionHeading({
  icon,
  children,
}: {
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <h2 className="section-heading">
      <span className="heading-icon">{icon}</span>
      {children}
    </h2>
  );
}
