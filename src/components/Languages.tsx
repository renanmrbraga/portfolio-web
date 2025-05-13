// src/components/Languages.tsx
import React from "react";
import { useLanguage } from "@/components/LanguageProvider";

const Languages = () => {
  const { t } = useLanguage();

  return (
    <section id="languages" className="space-y-6">
      <h2 className="text-2xl font-bold">{t("languages.title")}</h2>

      <ul className="list-disc list-inside text-base leading-relaxed">
        <li>
          <strong>{t("languages.portuguese")}:</strong> {t("languages.portuguese.level")}
        </li>
        <li>
          <strong>{t("languages.english")}:</strong> {t("languages.english.level")}
        </li>
      </ul>
    </section>
  );
};

export default Languages;
