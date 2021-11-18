import { useParams } from "react-router";
import { all } from "./work";
import hsh from "../img/hsh.jpg";
import aod from "../img/aod.png";

const Project = (props) => {
  const projectName = useParams().project;
  const project = all.filter((item) => item.name === projectName)[0];
  return (
    <ul className="project-ul">
      <li>
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
              <a href={project.live_link}>
                <button>live site</button>
              </a>
            </li>
          ) : null}

          {project.github_link ? (
            <li>
              <a href={project.github_link}>
                <button>git hub</button>
              </a>
            </li>
          ) : null}

          {project.purchase_link ? (
            <li>
              <a href={project.purchase_link}>
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
};

export default Project;
