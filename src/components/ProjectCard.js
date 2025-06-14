import React from 'react';

function ProjectCard({ project }) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 flex flex-col"
    >
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-semibold text-medium-blue-gray mb-3">
          {project.title}
        </h3>
        <p className="text-base text-dark-blue-gray">
          {project.description}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;