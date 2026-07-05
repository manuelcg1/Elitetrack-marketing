import React, { useState } from 'react';

const industries = [
  ['Transporte de carga', 'Control de rutas, tiempos y seguridad en cada viaje.'],
  ['Agroindustria', 'Trazabilidad de unidades y maquinaria en campo.'],
  ['Construcción', 'Supervisión de maquinaria pesada y control de uso.'],
  ['Logística', 'Visibilidad total de la cadena de distribución.'],
  ['Maquinaria', 'Horas de motor, uso y ubicación de tus equipos.'],
  ['Minería', 'Operación segura en zonas remotas y de alto riesgo.'],
  ['Delivery', 'Entregas puntuales con seguimiento en tiempo real.'],
  ['Transporte de personal', 'Seguridad y puntualidad para tus colaboradores.'],
];

const services = [
  [
    'Venta de equipos GPS',
    'Equipos certificados de alta precisión y rendimiento para todo tipo de unidad.',
  ],
  [
    'Alquiler de equipos',
    'Soluciones flexibles sin inversión inicial, ideales para proyectos y temporadas.',
  ],
  ['Retransmisión GPS', 'Compatibilidad con tus equipos existentes hacia cualquier plataforma.'],
  ['Plataforma GPS', 'Monitoreo web y móvil intuitivo, seguro y disponible desde cualquier lugar.'],
  ['Planes de datos SIM', 'Conectividad confiable en todo el país para tu flota completa.'],
  [
    'Soporte técnico',
    'Acompañamiento especializado antes, durante y después de la implementación.',
  ],
];

const platformFeatures = [
  'Mapa en tiempo real',
  'Alertas y notificaciones',
  'Geocercas y zonas',
  'Historial de recorridos',
  'Reportes y estadísticas',
  'Dashboard ejecutivo',
  'Control de conductores',
  'Eventos y evidencias',
];

const benefits = [
  ['Mayor seguridad', 'Protege tus activos y a tus conductores.'],
  ['Información en tiempo real', 'Toma decisiones al instante.'],
  ['Reportes inteligentes', 'Datos claros para mejores resultados.'],
  ['Alertas personalizadas', 'Notificaciones de eventos críticos.'],
  ['Optimización de rutas', 'Reduce tiempos y costos operativos.'],
  ['Reducción de costos', 'Mejora la eficiencia y rentabilidad.'],
  ['Trazabilidad', 'Cada recorrido queda registrado.'],
  ['Soporte especializado', 'Acompañamiento antes, durante y después.'],
];

const process = [
  ['Evaluación', 'Analizamos tu operación'],
  ['Diseño', 'Proponemos la solución ideal'],
  ['Instalación', 'Implementación profesional'],
  ['Configuración', 'Plataforma y alertas a medida'],
  ['Capacitación', 'Entrenamos a tu equipo'],
  ['Soporte', 'Acompañamiento continuo'],
];

const cases = [
  {
    sector: 'Transporte de carga',
    title: 'Control total de rutas interprovinciales',
    detail: 'Implementamos monitoreo 24/7, geocercas y control de paradas no autorizadas.',
    stats: ['-28% tiempos muertos', '-18% combustible', '+35% productividad'],
  },
  {
    sector: 'Agroindustria',
    title: 'Trazabilidad de flota en campo',
    detail: 'Supervisión de maquinaria y unidades de transporte con reportes automáticos de uso.',
    stats: ['100% visibilidad', '-22% horas ociosas', '+40% control de uso'],
  },
  {
    sector: 'Distribución',
    title: 'Entregas puntuales y seguras',
    detail: 'Rutas optimizadas, alertas de desvío y evidencia de entregas en tiempo real.',
    stats: ['+95% entregas a tiempo', '0 robos desde el inicio', '-30% llamadas de control'],
  },
];

const testimonials = [
  [
    'CL',
    'Carlos López',
    'Gerente de Operaciones · Empresa de Transporte',
    'ELITETRACK nos ha permitido tener el control total de nuestra flota. La plataforma es intuitiva y el soporte siempre está disponible cuando lo necesitamos.',
  ],
  [
    'MR',
    'María Rodríguez',
    'Jefa de Logística · Agroindustria',
    'Redujimos las llamadas a conductores casi por completo. Hoy toda la información de la operación está en un solo lugar y en tiempo real.',
  ],
  [
    'JG',
    'Jorge Gutiérrez',
    'Supervisor de Flota · Distribución',
    'La implementación fue rápida y profesional. El acompañamiento del equipo marcó la diferencia frente a otros proveedores que evaluamos.',
  ],
];

const faqs = [
  [
    '¿La plataforma funciona desde cualquier lugar?',
    'Sí. Puedes acceder desde la web o desde tu celular, en cualquier momento y lugar, con acceso seguro por usuario.',
  ],
  [
    '¿Qué tipo de vehículos y equipos pueden monitorear?',
    'Camiones, camionetas, autos, motos, maquinaria pesada y activos fijos. Adaptamos la solución a tu tipo de operación.',
  ],
  [
    '¿Pueden integrar equipos GPS que ya tengo instalados?',
    'Sí. Mediante nuestro servicio de retransmisión podemos integrar tus equipos existentes a nuestra plataforma.',
  ],
  [
    '¿Cuánto tiempo toma la instalación?',
    'La instalación por unidad toma menos de una hora. Coordinamos el cronograma para no detener tu operación.',
  ],
  [
    '¿Qué incluye el servicio de monitoreo?',
    'Supervisión de tu flota desde nuestra central, atención de alertas, protocolos de seguridad y reportes de eventos.',
  ],
  [
    '¿Ofrecen soporte técnico?',
    'Sí, brindamos soporte especializado y acompañamiento permanente durante toda la relación comercial.',
  ],
];

const SectionTitle = ({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) => (
  <div className="mx-auto max-w-3xl text-center">
    <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-g">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-extrabold leading-tight text-white md:text-5xl">{title}</h2>
    {text && <p className="mt-4 text-base text-m md:text-lg">{text}</p>}
  </div>
);

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <section id="inicio" className="relative overflow-hidden">
        <div className="container grid min-h-[calc(100vh-84px)] items-center gap-10 py-16 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="inline-flex rounded-full border border-g/30 bg-g/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-g">
              Monitoreo especializado 24/7
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.03] text-white md:text-6xl">
              Gestiona toda tu operación con información en tiempo real.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-m">
              ELITETRACK integra tecnología GPS, monitoreo especializado y una plataforma
              inteligente para ayudarte a controlar tu flota, optimizar recursos y tomar decisiones
              con información precisa.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="btn bg-g text-n font-extrabold shadow-[0_0_28px_rgba(34,242,45,0.25)]"
                href="#contacto"
              >
                Solicitar una evaluación
              </a>
              <a
                className="btn border border-white/15 bg-white/5 text-white hover:border-g/60"
                href="#plataforma"
              >
                Conocer la plataforma
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                ['500+', 'Unidades monitoreadas'],
                ['24', 'Horas de supervisión'],
                ['98%', 'Satisfacción'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                  <strong className="block text-2xl text-white md:text-3xl">{value}</strong>
                  <span className="mt-1 block text-xs leading-5 text-m">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/10 bg-[#0b2233] p-5 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(34,242,45,0.16),transparent_26%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
            <div className="relative h-full min-h-[380px] rounded-lg border border-white/10 bg-[#071b2b] p-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-bold">Centro de control</span>
                <span className="rounded-full bg-g/15 px-3 py-1 text-xs font-bold text-g">
                  Online
                </span>
              </div>
              <div className="mt-5 grid gap-3">
                {[
                  'Unidad ET-204 · Ruta norte',
                  'Geocerca activa · Planta Trujillo',
                  'Alerta atendida · Velocidad',
                  'Reporte diario · 18 eventos',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-lg bg-white/[0.05] p-3"
                  >
                    <span className="h-3 w-3 rounded-full bg-g" />
                    <span className="text-sm text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-g p-4 text-n">
                  <strong className="text-3xl">87</strong>
                  <p className="text-sm font-bold">unidades activas</p>
                </div>
                <div className="rounded-lg border border-white/10 p-4">
                  <strong className="text-3xl">12</strong>
                  <p className="text-sm text-m">alertas del día</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industrias" className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Industrias"
            title="Soluciones para cada tipo de operación"
            text="Adaptamos nuestras soluciones de monitoreo y gestión de flotas a las necesidades específicas de cada sector."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-white/10 bg-n p-5">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-g/10 text-g">
                  ⌁
                </span>
                <h3 className="mt-4 text-lg font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-m">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20">
        <SectionTitle
          eyebrow="Problemas que resolvemos"
          title="Los desafíos de una operación sin información en tiempo real"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-red-400/20 bg-red-500/5 p-6">
            <h3 className="text-2xl font-extrabold">Sin ELITETRACK</h3>
            {[
              'No sabes dónde están tus vehículos.',
              'Llamadas constantes para pedir ubicación.',
              'Retrasos y desvíos no controlados.',
              'Riesgo de robos y usos no autorizados.',
              'No tienes reportes ni datos confiables.',
            ].map((item) => (
              <p key={item} className="mt-4 flex gap-3 text-m">
                <span className="font-bold text-red-300">×</span>
                {item}
              </p>
            ))}
          </div>
          <div className="rounded-lg border border-g/20 bg-g/5 p-6">
            <h3 className="text-2xl font-extrabold">Con ELITETRACK</h3>
            {[
              'Ubicación en tiempo real 24/7.',
              'Alertas inteligentes y personalizadas.',
              'Historial completo de recorridos.',
              'Mayor seguridad y prevención de robos.',
              'Reportes y análisis para mejores decisiones.',
            ].map((item) => (
              <p key={item} className="mt-4 flex gap-3 text-m">
                <span className="font-bold text-g">✓</span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-[#071b2b] py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Nuestras soluciones"
            title="Servicios diseñados para el control de tu operación"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(([title, text]) => (
              <article
                key={title}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-g/20 bg-g/10 text-g">
                  GPS
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-m">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="plataforma"
        className="container grid gap-10 py-20 lg:grid-cols-2 lg:items-center"
      >
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-g">
            Plataforma inteligente
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
            Toda tu operación en una sola plataforma
          </h2>
          <p className="mt-4 text-lg text-m">
            Visualiza la ubicación de tus unidades, recibe alertas inteligentes, consulta reportes y
            administra toda tu flota desde cualquier dispositivo con acceso seguro.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {platformFeatures.map((feature) => (
              <span
                key={feature}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold"
              >
                {feature}
              </span>
            ))}
          </div>
          <a className="btn mt-7 bg-g text-n font-extrabold" href="#contacto">
            Explorar la plataforma
          </a>
        </div>
        <div className="rounded-lg border border-white/10 bg-[#09283f] p-5">
          <div className="aspect-[4/3] rounded-lg bg-[linear-gradient(135deg,rgba(34,242,45,0.18),transparent_35%),linear-gradient(45deg,#061827,#0d354d)] p-5">
            <div className="grid h-full grid-rows-[auto_1fr_auto] rounded-lg border border-white/10 bg-n/80 p-4">
              <div className="flex justify-between text-sm text-m">
                <span>Dashboard ejecutivo</span>
                <span>Actualizado ahora</span>
              </div>
              <div className="my-6 grid place-items-center rounded-lg border border-dashed border-g/30 text-center">
                <div>
                  <strong className="block text-5xl text-g">24/7</strong>
                  <span className="text-m">monitoreo activo</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center text-xs text-m">
                <span>Rutas</span>
                <span>Eventos</span>
                <span>Alertas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Beneficios"
            title="Más que monitoreo, una herramienta para mejorar tu operación"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([title, text]) => (
              <article key={title} className="rounded-lg border border-white/10 bg-n p-5">
                <h3 className="font-extrabold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-m">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="container py-20">
        <SectionTitle
          eyebrow="Nuestro proceso"
          title="Un proceso simple, organizado y orientado a resultados"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {process.map(([title, text], index) => (
            <article key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
              <span className="text-4xl font-extrabold text-g">{index + 1}</span>
              <h3 className="mt-3 text-xl font-extrabold">{title}</h3>
              <p className="mt-2 text-m">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#071b2b] py-20">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-g">
              Central de monitoreo
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
              Monitoreo especializado para operaciones que no pueden detenerse
            </h2>
            <p className="mt-4 text-lg text-m">
              Nuestro equipo supervisa tu flota 24/7 desde nuestra central, detectando eventos y
              actuando de manera inmediata para proteger tu operación.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                'Supervisión 24/7',
                'Protocolos de seguridad',
                'Respuesta inmediata',
                'Reportes de eventos',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
            <div className="grid min-h-[280px] place-items-center rounded-lg border border-dashed border-g/30 bg-n text-center">
              <div>
                <strong className="block text-6xl text-g">24</strong>
                <p className="text-m">horas de supervisión al día</p>
                <p className="mt-4 text-sm text-slate-400">
                  Espacio preparado para la fotografía real de la central.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="casos" className="container py-20">
        <SectionTitle
          eyebrow="Casos de éxito"
          title="Empresas que optimizan su operación con ELITETRACK"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cases.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-sm font-bold text-g">{item.sector}</p>
              <h3 className="mt-3 text-xl font-extrabold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-m">{item.detail}</p>
              <div className="mt-5 grid gap-2">
                {item.stats.map((stat) => (
                  <span key={stat} className="rounded-lg bg-n px-3 py-2 text-sm font-semibold">
                    {stat}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Testimonios"
            title="La confianza de nuestros clientes es nuestro mayor respaldo"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map(([initials, name, role, quote]) => (
              <article key={name} className="rounded-lg border border-white/10 bg-n p-6">
                <p className="text-g">★★★★★</p>
                <p className="mt-4 text-sm leading-6 text-slate-200">“{quote}”</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-g text-sm font-extrabold text-n">
                    {initials}
                  </span>
                  <div>
                    <strong className="block">{name}</strong>
                    <span className="text-xs text-m">{role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="container py-20">
        <SectionTitle
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas antes de comenzar"
        />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-white/10 overflow-hidden rounded-lg border border-white/10">
          {faqs.map(([question, answer], index) => (
            <div key={question} className="bg-white/[0.03]">
              <button
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold"
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                type="button"
              >
                {question}
                <span className="text-g">{openFaq === index ? '−' : '+'}</span>
              </button>
              {openFaq === index && <p className="px-5 pb-5 text-sm leading-6 text-m">{answer}</p>}
            </div>
          ))}
        </div>
      </section>

      <section id="contacto" className="container pb-20">
        <div className="rounded-lg border border-g/20 bg-[linear-gradient(135deg,rgba(34,242,45,0.16),rgba(255,255,255,0.04))] p-8 text-center md:p-12">
          <h2 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
            ¿Listo para llevar el control de tu operación al siguiente nivel?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-m">
            Agenda una evaluación gratuita con uno de nuestros especialistas y descubre cómo
            ELITETRACK puede ayudarte a optimizar tu operación con tecnología inteligente.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a className="btn bg-g text-n font-extrabold" href="mailto:hola@elitetrack.pe">
              Solicitar evaluación
            </a>
            <a className="btn border border-white/15 bg-white/5" href="https://wa.me/51999123456">
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
