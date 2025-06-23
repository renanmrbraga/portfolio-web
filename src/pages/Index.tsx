// src/pages/Index.tsx
import React from "react";
import { Seo } from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/ProjectsGrid";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Seo /> {/* <- Título e descrição multilíngues agora! */}
      <div className="bg-background text-foreground min-h-screen theme-transition">
        <Navbar />
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
          <Hero />
          <Projects />
          <Skills />
          <Certifications />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
