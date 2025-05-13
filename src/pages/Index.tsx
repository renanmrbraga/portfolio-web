// src/pages/Index.tsx
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/ProjectsGrid";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Languages from "@/components/Languages";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen theme-transition">
      <Navbar />
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 space-y-16">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Languages />
        <Certifications />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
