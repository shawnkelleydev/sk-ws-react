import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { all } from "./Work";
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
      <div className="Project">
        <div>
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

          {project.description.map((par, i) => (
            <p key={i}>{par}</p>
          ))}

          <p>{project.tag}</p>

          <div className="btns">
            {project.live_link ? (
              <a href={project.live_link} target="_blank" rel="noreferrer">
                <button>live site</button>
              </a>
            ) : null}

            {project.github_link ? (
              <a href={project.github_link} target="_blank" rel="noreferrer">
                <button>git hub</button>
              </a>
            ) : null}

            {project.purchase_link ? (
              <a href={project.purchase_link} target="_blank" rel="noreferrer">
                <button>purchase</button>
              </a>
            ) : null}
          </div>
        </div>
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
          />
        ) : null}
      </div>
    );
  }
};

export default Project;
