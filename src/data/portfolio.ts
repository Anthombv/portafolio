export const person = {
  name: 'Marcelo Anthony Barcia Velasco', shortName: 'Anthony Barcia', role: 'Desarrollador Full Stack',
  location: 'Quito, Ecuador', email: 'anthonybarcia957@gmail.com', linkedin: 'https://linkedin.com/in/anthony-barcia-753784271',
  cv: '/CV_Anthony_Barcia.pdf',
};
export const contactEmailHref = `mailto:${person.email}?subject=${encodeURIComponent('Hablemos de un proyecto')}`;

export const navigation = [['inicio', 'Inicio'], ['sobre-mi', 'Sobre mí'], ['experiencia', 'Experiencia'], ['proyectos', 'Proyectos'], ['tecnologias', 'Tecnologías'], ['formacion', 'Formación'], ['contacto', 'Contacto']] as const;
export interface Experience { company: string; role: string; date: string; current?: boolean; responsibilities: string[]; technologies: string[] }
export const experiences: Experience[] = [
  { company: 'Zeyo Blockchain', role: 'Desarrollador Full Stack', date: 'Oct. 2025 — Actualidad', current: true, responsibilities: [
    'Desarrollo y mantenimiento de aplicaciones web y servicios backend con React, Angular, NestJS, Express y TypeScript.',
    'Desarrollo de un bot de WhatsApp con panel administrativo para gestionar trámites de cédulas, pasaportes, certificados y actas del Registro Civil del Ecuador, con procesamiento de webhooks de pago de Nuvei. Participación en Zeyo Track y Zeyo ID: trazabilidad, firma de documentos y certificación digital con blockchain.',
    'Integración de OCR con IA para extraer información de documentos y completar automáticamente formularios en Zeyo Track.',
    'Despliegue y administración de servicios en AWS con Amazon EKS y Kubernetes; gestión de archivos en S3, autenticación con Keycloak y datos en PostgreSQL, MongoDB y Redis.',
  ], technologies: ['React', 'Angular', 'NestJS', 'Express', 'TypeScript', 'OCR con IA', 'AWS', 'Amazon EKS', 'Amazon S3', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'Keycloak', 'Blockchain'] },
  { company: 'R2G', role: 'Desarrollador Full Stack', date: 'Oct. 2023 — Oct. 2025', responsibilities: [
    'Desarrollo de MercadoFin, una plataforma Fintech con Angular y TypeScript, y servicios distribuidos con Node.js, Express y NestJS aplicando arquitectura limpia y hexagonal.',
    'Implementación de firma electrónica con certificados .p12, OTP, firma grafológica y en pantalla; integración con IPFS y blockchain para almacenamiento y trazabilidad.',
    'Integración de pagos con QR dinámicos mediante Deuna de Banco Pichincha en MercadoFin y notificaciones por correo, WhatsApp y SMS.',
    'Migración de servicios de Express a NestJS con TypeScript y despliegue en Linux con PM2 y Nginx.',
  ], technologies: ['Angular', 'TypeScript', 'Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB', 'RxJS', 'PrimeNG', 'IPFS', 'Blockchain', 'Linux', 'PM2', 'Nginx'] },
  { company: 'ANCON', role: 'Desarrollador Full Stack y asistente de sistemas', date: 'Jun. 2022 — Sep. 2023', responsibilities: [
    'Desarrollo de cinco aplicaciones web y una aplicación móvil con PHP, JavaScript, React, React Native, Next.js, Node.js, Firebase, MySQL y Java con Spring Boot.',
    'Pruebas unitarias, de integración, aceptación y rendimiento; despliegues en Hostinger y Vercel.',
    'Soporte técnico y mantenimiento preventivo de servidores, software y hardware.',
  ], technologies: ['React', 'React Native', 'Next.js', 'PHP', 'JavaScript', 'Node.js', 'Firebase', 'MySQL', 'Spring Boot'] },
  { company: 'Universidad Técnica Particular de Loja', role: 'Desarrollador Full Stack', date: 'Abr. 2021 — Feb. 2022', responsibilities: [
    'Diseño y desarrollo de Tesis Admin para la administración de procesos de tesis con React, TypeScript, Node.js, MongoDB y Bootstrap.',
    'Automatización de pruebas con Selenium y uso de Docker para los entornos de desarrollo.',
  ], technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Bootstrap', 'Selenium', 'Docker'] },
];
export interface Project { title: string; category: string; description: string; tags: string[]; visual: 'track' | 'id' | 'fintech' | 'inventory' | 'bot' | 'tesis'; demo?: string; repository?: string }
export const projects: Project[] = [
  {
    title: 'Zeyo Track', category: 'TRAZABILIDAD · ZEYO',
    description: 'Trazabilidad corporativa con automatización, OCR con IA y extracción de datos para completar formularios a partir de documentos.',
    tags: ['OCR con IA', 'TypeScript', 'AWS'], visual: 'track', demo: 'https://track.zeyo.io/',
  },
  {
    title: 'Zeyo ID', category: 'IDENTIDAD DIGITAL · ZEYO',
    description: 'Firma de documentos y certificación digital con trazabilidad e integración con blockchain.',
    tags: ['Firma digital', 'Blockchain'], visual: 'id', demo: 'https://id.zeyo.io/',
  },
  {
    title: 'MercadoFin', category: 'SERVICIOS FINANCIEROS · R2G',
    description: 'Plataforma Fintech con pagos mediante QR dinámicos de Deuna de Banco Pichincha y notificaciones. Incluye firma electrónica con certificados .p12, OTP, firma grafológica y en pantalla, múltiples firmantes, IPFS y blockchain.',
    tags: ['Angular', 'Node.js', 'NestJS', 'Deuna', 'Firma electrónica'], visual: 'fintech', demo: 'https://mercadofin.com/',
  },
  {
    title: 'VentaNova', category: 'INVENTARIO · PROYECTO PERSONAL',
    description: 'Sistema de inventario que desarrollé como proyecto personal para varias tiendas, orientado a la gestión y el control de sus inventarios.',
    tags: ['Inventario', 'Gestión de tiendas'], visual: 'inventory', demo: 'https://ventanova-frontend.vercel.app/auth/login',
  },
  {
    title: 'Bot de WhatsApp', category: 'AUTOMATIZACIÓN · ZEYO',
    description: 'Bot para gestionar trámites de cédulas, pasaportes, certificados y actas del Registro Civil del Ecuador. Cuenta con panel administrativo, servicios backend y procesamiento de webhooks de pago de Nuvei.',
    tags: ['WhatsApp', 'Nuvei', 'Webhooks', 'Backend'], visual: 'bot',
  },
  {
    title: 'Tesis Admin', category: 'EDUCACIÓN · UTPL',
    description: 'Aplicación web para administrar procesos de tesis, con automatización de pruebas y entornos de desarrollo en Docker.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'], visual: 'tesis',
  },
];
export const skillGroups = [
  { title: 'Lenguajes', items: ['JavaScript', 'TypeScript', 'Java', 'C#', 'Python', 'PHP', 'SQL'] },
  { title: 'Frontend', items: ['React', 'Angular', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'RxJS', 'PrimeNG'] },
  { title: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'Spring Boot', '.NET', 'APIs REST', 'Webhooks', 'Servicios distribuidos'] },
  { title: 'Desarrollo móvil', items: ['React Native', '.NET MAUI', 'MVVM'] },
  { title: 'Bases de datos', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase'] },
  { title: 'Cloud y DevOps', items: ['AWS', 'Amazon EKS', 'Amazon S3', 'Kubernetes', 'Docker', 'Linux', 'Nginx', 'PM2', 'Vercel', 'Hostinger'] },
  { title: 'Arquitectura', items: ['Arquitectura limpia', 'Arquitectura hexagonal', 'MVC', 'MVVM', 'Microservicios', 'SOA', 'CQRS', 'Principios SOLID'] },
  { title: 'Integraciones y seguridad', items: ['Kafka', 'RabbitMQ', 'Keycloak', 'IPFS', 'Blockchain', 'Certificados .p12', 'OTP', 'Firma electrónica'] },
  { title: 'Desarrollo asistido por IA', items: ['Codex', 'Claude', 'Integración de OCR con IA', 'Generación y refactorización de código', 'Documentación técnica', 'Apoyo en pruebas', 'Revisión técnica de resultados generados con IA'] },
];
export const education = { degree: 'Ingeniería en Tecnologías de la Información', institution: 'Universidad Técnica Particular de Loja', date: '2020 — 2025' };
export const certifications = [{ name: 'Angular Pro', date: '2024' }, { name: 'Principios SOLID y Clean Code', date: '2025' }, { name: 'React Native CLI', date: null }];
export const languages = [{ name: 'Español', level: 'Nativo' }, { name: 'Inglés', level: 'B1' }];
