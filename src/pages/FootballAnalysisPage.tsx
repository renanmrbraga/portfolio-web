import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/LanguageProvider";

const FootballAnalysisPage = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-background text-foreground min-h-screen theme-transition">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="mb-8">
          <Link
            to="/"
            className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("projects.back")}
          </Link>
        </div>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
            Football Analysis
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl">
            {t("projects.FootballAnalysis.desc")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">{t("projects.problem")}</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {t("projects.FootballAnalysis.problem1")}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {t("projects.FootballAnalysis.problem2")}
            </p>

            <h2 className="text-2xl font-bold mb-4 mt-10">{t("projects.howitworks")}</h2>
            <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-6">
              <li>{t("projects.FootballAnalysis.how1")}</li>
              <li>{t("projects.FootballAnalysis.how2")}</li>
              <li>{t("projects.FootballAnalysis.how3")}</li>
            </ol>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <a
                  href="https://football-analysis-bra.streamlit.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  {t("projects.viewDemo")}
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-gray-700"
                asChild
              >
                <a
                  href="https://github.com/renanmrbraga/football-analysis"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  {t("projects.viewGithub")}
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">{t("projects.technologies")}</h2>
            <ul className="space-y-2">
              <TechItem>Python</TechItem>
              <TechItem>Pandas / Plotly / Streamlit</TechItem>
              <TechItem>PostgreSQL (planned)</TechItem>
              <TechItem>Power BI (planned)</TechItem>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const TechItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center">
    <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mr-2"></span>
    <span className="text-gray-700 dark:text-gray-300">{children}</span>
  </li>
);

export default FootballAnalysisPage;
