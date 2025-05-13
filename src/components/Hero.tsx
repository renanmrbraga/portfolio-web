import React from "react";
import { useLanguage } from "@/components/LanguageProvider";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Renan Braga
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 mb-2">
          {t("hero.title")}
        </p>
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          {t("hero.subtitle")}
        </p>
      </div>
    </section>
  );
};

export default Hero;
