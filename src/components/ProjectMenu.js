import { projects, music } from "./work.js";
import { Link } from "react-router-dom";

const ProjectMenu = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div id="project-menu">
        <ul>
          <li>
            <h2>Development</h2>
          </li>
          <li>
            <ul className="project-list">
              {projects.map((project) => {
                return (
                  <Link to={`/projects/${project.name}`} key={Math.random()}>
                    <li key={Math.random()} className="project">
                      <h3>{project.name}</h3>
                      {project.technologies.map((tech) => {
                        return (
                          <span key={Math.random()} className="tech">
                            {tech}
                          </span>
                        );
                      })}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </li>
        </ul>
        <ul>
          <li>
            <h2>music</h2>
          </li>
          <li>
            <ul className="project-list">
              {music.map((piece) => {
                return (
                  <Link to={`/projects/${piece.name}`} key={Math.random()}>
                    <li key={Math.random()} className="project">
                      <h3>{piece.name}</h3>
                      <span>{piece.year} </span>
                      <span className="uppercase">{piece.instrumentation}</span>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectMenu;
