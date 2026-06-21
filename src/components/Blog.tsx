import { motion } from "framer-motion";
import { blog } from "../content";
import { ExternalIcon, PencilIcon } from "../lib/icons";
import { Section, SectionHeading } from "./Section";

export function Blog() {
  return (
    <Section id="blog">
      <SectionHeading icon={<PencilIcon />}>Blog</SectionHeading>
      <div className="blog-grid">
        {blog.map((post, i) => (
          <motion.a
            key={post.url}
            className="blog-card"
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="blog-date">{post.date}</span>
            <span className="blog-title">{post.title}</span>
            <span className="blog-read">
              Read on Medium
              <ExternalIcon />
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
