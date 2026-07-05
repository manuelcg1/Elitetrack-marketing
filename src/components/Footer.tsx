import React from 'react'

const Footer: React.FC = ()=>{
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-900 mt-12 py-6">
      <div className="container mx-auto flex items-center justify-between">
        <a className="flex items-center gap-3 font-extrabold text-lg" href="#inicio">
          <span className="w-8 h-8 grid place-items-center rounded-lg border-2 border-green-400 text-green-400">ET</span>
          <span>ELITETRACK</span>
        </a>
        <p className="text-slate-400">© {year} EliteTrack</p>
        <a className="text-slate-300" href="https://app.elitetrack.site">Ingresar a plataforma</a>
      </div>
    </footer>
  )
}

export default Footer
