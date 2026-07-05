import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-[#04111d] py-12">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a className="flex items-center gap-3 font-extrabold text-xl" href="#inicio">
              <span className="grid h-10 w-10 place-items-center rounded-lg border-2 border-g text-g">
                ET
              </span>
              <span>
                ELITE<span className="text-g">TRACK</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-6 text-m">
              Soluciones inteligentes de monitoreo y gestión de flotas para empresas que buscan
              seguridad, control y eficiencia.
            </p>
          </div>

          <div>
            <h4 className="font-extrabold">Soluciones</h4>
            <ul className="mt-4 space-y-2 text-sm text-m">
              <li>
                <a href="#servicios">Venta de equipos</a>
              </li>
              <li>
                <a href="#servicios">Alquiler de equipos</a>
              </li>
              <li>
                <a href="#servicios">Retransmisión</a>
              </li>
              <li>
                <a href="#plataforma">Plataforma GPS</a>
              </li>
              <li>
                <a href="#servicios">Planes de datos</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold">Empresa</h4>
            <ul className="mt-4 space-y-2 text-sm text-m">
              <li>
                <a href="#industrias">Nosotros</a>
              </li>
              <li>
                <a href="#casos">Casos de éxito</a>
              </li>
              <li>
                <a href="#faq">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="#contacto">Libro de reclamaciones</a>
              </li>
              <li>
                <a href="#contacto">Políticas de privacidad</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold">Contacto</h4>
            <ul className="mt-4 space-y-2 text-sm text-m">
              <li>+51 999 123 456</li>
              <li>hola@elitetrack.pe</li>
              <li>Chao, La Libertad - Perú</li>
              <li>Lun a Sáb: 8:00 am - 6:00 pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-m md:flex-row md:items-center md:justify-between">
          <span>© 2026 ELITETRACK. Todos los derechos reservados.</span>
          <span>Términos y condiciones · Privacidad</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
