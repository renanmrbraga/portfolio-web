import React from "react";
import { useLanguage } from "@/components/LanguageProvider";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="space-y-6">
      <h2 className="text-2xl font-bold">{t("skills.title")}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base leading-relaxed">

        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.etl")}</h3>
          <ul className="list-disc list-inside space-y-1">
            {t("skills.list.etl").split("\n").map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.viz")}</h3>
          <ul className="list-disc list-inside space-y-1">
            {t("skills.list.viz").split("\n").map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.analysis")}</h3>
          <ul className="list-disc list-inside space-y-1">
            {t("skills.list.analysis").split("\n").map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.ia")}</h3>
          <ul className="list-disc list-inside space-y-1">
            {t("skills.list.ia").split("\n").map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.dev")}</h3>
          <ul className="list-disc list-inside space-y-1">
            {t("skills.list.dev").split("\n").map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Skills;
