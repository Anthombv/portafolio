import { ArrowUpRight, ArrowUp, Linkedin } from 'lucide-react';
import { person } from '@/data/portfolio';
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a href="#inicio" className="footer-name">
            Anthony Barcia<span>.</span>
          </a>
          <p>{person.role}</p>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Anthony Barcia</p>
        <div className="footer-links">
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Anthony Barcia"
          >
            <Linkedin size={17} />
            <ArrowUpRight size={13} />
          </a>
          <a href="#inicio">
            Volver al inicio <ArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
