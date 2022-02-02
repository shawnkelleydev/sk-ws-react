import { projects, music } from "./Work";
import { HashLink } from "react-router-hash-link";

const ProjectMenu = () => {
  return (
    <div>
      <h1 className="section-header">Projects</h1>
      <div className="ProjectMenu">
        <ul>
          <li>
            <h2>Development</h2>
          </li>
          <li>
            <ul className="project-list">
              {projects.map((project, i) => {
                return (
                  <HashLink
                    to={{
                      pathname: `/projects/${project.name.toLowerCase()}`,
                      hash: "#a",
                    }}
                    key={i}
                  >
                    <li className="project">
                      {project.img ? (
                        <img
                          src={project.img}
                          alt={project.name.toLowerCase()}
                        />
                      ) : null}
                      <div>
                        <h3>{project.name}</h3>
                        {project.technologies.map((tech, i) => {
                          return (
                            <span key={i} className="tech">
                              {tech}
                            </span>
                          );
                        })}
                      </div>
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
                    <li key={Math.random()} className="piece">
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
