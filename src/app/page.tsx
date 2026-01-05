"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-500">Caixa Claro</div>

          <nav className="hidden md:flex gap-6 items-center">
            <a href="#funcionalidades" className="text-gray-300 hover:text-white">Funcionalidades</a>
            <a href="#planos" className="text-gray-300 hover:text-white">Planos</a>
            <a href="#suporte" className="text-gray-300 hover:text-white">Suporte</a>
            <button className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700">Teste grátis</button>
          </nav>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 py-4 space-y-3 border-t border-gray-800">
            <a href="#funcionalidades" className="block">Funcionalidades</a>
            <a href="#planos" className="block">Planos</a>
            <a href="#suporte" className="block">Suporte</a>
            <button className="w-full py-2 bg-blue-600 rounded">Teste grátis</button>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="pt-32 pb-24 text-center px-6">
        <h1 className="text-5xl font-bold mb-6">
