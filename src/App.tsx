import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Benefits from './components/Benefits'
import Process from './components/Process'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white min-h-screen">
      <Header />
      <main className="space-y-16">
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
