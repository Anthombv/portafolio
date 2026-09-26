import { Download } from 'lucide-react';
import type { ReactNode } from 'react';
import { person } from '@/data/portfolio';

export function SectionHeading({
  number,
  eyebrow,
  title,
  description,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        <span>{number}</span> {eyebrow}
      </p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Tecnologías y especialidades">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
export function CvButton({
  available,
  compact = false,
}: {
  available: boolean;
  compact?: boolean;
}) {
  return available ? (
    <a
      className={`button ${compact ? 'button-small' : 'button-secondary'}`}
      href={person.cv}
      download
    >
      <Download size={16} /> Descargar CV
    </a>
  ) : (
    <span
      className={`button cv-unavailable ${compact ? 'button-small' : 'button-secondary'}`}
      aria-label="Descargar CV: archivo pendiente"
      title="El CV estará disponible cuando se agregue el archivo PDF"
    >
      <Download size={16} />
      <span>
        Descargar CV<small>Próximamente</small>
      </span>
    </span>
  );
}
export function Feature({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="feature">
      <div className="icon-box">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}
