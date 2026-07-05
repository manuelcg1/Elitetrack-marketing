import React from 'react'

const About: React.FC = ()=>{
  return (
    <section id="nosotros" className="container mx-auto py-8">
      <div className="md:flex md:gap-8 items-start">
        <div className="md:w-1/2">
          <p className="text-green-400 font-bold uppercase">Quiénes somos</p>
          <h2 className="text-3xl font-extrabold mt-2">Especialistas en monitoreo satelital e integración GPS</h2>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 text-slate-300">
          <p>Somos una empresa especializada en soluciones de monitoreo satelital para empresas que requieren conocer en tiempo real la ubicación de sus unidades, optimizar sus operaciones y mantener control permanente sobre su flota.</p>
          <p className="mt-2">Trabajamos con empresas de transporte, agroexportadoras, operadores logísticos, contratistas y negocios que necesitan información confiable para tomar decisiones.</p>
        </div>
      </div>
    </section>
  )
}

export default About
