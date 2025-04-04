
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BrainCircuit, Database, Server, Code, Globe, FileCode, BarChart3, Terminal } from "lucide-react";

const technologies = [
  { name: "Python + LangChain", icon: <FileCode className="h-6 w-6 text-yellow-500" /> },
  { name: "Groq LLM (Gemma 2B/9B)", icon: <BrainCircuit className="h-6 w-6 text-green-500" /> },
  { name: "Streamlit", icon: <BarChart3 className="h-6 w-6 text-blue-500" /> },
  { name: "PostgreSQL", icon: <Database className="h-6 w-6 text-blue-300" /> },
  { name: "Docker + NGINX", icon: <Server className="h-6 w-6 text-cyan-400" /> },
  { name: "Embeddings com HuggingFace", icon: <Terminal className="h-6 w-6 text-red-400" /> },
  { name: "Scraping + APIs públicas", icon: <Globe className="h-6 w-6 text-blue-400" /> },
  { name: "Frontend com React + Vite", icon: <Code className="h-6 w-6 text-teal-400" /> }
];

const TechStack = () => {
  return (
    <section className="py-20" id="tech-stack">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Tecnologias Utilizadas</h2>
        <p className="text-gray-300 text-center mb-12">Stack moderna para processamento eficiente de dados e interface amigável</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-[#1A2430] rounded-xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:bg-blue-900/20 hover:scale-105 cursor-default">
              <div className="mb-3">
                {tech.icon}
              </div>
              <p className="text-sm font-medium">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
