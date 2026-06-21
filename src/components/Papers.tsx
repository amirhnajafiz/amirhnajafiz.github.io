import { useState } from "react";
import { motion } from "framer-motion";
import { papers } from "../content";
import type { Paper } from "../types/content";
import { ExternalIcon, PaperIcon } from "../lib/icons";
import { Section, SectionHeading } from "./Section";

function PaperItem({ paper, index }: { paper: Paper; index: number }) {
  const [copied, setCopied] = useState(false);

  const copyBibtex = async () => {
    try {
      await navigator.clipboard.writeText(paper.bibtex);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <motion.article
      className="paper-item"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="paper-year">{paper.year}</span>
      <span className="paper-title">{paper.title}</span>
      <div className="paper-actions">
        <a
          className="paper-action"
          href={paper.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalIcon />
          Cite
        </a>
        <button
          type="button"
          className="paper-action"
          onClick={copyBibtex}
          aria-label="Copy BibTeX to clipboard"
        >
          {copied ? "Copied!" : "BibTeX"}
        </button>
      </div>
    </motion.article>
  );
}

export function Papers() {
  return (
    <Section id="papers">
      <SectionHeading icon={<PaperIcon />}>Papers</SectionHeading>
      <div className="paper-list">
        {papers.map((p, i) => (
          <PaperItem key={p.url} paper={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
