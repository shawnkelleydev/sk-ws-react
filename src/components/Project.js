import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { all } from "./Work";
import hsh from "../img/hsh.jpg";
import aod from "../img/aod.png";
import ReactMarkdown from "react-markdown";

const Project = () => {
  const projectName = useParams().project;
  const project = all.filter(
    (item) => item.name.toLowerCase() === projectName
  )[0];
  if (!project) {
    return (
      <div className="error-div">
        <p className="error">Man down! 404</p>
        <Link to="/projects" className="error">
          &larr; back to projects
        </Link>
      </div>
    );
  } else {
    return (
      <ul className="project-ul">
        <li>
          <Link to="/projects" className="back">
            &larr; back to projects
          </Link>
          <h1>{project.name}</h1>
          <h2>{project.year}</h2>
          {project.technologies ? (
            <ul>
              {project.technologies.map((tech, i) => {
                return <li key={i}>{tech}</li>;
              })}
            </ul>
          ) : null}

          <ReactMarkdown children={project.description} />

          <p>{project.tag}</p>
          {project.bugTitle ? (
            <p>
              To learn more, see{" "}
              <a href={project.bugLink} target="_blank" rel="noreferrer">
                {project.bugTitle}
              </a>
              .
            </p>
          ) : null}
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
          {project.video_link ? (
            <iframe
              className="preview"
              width="560"
              height="315"
              src={project.video_link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
