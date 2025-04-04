
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const FinanceTrackerPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen theme-transition">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="mb-8">
          <Link to="/" className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a Home
          </Link>
        </div>
        
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">Finance Tracker</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            Ferramenta para controle de finanças pessoais com visualização de dados e previsões inteligentes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">O Problema</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Gerenciar finanças pessoais é desafiador, especialmente ao tentar visualizar tendências de gastos ao longo do tempo e planejar para o futuro.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Muitas pessoas têm dificuldade em criar orçamentos realistas e manter o controle de suas despesas regularmente, o que torna difícil alcançar metas financeiras.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              O Finance Tracker resolve isso com uma interface intuitiva e recursos avançados de visualização.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-10">Como Funciona</h2>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
              <li>Cadastre suas contas bancárias e cartões</li>
              <li>Registre suas transações ou importe automaticamente</li>
              <li>Categorize gastos automaticamente com IA</li>
              <li>Visualize relatórios detalhados com gráficos interativos</li>
              <li>Receba previsões personalizadas para atingir suas metas</li>
            </ol>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <a href="https://finance-tracker-demo.vercel.app" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Ver Demo
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 dark:border-gray-700" asChild>
                <a href="https://github.com/username/finance-tracker" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Ver no GitHub
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Tecnologias</h2>
            <ul className="space-y-2">
              <TechItem>React</TechItem>
              <TechItem>TypeScript</TechItem>
              <TechItem>Firebase</TechItem>
              <TechItem>Chart.js</TechItem>
              <TechItem>Tailwind CSS</TechItem>
              <TechItem>Plaid API</TechItem>
              <TechItem>React Query</TechItem>
              <TechItem>Authentication</TechItem>
            </ul>
          </div>
        </div>
        
        <div className="py-10 px-8 card-gradient-dark dark:card-gradient-dark light:card-gradient-light rounded-2xl mb-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Principais Recursos</h2>
          <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
            Dashboards personalizados, relatórios detalhados e previsões financeiras inteligentes.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="https://github.com/username/finance-tracker" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                Explorar Código
              </a>
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
            Projeto open-source com contribuições bem-vindas.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const TechItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center">
    <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-2"></span>
    <span className="text-gray-700 dark:text-gray-300">{children}</span>
  </li>
);

export default FinanceTrackerPage;
