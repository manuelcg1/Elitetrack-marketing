import React from 'react';

const steps = [
  'Analizamos',
  'Evaluamos',
  'Diseñamos',
  'Implementamos',
  'Capacitamos',
  'Brindamos soporte permanente',
];

const Process: React.FC = () => {
  return (
    <section id="proceso" className="container mx-auto py-8">
      <div className="md:flex md:gap-8 items-start">
        <div className="md:w-1/2">
          <p className="text-green-400 font-bold uppercase">Proceso</p>
          <h2 className="text-3xl font-extrabold mt-2">Nuestro proceso de trabajo</h2>
          <p className="text-slate-300 mt-2">
            Diseñamos una solución adecuada para cada operación.
          </p>
        </div>
        <ol className="md:w-1/2 mt-4 md:mt-0 list-decimal list-inside text-slate-300">
          {steps.map((s, i) => (
            <li key={s} className="py-2">
              <b>{s}</b>{' '}
              <span className="ml-2 text-slate-300">
                {[
                  'tus necesidades.',
                  'tus equipos actuales.',
                  'la mejor solución.',
                  'la plataforma y equipos.',
                  'a tu equipo.',
                  '',
                ].slice(i, i + 1)}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Process;
