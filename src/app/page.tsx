import { existsSync } from 'node:fs';
import path from 'node:path';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Education } from '@/components/education';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { person, skillGroups } from '@/data/portfolio';
import { siteUrl } from './site-config';
export default function Home() {
  const cvAvailable = existsSync(path.join(process.cwd(), 'public', 'CV_Anthony_Barcia.pdf'));
  const jsonLd = { '@context': 'https://schema.org', '@type': 'Person', name: person.name, alternateName: person.shortName, jobTitle: person.role, email: person.email, ...(siteUrl ? { url: siteUrl } : {}), sameAs: [person.linkedin], address: { '@type': 'PostalAddress', addressLocality: 'Quito', addressCountry: 'EC' }, knowsAbout: skillGroups.flatMap(group => group.items), alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad Técnica Particular de Loja' } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} /><a className="skip-link" href="#contenido">Saltar al contenido</a><Header cvAvailable={cvAvailable} /><main id="contenido"><Hero cvAvailable={cvAvailable} /><About /><Experience /><Projects /><Skills /><Education /><Contact /></main><Footer /></>;
}
