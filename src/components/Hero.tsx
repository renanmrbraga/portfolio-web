
import React from "react";
import { useLanguage } from "@/components/LanguageProvider";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white text-gray-900">
          Renan Braga
        </h1>
        
        <p className="text-xl md:text-2xl dark:text-gray-300 text-gray-800 mb-8 max-w-3xl mx-auto">
          {t("hero.subtitle")}
        </p>
      </div>
    </section>
  );
};

export default Hero;
