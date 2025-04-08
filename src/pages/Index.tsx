import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground min-h-screen theme-transition">
      <Navbar />
      <div className="w-full max-w-none mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <Hero />
        <ProjectsGrid />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
