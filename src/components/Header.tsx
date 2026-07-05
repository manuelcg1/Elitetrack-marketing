import React, {useState} from 'react'

const Header: React.FC = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="bg-transparent">
      <nav className="container mx-auto flex items-center justify-between p-6">
        <a className="flex items-center gap-3 font-extrabold text-xl" href="#inicio">
          <span className="w-10 h-10 grid place-items-center rounded-lg border-2 border-green-400 text-green-400">ET</span>
          <span>ELITETRACK</span>
        </a>
        <button className="md:hidden p-2" aria-label="menu" onClick={()=>setOpen(v=>!v)}>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white mb-1"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
        <div className={`hidden md:flex items-center gap-6 ${open ? 'block' : ''}`}>
          <a href="#servicios" className="font-semibold">Servicios</a>
          <a href="#beneficios" className="font-semibold">Beneficios</a>
          <a href="#proceso" className="font-semibold">Proceso</a>
          <a href="#contacto" className="font-semibold">Contacto</a>
          <a className="ml-4 px-4 py-2 rounded-full border border-green-400 text-green-400" href="https://app.elitetrack.site">Ingresar</a>
        </div>
      </nav>
      {open && (
        <div className="md:hidden bg-slate-900/90 p-4">
          <a className="block py-2" href="#servicios" onClick={()=>setOpen(false)}>Servicios</a>
          <a className="block py-2" href="#beneficios" onClick={()=>setOpen(false)}>Beneficios</a>
          <a className="block py-2" href="#proceso" onClick={()=>setOpen(false)}>Proceso</a>
          <a className="block py-2" href="#contacto" onClick={()=>setOpen(false)}>Contacto</a>
        </div>
      )}
    </header>
  )
}

export default Header
