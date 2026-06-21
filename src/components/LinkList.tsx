import { motion } from "framer-motion";
import type { LinkItem } from "../types/content";
import { ExternalIcon } from "../lib/icons";

/** Renders a list of titled external links (papers, projects, blog posts). */
export function LinkList({ items }: { items: LinkItem[] }) {
  return (
    <div className="link-list">
      {items.map((item, i) => (
        <motion.a
          key={item.url}
          className="link-item"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="link-content">{item.content}</span>
          <span className="link-url">
            <ExternalIcon />
            {item.url}
          </span>
        </motion.a>
      ))}
    </div>
  );
}
