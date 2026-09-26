import {
  Braces,
  Code2,
  Server,
  Smartphone,
  Database,
  Cloud,
  Layers3,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { skillGroups } from '@/data/portfolio';
import { SectionHeading, Tags } from './ui';
const icons = [Braces, Code2, Server, Smartphone, Database, Cloud, Layers3, ShieldCheck, Sparkles];
export function Skills() {
  return (
    <section id="tecnologias" className="section section-tinted">
      <div className="container">
        <SectionHeading
          number="04"
          eyebrow="TECNOLOGÍAS"
          title="Las herramientas detrás del trabajo."
          description="Un stack versátil para elegir la tecnología adecuada a cada necesidad."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[index];
            return (
              <article className="skill-card" key={group.title}>
                <h3>
                  <Icon size={19} strokeWidth={1.6} />
                  {group.title}
                </h3>
                <Tags items={group.items} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
