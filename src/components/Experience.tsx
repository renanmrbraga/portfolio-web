import React from "react";
import { useLanguage } from "@/components/LanguageProvider";

const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-2xl font-bold">{t("experience.title")}</h2>

      <div className="space-y-6">
        <div>
          {/* Nome da empresa */}
          <h3 className="text-xl font-semibold">{t("experience.aapvr.title")}</h3>

          {/* Período total (abaixo do nome da empresa) */}
          <p className="text-sm text-muted-foreground mt-1">
            {t("experience.aapvr.periodFull")}
          </p>

          {/* Cargo atual */}
          <div className="mt-4">
            <p className="text-base font-bold">{t("experience.aapvr.role1")}</p>

            <ul className="list-disc list-inside mt-2 text-base leading-relaxed">
              {Array.from({ length: 10 }, (_, i) => (
                <li key={i}>{t(`experience.aapvr.desc1.${i + 1}`)}</li>
              ))}
            </ul>

            {/* Resumo das funções anteriores */}
            <p className="mt-4 text-base">{t("experience.aapvr.summary")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
