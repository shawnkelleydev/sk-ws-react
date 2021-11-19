import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { all } from "./work";
import hsh from "../img/hsh.jpg";
import aod from "../img/aod.png";

const Project = () => {
  const projectName = useParams().project;
  const project = all.filter((item) => item.name === projectName)[0];
  if (!project) {
    return (
      <div className="error-div">
        <Link to="/projects" className="error">
          &larr; back to projects
        </Link>
        <p className="error">Man down! 404</p>
      </div>
    );
  } else {
    return (
      <ul className="project-ul">
        <li>
          <Link to="/projects" className="error">
            &larr; back to projects
          </Link>
          <h1>{project.name}</h1>
          <h2>{project.year}</h2>
          {project.technologies ? (
            <ul>
              {project.technologies.map((tech) => {
                return <li key={Math.random()}>{tech}</li>;
              })}
            </ul>
          ) : null}
          <p>{project.description}</p>
          <p>{project.tag}</p>
          <ul className="btns">
            {project.live_link ? (
              <li>
                <a href={project.live_link} target="_blank" rel="noreferrer">
                  <button>live site</button>
                </a>
              </li>
            ) : null}

            {project.github_link ? (
              <li>
                <a href={project.github_link} target="_blank" rel="noreferrer">
                  <button>git hub</button>
                </a>
              </li>
            ) : null}

            {project.purchase_link ? (
              <li>
                <a
                  href={project.purchase_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button>purchase</button>
                </a>
              </li>
            ) : null}
          </ul>
        </li>
        <li>
          {project.live_link ? (
            <iframe
              className="preview"
              title={project.name}
              src={project.live_link}
            />
          ) : null}
          {project.img && project.name === "home suite home" ? (
            <img className="img_preview" src={hsh} alt={project.name} />
          ) : null}
          {project.img && project.name === "an off day" ? (
            <img className="img_preview" src={aod} alt={project.name} />
          ) : null}
        </li>
      </ul>
    );
  }
};

export default Project;
