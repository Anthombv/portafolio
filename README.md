# Portafolio de Anthony Barcia

Portafolio en español con Next.js App Router, TypeScript, Tailwind CSS y Lucide React. Diseño responsive, navegación activa, menú móvil accesible, enlaces de contacto y gráficos creados en CSS. No utiliza un backend ni servicios de terceros para recibir mensajes.

## Ejecutar localmente

Requiere Node.js 20.9 o superior y npm.

```bash
npm install
npm run dev
```

Abre http://localhost:3000. Para validar y ejecutar la versión de producción:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Publicar en Vercel

1. Sube el proyecto a tu repositorio Git y crea un proyecto en Vercel importando ese repositorio.
2. Selecciona el preset Next.js. Vercel utiliza `npm run build` y detecta automáticamente la salida.
3. Configura `NEXT_PUBLIC_SITE_URL` con el dominio definitivo, por ejemplo `https://tu-dominio.com`. No uses el valor de ejemplo en producción. Si no se configura, se usa `VERCEL_PROJECT_PRODUCTION_URL` cuando Vercel lo proporciona.
4. Publica. Si cambias el dominio o agregas el CV, realiza un nuevo despliegue.
5. Comprueba `/robots.txt`, `/sitemap.xml`, la imagen Open Graph y los enlaces de contacto en el dominio publicado.

Sin un dominio configurado, el sitemap queda vacío y se omite la URL canónica para evitar publicar una dirección inventada. En desarrollo se puede configurar el dominio con `.env.local`, tomando `.env.example` como guía.

## Personalizar contenido

- `src/data/portfolio.ts`: datos personales, experiencia, proyectos, tecnologías, formación, certificaciones e idiomas.
- Los proyectos aceptan `demo` y `repository` opcionales; los enlaces solo aparecen al agregar URLs reales.
- `src/components/`: Header, Hero, About, Experience, Projects, Skills, Education, Contact, Footer y elementos reutilizables.
- `src/app/globals.css`: paleta, diseño, estilos responsive y animaciones con respeto por `prefers-reduced-motion`.
- `src/app/layout.tsx` y `site-config.ts`: fuentes, metadata y dominio.
- `src/app/robots.ts`, `sitemap.ts`, `opengraph-image.tsx`, `icon.svg`: SEO y recursos sociales.
- `src/app/page.tsx`: composición de la página, disponibilidad del CV y JSON-LD Person.

## CV real

El CV real proporcionado está cargado en `public/CV_Anthony_Barcia.pdf`. Para reemplazarlo, guarda el documento actualizado en esa misma ruta. Al ejecutar un nuevo build los botones se habilitan automáticamente con descarga directa. Mientras el archivo no exista, se muestra «Próximamente», sin un enlace que devuelva 404. No se ha generado un documento falso.

## Accesibilidad y rendimiento

HTML semántico, idioma español, enlace para saltar al contenido, estados de foco, menú móvil con `aria-expanded` y cierre con Escape, navegación por teclado y movimiento reducido. Las fuentes se sirven mediante `next/font`. La única interfaz cliente es la navegación; el contenido es renderizado estáticamente. Los dibujos son representaciones conceptuales y no capturas de productos.

Los enlaces públicos de Zeyo Track, Zeyo ID, MercadoFin y VentaNova son los proporcionados por Anthony. Los repositorios del bot y Tesis Admin se pueden agregar cuando se disponga de sus URLs. El teléfono no se publica. Las fechas de certificaciones no proporcionadas se omiten. La imagen social se genera con Next.js sin dependencias adicionales.

## Archivos creados

El directorio inicial estaba vacío. Se crearon:

- Configuración: `package.json`, `package-lock.json`, `tsconfig.json`, `next-env.d.ts`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`, `.gitignore` y `.env.example`.
- Aplicación y SEO: `src/app/page.tsx`, `layout.tsx`, `globals.css`, `site-config.ts`, `robots.ts`, `sitemap.ts`, `opengraph-image.tsx` e `icon.svg`.
- Datos: `src/data/portfolio.ts`.
- Componentes: `src/components/header.tsx`, `hero.tsx`, `about.tsx`, `experience.tsx`, `projects.tsx`, `skills.tsx`, `education.tsx`, `contact.tsx`, `footer.tsx` y `ui.tsx`.
- Documento: `public/CV_Anthony_Barcia.pdf`.
- Documentación: `README.md`.

El build utiliza Webpack, soportado por Next.js, para evitar una restricción de procesos internos de Turbopack en este entorno. `next/font/google` necesita acceso a Google Fonts durante el build; las fuentes resultantes se sirven desde el propio sitio.

La revisión de tamaños móviles y escritorio se realizó sobre las reglas CSS; no se ejecutó una revisión visual en navegador por petición del usuario. Los enlaces de LinkedIn y correo son los proporcionados, y la disponibilidad de la cuenta externa y la entrega de correo dependen de sus respectivos servicios.

## Validaciones realizadas

- `npm run lint`: correcto, sin errores ni advertencias.
- `npm run typecheck`: correcto.
- Build de producción con Webpack: correcto, con página y recursos SEO prerenderizados.
- Inspección del HTML generado: IDs únicos, un solo H1, seis H2 de sección, anclas válidas, correo y LinkedIn correctos, JSON-LD Person y metadata social presentes.
- Recursos generados: robots, sitemap, imagen Open Graph e icono.
- CV: documento real disponible con descarga directa.
- Revisión estática de CSS: breakpoints para escritorio, tablet y móvil, foco visible y reducción de movimiento. La revisión visual e interacción en navegador quedan pendientes.

El botón «Enviarme un correo» utiliza `mailto:` dirigido a `anthonybarcia957@gmail.com`, con asunto predefinido. Abre el cliente de correo configurado en el dispositivo; no envía mensajes automáticamente.

## Formato del código

El proyecto utiliza Prettier con indentación de dos espacios. Ejecuta `npm run format` para formatear los archivos y `npm run format:check` para comprobarlos sin modificarlos. La configuración está en `.prettierrc.json`; `.prettierignore` excluye dependencias, builds y archivos generados.
