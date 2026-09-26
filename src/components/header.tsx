'use client';
import { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { navigation } from '@/data/portfolio';
import { CvButton } from './ui';

export function Header({ cvAvailable }: { cvAvailable: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');
  const [showTop, setShowTop] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const update = () => {
      let current = 'inicio';
      for (const [id] of navigation) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= 150) current = id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8)
        current = 'contacto';
      setActive(current);
      setShowTop(window.scrollY > 600);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth >= 1100) setOpen(false);
    };
    document.addEventListener('keydown', close);
    window.addEventListener('resize', resize);
    return () => {
      document.removeEventListener('keydown', close);
      window.removeEventListener('resize', resize);
    };
  }, [open]);
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <a
            className="brand"
            href="#inicio"
            onClick={() => setOpen(false)}
            aria-label="Anthony Barcia, inicio"
          >
            <span className="brand-mark">
              ab<span>.</span>
            </span>
            <span>Anthony Barcia</span>
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-navigation"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
          <nav
            id="main-navigation"
            className={`navigation ${open ? 'is-open' : ''}`}
            aria-label="Navegación principal"
          >
            {navigation.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? 'active' : ''}
                aria-current={active === id ? 'location' : undefined}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <CvButton available={cvAvailable} compact />
          </nav>
        </div>
      </header>
      {showTop && (
        <a className="back-top" href="#inicio" aria-label="Volver al inicio">
          <ArrowUp size={19} />
        </a>
      )}
    </>
  );
}
