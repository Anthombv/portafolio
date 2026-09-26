import {
  ArrowUpRight,
  Blocks,
  Bot,
  Package,
  Fingerprint,
  GraduationCap,
  ScanLine,
  ShieldCheck,
} from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';
import { SectionHeading, Tags } from './ui';
const icons = {
  track: ScanLine,
  id: Fingerprint,
  fintech: Blocks,
  inventory: Package,
  bot: Bot,
  tesis: GraduationCap,
};
function ProjectVisual({ project }: { project: Project }) {
  const Icon = icons[project.visual];
  return (
    <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-ring" />
      <div className="visual-symbol">
        <Icon strokeWidth={1.3} size={40} />
      </div>
      <div className="visual-mini mini-left">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-mini mini-right">
        <ShieldCheck size={17} />
        <span />
      </div>
      <span className="visual-caption">
        {project.visual === 'track'
          ? 'DOCUMENTO → DATOS → PROCESO'
          : project.visual === 'id'
            ? 'IDENTIDAD · FIRMA · TRAZABILIDAD'
            : project.visual === 'bot'
              ? 'MENSAJE → TAREA → RESPUESTA'
              : project.visual === 'inventory'
                ? 'TIENDAS · INVENTARIO · GESTIÓN'
                : project.visual === 'tesis'
                  ? 'PROCESOS ACADÉMICOS'
                  : 'SERVICIOS CONECTADOS'}
      </span>
    </div>
  );
}
export function Projects() {
  return (
    <section id="proyectos" className="section">
      <div className="container">
        <SectionHeading
          number="03"
          eyebrow="PROYECTOS DESTACADOS"
          title="Del problema a una solución real."
          description="Una selección de proyectos en los que he participado, desde el desarrollo hasta las integraciones."
        />
        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <ProjectVisual project={project} />
              <div className="project-content">
                <p className="project-category">
                  {project.category}
                  <span>0{index + 1}</span>
                </p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <Tags items={project.tags} />
                {(project.demo || project.repository) && (
                  <div className="project-links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Ver proyecto <ArrowUpRight size={15} />
                      </a>
                    )}
                    {project.repository && (
                      <a href={project.repository} target="_blank" rel="noopener noreferrer">
                        Código <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
        <p className="projects-note">
          Las ilustraciones representan el enfoque de cada proyecto; no son capturas de los
          productos.
        </p>
      </div>
    </section>
  );
}
