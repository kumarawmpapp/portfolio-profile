import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectsSection({ projectsRef, projects }) {
  return (
    <section ref={projectsRef} className="py-20 px-5 bg-off-white text-center">
      <h2 className="text-4xl font-bold text-dark-blue-gray mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-20 max-w-6xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;