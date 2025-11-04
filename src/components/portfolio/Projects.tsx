import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { SectionBadge } from './SectionBadge';
import { Github, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const projects = t('projects') as Array<{
    title: string;
    summary: string;
    tech: string[];
    links: { github: string; demo: string };
  }>;

  const gradients = ['bg-gradient-card-1', 'bg-gradient-card-2', 'bg-gradient-card-3'];

  // 👇 new state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // 👇 calculate which projects to show
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  // 👇 calculate total number of pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <section id="projects" className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBadge text={t('ui.sectionBadges.projects')} />

        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
          {t('ui.nav.3')}
        </h2>

        {/* Display only the current page of projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {currentProjects.map((project, index) => (
            <div
              key={project.title}
              className={`p-6 rounded-2xl ${
                gradients[index % gradients.length]
              } shadow-glow-sm hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-2 group`}
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background/50 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="p-2 rounded-lg bg-background/50 hover:bg-background transition-colors text-white"
                    aria-label="View on GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    className="p-2 rounded-lg bg-background/50 hover:bg-background transition-colors text-white"
                    aria-label="View demo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination buttons */}
        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`w-10 h-10 rounded-full font-medium transition-all ${
                currentPage === pageNum
                  ? 'bg-primary text-primary-foreground shadow-glow-md'
                  : 'bg-accent text-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              {pageNum}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
