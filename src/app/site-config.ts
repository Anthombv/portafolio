// El dominio se configura en Vercel al publicar; no se inventa una URL pública.
const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);
export const siteUrl = configuredUrl ? new URL(configuredUrl).origin : undefined;
export const title = 'Anthony Barcia | Desarrollador Full Stack';
export const description =
  'Portafolio profesional de Anthony Barcia, desarrollador Full Stack especializado en aplicaciones web, backend, desarrollo móvil, integraciones, arquitectura de software, cloud e inteligencia artificial.';
