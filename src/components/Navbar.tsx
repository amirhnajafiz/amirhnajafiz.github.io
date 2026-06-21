import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cv, site } from "../content";
import { CloseIcon, DownloadIcon, MenuIcon } from "../lib/icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`.trim()}>
      <div className="container">
        <a href="#top" className="brand">
          <img src={site.logo} alt={`${site.siteTitle} logo`} />
          <span>{site.siteTitle}</span>
        </a>

        <ul className="nav-links" style={{ display: open ? "flex" : undefined }}>
          {site.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            </li>
          ))}
          <li className="nav-cv-mobile">
            <a
              href={cv.link}
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={() => setOpen(false)}
            >
              <DownloadIcon />
              Download CV
            </a>
          </li>
        </ul>

        <motion.a
          className="nav-cv"
          href={cv.link}
          target="_blank"
          rel="noopener noreferrer"
          download
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <DownloadIcon />
          CV
        </motion.a>

        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
              style={{ display: "grid" }}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>
    </nav>
  );
}
