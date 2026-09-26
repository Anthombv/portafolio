import type { Metadata } from 'next';
import { Manrope, JetBrains_Mono } from 'next/font/google';
import { title, description, siteUrl } from './site-config';
import './globals.css';
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl || 'http://localhost:3000'),
  ...(siteUrl ? { alternates: { canonical: '/' } } : {}),
  title,
  description,
  applicationName: 'Portafolio de Anthony Barcia',
  authors: [{ name: 'Anthony Barcia' }],
  creator: 'Anthony Barcia',
  keywords: [
    'Anthony Barcia',
    'Desarrollador Full Stack',
    'Quito',
    'TypeScript',
    'React',
    'NestJS',
    'desarrollo web',
    'backend',
    'desarrollo móvil',
  ],
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'es_EC',
    siteName: 'Anthony Barcia',
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${manrope.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
