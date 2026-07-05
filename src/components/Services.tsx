import React from 'react';

const items = [
  [
    '📡',
    'Venta de equipos GPS',
    'Equipo GPS, instalación profesional, configuración, plataforma y capacitación.',
  ],
  [
    '🎯',
    'Alquiler de GPS',
    'Ideal para proyectos temporales o empresas que desean reducir inversión inicial.',
  ],
  [
    '🛰️',
    'Plataforma GPS',
    'Visualización permanente de unidades, historial, recorridos, velocidad y eventos.',
  ],
  [
    '🔁',
    'Retransmisión GPS',
    'Integramos equipos existentes y reenviamos información GPS a plataformas externas.',
  ],
  [
    '💳',
    'Planes de datos',
    'SIM de datos, configuración, monitoreo de consumo y administración del servicio.',
  ],
  ['🎧', 'Soporte técnico', 'Atención especializada para resolver incidencias de forma rápida.'],
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="container mx-auto py-8">
      <p className="text-green-400 font-extrabold uppercase tracking-widest">Servicios</p>
      <h2 className="text-3xl font-extrabold mt-2">
        Soluciones para flotas que necesitan control y continuidad operativa
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {items.map((it) => (
          <article key={it[1]} className="p-6 bg-slate-800 rounded-lg">
            <div className="text-3xl">{it[0]}</div>
            <h3 className="mt-2 font-bold text-lg">{it[1]}</h3>
            <p className="mt-2 text-slate-300">{it[2]}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
