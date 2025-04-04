
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AICodeBuddyPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">AI Code Buddy</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            Assistente de programação com IA que ajuda a escrever, revisar e explicar código.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">O Problema</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Programadores enfrentam desafios diários na resolução de problemas complexos, depuração de código e aprendizado de novas tecnologias.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Documentações técnicas são frequentemente densas e ferramentas tradicionais de assistência não oferecem explicações contextualizadas ou sugestões personalizadas.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              O AI Code Buddy atua como um parceiro de programação que entende o contexto do seu código e oferece ajuda específica.
            </p>
            
            <h2 className="text-2xl font-bold mb-4 mt-10">Como Funciona</h2>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
              <li>Escreva código ou faça perguntas em linguagem natural</li>
              <li>A IA analisa o contexto do seu repositório</li>
              <li>Receba sugestões específicas para seu caso</li>
              <li>Obtenha explicações detalhadas sobre o funcionamento do código</li>
              <li>Integre-se facilmente com seus IDEs favoritos</li>
            </ol>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="https://ai-code-buddy.dev" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Visitar Site
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-gray-300 dark:border-gray-700" asChild>
                <a href="https://github.com/username/ai-code-buddy" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  Ver no GitHub
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Tecnologias</h2>
            <ul className="space-y-2">
              <TechItem>Python</TechItem>
              <TechItem>OpenAI API</TechItem>
              <TechItem>FastAPI</TechItem>
              <TechItem>React</TechItem>
              <TechItem>TypeScript</TechItem>
              <TechItem>VSCode Extension API</TechItem>
              <TechItem>Vector Embeddings</TechItem>
              <TechItem>WebSockets</TechItem>
            </ul>
          </div>
        </div>
        
        <div className="py-10 px-8 card-gradient-dark dark:card-gradient-dark light:card-gradient-light rounded-2xl mb-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Experimente agora</h2>
          <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
            Melhore sua produtividade com assistência de IA especializada em código.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <a href="https://ai-code-buddy.dev" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-5 w-5" />
                Acessar Plataforma
              </a>
            </Button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
            Versão gratuita disponível com capacidades básicas de assistência.
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

export default AICodeBuddyPage;
