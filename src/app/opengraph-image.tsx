import { ImageResponse } from 'next/og';
export const alt = 'Anthony Barcia — Desarrollador Full Stack en Quito, Ecuador';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() { return new ImageResponse(<div style={{ display: 'flex', width: '100%', height: '100%', background: '#F7F9FC', color: '#284B63', padding: '80px', flexDirection: 'column', justifyContent: 'center', fontFamily: 'sans-serif' }}><div style={{ fontSize: 24, letterSpacing: 4, color: '#64748B', marginBottom: 40 }}>QUITO, ECUADOR · WEB / BACKEND / MOBILE</div><div style={{ fontSize: 72, fontWeight: 700 }}>Anthony Barcia</div><div style={{ fontSize: 54, marginTop: 12 }}>Desarrollador Full Stack.</div><div style={{ display: 'flex', marginTop: 50, borderTop: '1px solid #DDE5EC', paddingTop: 25, fontSize: 25, color: '#64748B' }}>Más de 5 años construyendo soluciones de software.</div></div>, { ...size }); }
