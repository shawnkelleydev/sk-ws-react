import { projects, music } from "./work.js";
import { HashLink } from "react-router-hash-link";

const ProjectMenu = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div id="project-menu" className="project-menu">
        <ul>
          <li>
            <h2>Development</h2>
          </li>
          <li>
            <ul className="project-list">
              {projects.map((project) => {
                return (
                  <HashLink
                    to={{ pathname: `/projects/${project.name}`, hash: "#a" }}
                    key={Math.random()}
                  >
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
                  </HashLink>
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
                  <HashLink
                    to={{ pathname: `/projects/${piece.name}`, hash: "#a" }}
                    key={Math.random()}
                  >
                    <li key={Math.random()} className="project">
                      <h3>{piece.name}</h3>
                      <span>{piece.year} </span>
                      <span className="uppercase">{piece.instrumentation}</span>
                    </li>
                  </HashLink>
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
