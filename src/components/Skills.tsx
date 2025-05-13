import React from "react";
import { useLanguage } from "@/components/LanguageProvider";

const Skills = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="space-y-6">
      <h2 className="text-2xl font-bold">{t("skills.title")}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-base leading-relaxed">
        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.languages")}</h3>
          <p>Python • SQL • TypeScript</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.data")}</h3>
          <p>Pandas • NumPy • Polars</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.ml")}</h3>
          <p>Scikit-learn • XGBoost • LightGBM • Keras • LangChain • Hugging Face • Cohere • RAG</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.databases")}</h3>
          <p>PostgreSQL • MongoDB • Pinecone</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.collect")}</h3>
          <p>APIs REST • Requests • BeautifulSoup • Selenium</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.viz")}</h3>
          <p>Streamlit • Power BI • ECharts • Plotly • Excel</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-1">{t("skills.section.dev")}</h3>
          <p>FastAPI • Docker • Git • Jupyter • VSCode</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
