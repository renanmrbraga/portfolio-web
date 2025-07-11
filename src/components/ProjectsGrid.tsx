import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  detailsPath?: string;
};

const ProjectsGrid = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      id: "portfolio-website",
      title: t("projects.PortfolioWeb.title"),
      description: t("projects.PortfolioWeb.desc"),
      tags: ["React", "Vite", "Tailwind CSS"],
      githubUrl: "https://github.com/renanmrbraga/portfolio-web",
    },
    {
      id: "professional-analyst",
      title: t("projects.Chatbot.title"),
      description: t("projects.Chatbot.desc"),
      tags: [
        "Python",
        "FastAPI",
        "LangChain",
        "Groq",
        "PostgresSQL",
        "MongoDB",
        "Pinecone",
        "Hugging Face",
        "Docker",
      ],
      githubUrl: "https://github.com/renanmrbraga/chatbot-llm",
      detailsPath: "/projects/professional-analyst",
    },
    {
      id: "football-science",
      title: t("projects.FootballScience.title"),
      description: t("projects.FootballScience.desc"),
      tags: ["Python", "Beautiful Soup", "Selenium", "Streamlit", "ECharts"],
      demoUrl: "https://football-science.onrender.com/",
      githubUrl: "https://github.com/renanmrbraga/football-science",
      detailsPath: "/projects/football-science",
    },
  ];

  return (
    <section className="py-16" id="projects">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white text-gray-900">
          {t("projects.title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useLanguage();

  return (
    <div className="h-full rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all border flex flex-col">
      {project.image && (
        <div className="aspect-video w-full overflow-hidden bg-gray-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6 flex flex-col h-full">
        <h3 className="text-xl font-bold mb-2 dark:text-blue-400 text-blue-700">
          {project.title}
        </h3>
        <p className="dark:text-gray-300 text-gray-700 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="dark:bg-blue-900/40 dark:text-blue-300 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          {/* Linha 1: GitHub */}
          {project.githubUrl ? (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="dark:border-gray-700 dark:text-gray-300 border-gray-300 text-gray-700 w-full"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-1 h-4 w-4" />
                GitHub
              </a>
            </Button>
          ) : (
            <span className="invisible w-full h-9" />
          )}

          {/* Linha 1: Detalhes */}
          {project.detailsPath ? (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="dark:border-blue-700/30 dark:text-blue-300 border-blue-300 text-blue-700 hover:bg-blue-700/20 w-full"
            >
              <Link to={project.detailsPath}>{t("projects.viewDetails")}</Link>
            </Button>
          ) : (
            <span className="invisible w-full h-9" />
          )}

          {/* Linha 2: Demo */}
          <div className="col-span-2">
            {project.demoUrl ? (
              <Button
                asChild
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  Demo
                </a>
              </Button>
            ) : (
              <span className="invisible block w-full h-9" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
