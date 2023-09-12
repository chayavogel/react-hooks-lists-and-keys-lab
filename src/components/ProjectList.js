import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map(project => <ProjectItem key={project.id} technologies={project.technologies} about={project.about} name={project.name}/>)}
      </div>
    </div>
  );
}

export default ProjectList;
