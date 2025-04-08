import React from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/components/LanguageProvider";

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
      title: "Portfólio Web",
      description: t("projects.PortfolioWeb.desc"),
      tags: ["React", "Vite", "Tailwind CSS"],
      githubUrl: "https://github.com/renanmrbraga/portfolio-web",
    },
    {
      id: "ppp-insight",
      title: "PPP Insight",
      description: t("projects.pppInsightGrid.desc"),
      tags: ["Python", "Streamlit", "Power BI"],
      demoUrl: "https://chatbot-llm-theta.vercel.app/",
      githubUrl: "https://github.com/renanmrbraga/chatbot-llm",
      detailsPath: "/projects/ppp-insight",
    },
    {
      id: "football-analysis",
      title: "Football Analysis",
      description: t("projects.FootballAnalysis.desc"),
      tags: ["Python", "Streamlit", "Power BI"],
      demoUrl: "https://football-analysis-bra.streamlit.app",
      githubUrl: "https://github.com/renanmrbraga/football-analysis",
      detailsPath: "/projects/football-analysis",
    },
    {
      id: "football-science",
      title: "Football Science",
      description: t("projects.FootballScience.desc"),
      tags: ["Python", "Beautiful Soup", "Selenium", "scikit-learn"],
      githubUrl: "https://github.com/renanmrbraga/football-science",
      detailsPath: "/projects/football-science",
    },
  ];

  return (
    <section className="py-16" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white text-gray-900">
          {t("projects.title")}
        </h2>
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useLanguage();

  return (
    <div className="project-card rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-all border h-full flex flex-col">
      {project.image && (
        <div className="aspect-video w-full overflow-hidden bg-gray-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold mb-2 dark:text-blue-400 text-blue-700">
          {project.title}
        </h3>
        <p className="dark:text-gray-300 text-gray-700 mb-4 flex-grow">
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

        <div className="flex flex-wrap gap-3 mt-auto">
          {project.detailsPath && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="dark:border-blue-700/30 dark:text-blue-300 border-blue-300 text-blue-700 hover:bg-blue-700/20"
            >
              <Link to={project.detailsPath}>{t("projects.viewDetails")}</Link>
            </Button>
          )}

          {project.demoUrl && (
            <Button
              asChild
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
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
          )}

          {project.githubUrl && (
            <Button
              asChild
              variant="outline"
              size="sm"
              className="dark:border-gray-700 dark:text-gray-300 border-gray-300 text-gray-700"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
