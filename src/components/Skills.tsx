import React from "react";
import { useLanguage } from "@/components/LanguageProvider";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="space-y-6">
      <h2 className="text-2xl font-bold">{t("skills.title")}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base leading-relaxed">
        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.analysis")}</h3>
          <p>{t("skills.list.analysis")}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.viz")}</h3>
          <p>{t("skills.list.viz")}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.eng")}</h3>
          <p>{t("skills.list.eng")}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.dev")}</h3>
          <p>{t("skills.list.dev")}</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
