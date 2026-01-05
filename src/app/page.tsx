"use client";

import { useState } from "react";
import { Menu, X, Check, TrendingUp, Package, DollarSign, BarChart3, Users, FileText, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Caixa Claro
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#funcionalidades" className="text-gray-300 hover:text-white transition-colors">
                Funcionalidades
              </a>
              <a href="#planos" className="text-gray-300 hover:text-white transition-colors">
                Planos
              </a>
              <a href="#suporte" className="text-gray-300 hover:text-white transition-colors">
                Suporte
              </a>
              <Button variant="ghost" className="text-white hover:text-gray-300">
                Entrar
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Teste grátis
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden py-4 space-y-4 border-t border-gray-800">
              <a href="#funcionalidades" className="block text-gray-300 hover:text-white transition-colors">
                Funcionalidades
              </a>
              <a href="#planos" className="block text-gray-300 hover:text-white transition-colors">
                Planos
              </a>
              <a href="#suporte" className="block text-gray-300 hover:text-white transition-colors">
                Suporte
              </a>
              <Button variant="ghost" className="w-full text-white hover:text-gray-300">
                Entrar
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Teste grátis
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Organize suas finanças e{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              impulsione seu negócio
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Sistema completo para micro empreendedores gerenciarem produtos, vendas e finanças de forma simples e eficiente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
              Fale com vendas
            </Button>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 w-full sm:w-auto">
              Teste grátis 7 dias
            </Button>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-blue-600 py-4 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <p className="text-white text-sm sm:text-base md:text-lg font-medium">
            ✨ Mais de 10.000 micro empreendedores já organizam suas finanças com o Caixa Claro
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-sm">Vídeo demonstrativo</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Veja como é fácil gerenciar seu negócio
              </h2>
              <p className="text-gray-400 text-base sm:text-lg mb-8">
                Com o Caixa Claro, você tem controle total sobre suas vendas, estoque e finanças. 
                Tudo em um só lugar, de forma simples e intuitiva.
              </p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Teste grátis agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="funcionalidades" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Funcionalidades completas para você gerenciar seu negócio com eficiência
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature Cards */}
            <Card className="bg-gray-900 border-gray-800 p-6 sm:p-8 hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Package className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Cadastro de Produtos</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Cadastre e gerencie todos os seus produtos com facilidade. Controle estoque, preços e categorias.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6 sm:p-8 hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <DollarSign className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Controle Financeiro</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Acompanhe todas as suas receitas e despesas. Saiba exatamente quanto você está ganhando.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6 sm:p-8 hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Gestão de Vendas</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Registre vendas rapidamente e acompanhe o desempenho do seu negócio em tempo real.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6 sm:p-8 hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Relatórios Detalhados</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Visualize gráficos e relatórios completos sobre o desempenho do seu negócio.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6 sm:p-8 hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Gestão de Clientes</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Mantenha um cadastro completo dos seus clientes e histórico de compras.
              </p>
            </Card>

            <Card className="bg-gray-900 border-gray-800 p-6 sm:p-8 hover:border-blue-600 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/20">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Notas Fiscais</h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Emita notas fiscais e mantenha sua documentação sempre organizada.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Planos que cabem no seu bolso
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Escolha o plano ideal para o seu negócio e comece a organizar suas finanças hoje mesmo
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-gray-900 border-gray-800 p-6 sm:p-8 hover:border-blue-600 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Básico</h3>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl font-bold">R$ 29</span>
                <span className="text-gray-400">/mês</span>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-300">Até 100 produtos cadastrados</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-300">Controle financeiro básico</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-300">Relatórios mensais</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-300">Suporte por email</span>
                </li>
              </ul>
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                Começar agora
              </Button>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-gradient-to-b from-blue-600 to-blue-700 border-blue-500 p-6 sm:p-8 relative transform scale-100 md:scale-105 shadow-2xl shadow-blue-600/30">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-400 text-black px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                MAIS POPULAR
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Profissional</h3>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl font-bold">R$ 59</span>
                <span className="text-blue-100">/mês</span>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-white">Produtos ilimitados</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-white">Controle financeiro completo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-white">Relatórios em tempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-white">Gestão de clientes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-white">Suporte prioritário</span>
                </li>
              </ul>
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">
                Começar agora
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-gray-900 border-gray-800 p-6 sm:p-8 hover:border-blue-600 transition-all duration-300">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Empresarial</h3>
              <div className="mb-6">
                <span className="text-3xl sm:text-4xl font-bold">R$ 99</span>
                <span className="text-gray-400">/mês</span>
              </div>
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-300">Tudo do Profissional</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-300">Múltiplos usuários</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-300">Emissão de notas fiscais</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-300">API para integrações</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-300">Suporte 24/7</span>
                </li>
              </ul>
              <Button className="w-full bg-gray-800 hover:bg-gray-700 text-white">
                Começar agora
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="suporte" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Precisa de ajuda?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-12 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudar você a crescer seu negócio
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
              Falar com suporte
            </Button>
            <Button size="lg" variant="outline" className="border-gray-700 text-white hover:bg-gray-900 w-full sm:w-auto">
              Ver documentação
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base">Produto</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Funcionalidades</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Planos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Atualizações</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base">Empresa</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base">Suporte</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de ajuda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-sm sm:text-base">Legal</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-xs sm:text-sm text-gray-400">
            <p>© 2024 Caixa Claro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        {chatOpen ? (
          <Card className="bg-gray-900 border-gray-800 w-80 sm:w-96 h-96 sm:h-[500px] flex flex-col shadow-2xl">
            <div className="bg-blue-600 p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Suporte Caixa Claro</h4>
                  <p className="text-xs text-blue-100">Online agora</p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white hover:text-gray-200">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="bg-gray-800 rounded-lg p-3 mb-3 text-sm">
                <p className="text-gray-300">Olá! Como posso ajudar você hoje?</p>
              </div>
            </div>
            <div className="p-4 border-t border-gray-800">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </Card>
        ) : (
          <button
            onClick={() => setChatOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <MessageCircle size={24} />
          </button>
        )}
      </div>
    </div>
  );
}
