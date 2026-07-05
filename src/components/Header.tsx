import React, { useState } from 'react';

const links = [
  ['Soluciones', '#servicios'],
  ['Servicios', '#servicios'],
  ['Plataforma', '#plataforma'],
  ['Casos de éxito', '#casos'],
  ['FAQ', '#faq'],
];

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-n/90 backdrop-blur">
      <nav className="container flex min-h-[84px] items-center justify-between gap-4">
        <a className="flex items-center gap-3 font-extrabold text-xl" href="#inicio">
          <span className="grid h-11 w-11 place-items-center rounded-lg border-2 border-g text-g">
            ET
          </span>
          <span>
            ELITE<span className="text-g">TRACK</span>
          </span>
        </a>

        <button
          aria-label="Abrir menú"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {links.map(([label, href]) => (
            <a key={label} className="text-sm font-bold text-slate-200 hover:text-g" href={href}>
              {label}
            </a>
          ))}
          <a
            className="rounded-full bg-g px-5 py-2.5 text-sm font-extrabold text-n"
            href="#contacto"
          >
            Solicitar evaluación
          </a>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-n px-4 py-4 md:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              className="block py-3 font-bold text-slate-200"
              href={href}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="mt-3 inline-flex rounded-full bg-g px-5 py-3 font-extrabold text-n"
            href="#contacto"
            onClick={() => setOpen(false)}
          >
            Solicitar evaluación
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
