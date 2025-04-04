
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/components/LanguageProvider";

const Problem = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 theme-transition" id="problem">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-blue-600 dark:text-blue-400">"</span>{t("problem.quote").replace(/"/g, "")}<span className="text-blue-600 dark:text-blue-400">"</span>
        </h2>
        
        <p className="text-xl text-gray-700 dark:text-gray-300">
          {t("problem.desc")}
        </p>
        
        <div className="bg-gradient-to-r from-blue-500/20 to-teal-500/20 p-px rounded-lg">
          <Card className="bg-white/90 dark:bg-[#1A2430] border-0">
            <CardContent className="p-8">
              <p className="text-2xl font-semibold text-gray-800 dark:text-white">{t("problem.solution")}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Problem;
