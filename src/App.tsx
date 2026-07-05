import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <div className="min-h-screen bg-n text-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
