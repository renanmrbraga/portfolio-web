
import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const TryNow = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 card-gradient-dark dark:card-gradient-dark light:card-gradient-light rounded-2xl my-8 theme-transition" id="try-now">
      <div className="max-w-4xl mx-auto text-center space-y-8 px-4">
        <h2 className="text-3xl md:text-4xl font-bold">{t("trynow.title")}</h2>
        
        <p className="text-xl text-gray-700 dark:text-gray-300">
          {t("trynow.desc")}
        </p>
        
        <div className="flex justify-center mt-8">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 h-auto text-lg">
            <ExternalLink className="mr-2 h-5 w-5" />
            {t("trynow.button")}
          </Button>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          {t("trynow.tip")}
        </p>
      </div>
    </section>
  );
};

export default TryNow;
