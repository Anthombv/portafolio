import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Server,
  Smartphone,
} from 'lucide-react';
import { person } from '@/data/portfolio';
import { CvButton } from './ui';

function SoftwareComposition() {
  return (
    <div
      className="software-art"
      aria-label="Composición de desarrollo: frontend, backend y aplicaciones móviles"
    >
      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />
      <div className="art-dot dot-one" />
      <div className="art-dot dot-two" />
      <div className="code-window">
        <div className="window-bar">
          <div className="window-dots">
            <i />
            <i />
            <i />
          </div>
          <span>developer.ts</span>
          <Code2 size={15} />
        </div>
        <div className="code-content">
          <div>
            <span className="line-number">01</span>
            <span className="code-purple">const</span> developer = {'{'}
          </div>
          <div>
            <span className="line-number">02</span> <span className="code-key">name</span>:{' '}
            <span className="code-green">&apos;Anthony Barcia&apos;</span>,
          </div>
          <div>
            <span className="line-number">03</span> <span className="code-key">role</span>:{' '}
            <span className="code-green">&apos;Full Stack&apos;</span>,
          </div>
          <div>
            <span className="line-number">04</span> <span className="code-key">focus</span>: [
          </div>
          <div>
            <span className="line-number">05</span>{' '}
            <span className="code-green">
              &apos;web&apos;, &apos;backend&apos;, &apos;mobile&apos;
            </span>
          </div>
          <div>
            <span className="line-number">06</span> ],
          </div>
          <div>
            <span className="line-number">07</span> <span className="code-key">mindset</span>:{' '}
            <span className="code-green">&apos;always learning&apos;</span>
          </div>
          <div>
            <span className="line-number">08</span>
            {'}'};
          </div>
          <div className="code-comment">
            <span className="line-number">09</span>
            {'// Ideas que se convierten en software.'}
          </div>
        </div>
        <div className="window-footer">
          <span>
            <span className="status-dot" /> TypeScript
          </span>
          <span>
            UTF-8 <Check size={12} />
          </span>
        </div>
      </div>
      <div className="floating-card frontend">
        <div className="art-icon">
          <Braces size={20} />
        </div>
        <div>
          <strong>Frontend</strong>
          <span>Interfaces que conectan</span>
        </div>
      </div>
      <div className="floating-card backend">
        <div className="art-icon">
          <Server size={20} />
        </div>
        <div>
          <strong>Backend</strong>
          <span>Soluciones que escalan</span>
        </div>
      </div>
      <div className="floating-card mobile">
        <Smartphone size={17} />
        <span>Web · Backend · Mobile</span>
      </div>
      <div className="art-label">
        <Layers3 size={15} /> Arquitectura + desarrollo <Database size={15} />
      </div>
    </div>
  );
}
export function Hero({ cvAvailable }: { cvAvailable: boolean }) {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow hero-location">
            <MapPin size={14} /> {person.location}
            <span className="location-line" /> DESARROLLO CON PROPÓSITO
          </p>
          <h1>
            Anthony Barcia
            <span>
              Desarrollador
              <br />
              <em>Full Stack.</em>
            </span>
          </h1>
          <p className="hero-description">
            Construyo aplicaciones que conectan ideas, personas y tecnología. Más de cinco años
            desarrollando soluciones web, backend y móviles.
          </p>
          <div className="hero-actions">
            <a href="#proyectos" className="button button-primary">
              Ver proyectos <ArrowUpRight size={17} />
            </a>
            <CvButton available={cvAvailable} />
          </div>
          <div className="hero-social">
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={17} /> LinkedIn <ArrowUpRight size={12} />
            </a>
            <span />
            <a href={`mailto:${person.email}`}>
              <Mail size={17} /> Hablemos
            </a>
          </div>
        </div>
        <SoftwareComposition />
      </div>
      <div className="container hero-bottom">
        <div className="hero-tech">
          <span>MI STACK PRINCIPAL</span>
          <p>
            TypeScript <i /> React <i /> Angular <i /> NestJS <i /> Node.js
          </p>
        </div>
        <a href="#sobre-mi" className="explore">
          Conoce mi trabajo <ArrowDown size={17} />
        </a>
      </div>
    </section>
  );
}
