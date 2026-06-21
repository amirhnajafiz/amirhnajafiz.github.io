import { site, social } from "../content";
import { BrandIcon } from "../lib/icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>{site.copyright}</p>
        <div className="socials">
          {social.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.platform}
            >
              <BrandIcon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
