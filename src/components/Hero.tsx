import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="container mx-auto grid md:grid-cols-2 gap-8 items-center py-16">
      <div>
        <p className="text-green-400 font-extrabold uppercase tracking-widest">
          Soluciones GPS para empresas
        </p>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
          Control satelital inteligente para empresas de transporte
        </h1>
        <p className="mt-4 text-slate-300 max-w-xl">
          Monitoreo en tiempo real, control de flotas, retransmisión GPS, integración de equipos y
          soporte especializado para mantener tu operación siempre conectada.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            className="px-6 py-3 rounded-full bg-green-500 text-black font-semibold"
            href="https://app.elitetrack.site"
          >
            Ingresar a la plataforma
          </a>
          <a
            className="px-6 py-3 rounded-full border border-slate-600"
            href="https://wa.me/51987654321"
          >
            Solicitar evaluación
          </a>
        </div>
      </div>
      <div className="bg-slate-800 rounded-xl p-8">
        <div className="h-80 bg-gradient-to-br from-slate-700 to-slate-600 rounded-lg relative overflow-hidden">
          <div className="absolute top-6 left-6 bg-white/5 px-3 py-2 rounded">
            Unidad conectada
            <br />
            <small className="text-slate-300">Monitoreo 24/7 · GPS activo</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
