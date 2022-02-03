import { projects } from "./Work";
import ProjectCard from "./ProjectCard";

const ProjectMenu = () => {
  return (
    <div className="ProjectMenu">
      <h1 className="section-header">Projects</h1>
      <div>
        {projects.map((project, i) => {
          return <ProjectCard project={project} key={i} />;
        })}
      </div>
    </div>
  );
};

export default ProjectMenu;
