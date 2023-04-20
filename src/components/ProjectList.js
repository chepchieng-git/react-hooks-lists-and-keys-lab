import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  //check if the projects prop is an array
  if (!Array.isArray(projects)) {
    return null
  }

  return (
    <div id="projects">
      <h2>My Projects</h2>
     
      <div id="project-list">
        {/* render one ProjectItem components with the correct props */}
        {projects.map((project) => (
          <ProjectItem 
            key={project.id}
            name={project.name}
            about={project.about}
            technologies={project.technologies}
          />
        ))} 
      </div>
    </div>
  );
}

export default ProjectList;
