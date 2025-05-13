// src/components/Certifications.tsx
import React from "react";
import { useLanguage } from "@/components/LanguageProvider";

const Certifications = () => {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="space-y-6">
      <h2 className="text-2xl font-bold">{t("certifications.title")}</h2>

      <ul className="list-disc list-inside text-base leading-relaxed">
        {/* Formação Acadêmica */}
        <li>
          <strong>{t("certifications.uff.title")}</strong> — {t("certifications.uff.institution")}
        </li>
        <li>
          <strong>{t("certifications.dnc.title")}</strong> — {t("certifications.dnc.institution")}
        </li>
        <li>
          <strong>{t("certifications.cbb.title")}</strong> — {t("certifications.cbb.institution")}
        </li>

        {/* Certificados */}
        <li>
          <strong>{t("certifications.bot.title")}</strong>
        </li>
        <li>
          <strong>{t("certifications.python_analysis.title")}</strong>
        </li>
        <li>
          <strong>{t("certifications.python_clean.title")}</strong>
        </li>
        <li>
          <strong>{t("certifications.bi.title")}</strong>
        </li>
        <li>
          <strong>{t("certifications.sql.title")}</strong>
        </li>
        <li>
          <strong>{t("certifications.excel.title")}</strong>
        </li>
      </ul>
    </section>
  );
};

export default Certifications;
