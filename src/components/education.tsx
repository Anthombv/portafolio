import { Award, GraduationCap, Languages } from 'lucide-react';
import { certifications, education, languages } from '@/data/portfolio';
import { SectionHeading } from './ui';
export function Education() {
  return (
    <section id="formacion" className="section">
      <div className="container">
        <SectionHeading number="05" eyebrow="FORMACIÓN" title="Aprender es parte del proceso." />
        <div className="education-grid">
          <article className="education-main">
            <div className="icon-box">
              <GraduationCap size={24} />
            </div>
            <p className="eyebrow">EDUCACIÓN UNIVERSITARIA</p>
            <h3>{education.degree}</h3>
            <p>{education.institution}</p>
            <span className="education-date">{education.date}</span>
          </article>
          <div className="education-side">
            <article>
              <h3>
                <Award size={19} /> Certificaciones
              </h3>
              <ul className="certifications">
                {certifications.map((cert) => (
                  <li key={cert.name}>
                    <span>{cert.name}</span>
                    {cert.date && <span>{cert.date}</span>}
                  </li>
                ))}
              </ul>
            </article>
            <article className="languages">
              <h3>
                <Languages size={19} /> Idiomas
              </h3>
              <div>
                {languages.map((language) => (
                  <p key={language.name}>
                    {language.name}
                    <span>{language.level}</span>
                  </p>
                ))}
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
