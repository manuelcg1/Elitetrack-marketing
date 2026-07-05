import React from 'react'

const CTA: React.FC = ()=>{
  return (
    <section id="contacto" className="container mx-auto py-8">
      <div className="bg-slate-800 rounded-lg p-6 flex flex-col md:flex-row md:justify-between items-start gap-6">
        <div>
          <p className="text-green-400 font-bold uppercase">Evaluación sin compromiso</p>
          <h2 className="text-2xl font-extrabold mt-2">Solicita una evaluación y diseñaremos la solución más adecuada para tu operación.</h2>
          <p className="mt-2 text-slate-300">Venta GPS · Alquiler GPS · Plataforma GPS · Retransmisión GPS · Planes de datos</p>
        </div>
        <div className="flex gap-4 mt-2">
          <a className="px-4 py-2 rounded-full bg-green-500 text-black font-semibold" href="https://wa.me/51987654321">WhatsApp</a>
          <a className="px-4 py-2 rounded-full border border-slate-600" href="mailto:contacto@elitetrack.site">Correo</a>
        </div>
      </div>
    </section>
  )
}

export default CTA
