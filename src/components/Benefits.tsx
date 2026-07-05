import React from 'react'

const benefits = [
  'Mayor control operativo','Reducción de tiempos muertos','Mayor seguridad','Control de rutas','Optimización logística','Historial de recorridos','Evidencia para auditorías','Supervisión de unidades','Información en tiempo real','Plataforma estable'
]

const Benefits: React.FC = ()=>{
  return (
    <section id="beneficios" className="container mx-auto py-8">
      <div className="md:flex md:justify-between md:items-center">
        <div>
          <p className="text-green-400 font-extrabold uppercase">Beneficios</p>
          <h2 className="text-3xl font-extrabold mt-2">Más control operativo para tu empresa</h2>
          <p className="text-slate-300 mt-2">Tu operación siempre conectada, tu empresa siempre un paso adelante.</p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-6 md:mt-0 md:w-1/2 text-slate-300">
          {benefits.map(b => <li key={b} className="py-1">{b}</li>)}
        </ul>
      </div>
    </section>
  )
}

export default Benefits
