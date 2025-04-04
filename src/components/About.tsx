
import React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const About = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20" id="about">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold mb-8">{t("about.title")}</h2>
        
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-1 mb-6">
            <div className="w-full h-full rounded-full bg-[#1A2430] flex items-center justify-center text-2xl font-bold">
              RB
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-2">{t("about.name")}</h3>
          
          <p className="text-gray-300 max-w-lg mb-6">
            {t("about.desc")}
          </p>
          
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full border-gray-700" asChild>
              <a href="https://linkedin.com/in/renanmrbraga" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-gray-700" asChild>
              <a href="https://github.com/renanmrbraga" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-gray-700" asChild>
              <a href="mailto:renanmbraga@outlook.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
