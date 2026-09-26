import { ArrowUpRight } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { SectionHeading, Tags } from './ui';
export function Experience() {
  return (
    <section id="experiencia" className="section section-tinted">
      <div className="container">
        <SectionHeading
          number="02"
          eyebrow="EXPERIENCIA"
          title="Un recorrido construyendo soluciones."
          description="De aplicaciones académicas a plataformas financieras y servicios de trazabilidad."
        />
        <div className="timeline">
          {experiences.map((job, index) => (
            <article className="experience-item" key={job.company}>
              <div className={`timeline-dot ${job.current ? 'current' : ''}`} />
              <div className="experience-meta">
                <p className="job-date">{job.date}</p>
                <h3>{job.company}</h3>
                <p>{job.role}</p>
                {job.current && (
                  <span className="current-label">
                    <span className="status-dot" /> Actualmente
                  </span>
                )}
                <span className="job-index">0{experiences.length - index}</span>
              </div>
              <div className="experience-body">
                <ul>
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Tags items={job.technologies} />
              </div>
            </article>
          ))}
        </div>
        <a href="#proyectos" className="text-link">
          Explorar los proyectos <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
