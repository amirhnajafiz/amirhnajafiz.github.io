import { motion } from "framer-motion";
import { profile, site } from "../content";
import { ChevronDownIcon, DetailGlyph, MailIcon } from "../lib/icons";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-bg" style={{ backgroundImage: `url(${site.background})` }} />

      {/* drifting color blobs */}
      <motion.div
        className="hero-blob"
        style={{ width: 360, height: 360, top: "-8%", left: "-6%", background: "var(--blue)" }}
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-blob"
        style={{ width: 420, height: 420, bottom: "-12%", right: "-8%", background: "var(--orange)" }}
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="hero-inner"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="hero-photo" variants={item}>
          <img src={profile.photo} alt={profile.name} />
        </motion.div>

        <div className="hero-text">
          <motion.span className="hero-tagline" variants={item}>
            {profile.tagline}
          </motion.span>
          <motion.h1 variants={item}>{profile.name}</motion.h1>
          <motion.ul className="hero-details" variants={item}>
            {profile.details.map((d) => (
              <li key={d.label}>
                <span className="detail-icon" aria-hidden="true">
                  <DetailGlyph name={d.icon} />
                </span>
                <span className="detail-text">
                  <span className="label">{d.label}</span>
                  {d.value}
                </span>
              </li>
            ))}
          </motion.ul>
          <motion.a
            className="hero-email"
            href={`mailto:${profile.email}`}
            variants={item}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <MailIcon style={{ width: 18, height: 18 }} />
            {profile.email}
          </motion.a>
        </div>
      </motion.div>

      <motion.a
        href="#about"
        className="hero-scroll"
        aria-label="Scroll to content"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDownIcon />
      </motion.a>
    </header>
  );
}
