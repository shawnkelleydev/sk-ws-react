import { HashLink } from "react-router-hash-link";

export default function ProjectCard(props) {
  return (
    <HashLink
      to={{
        pathname: `/projects/${props.project.name.toLowerCase()}`,
        hash: "#a",
      }}
      className="ProjectCard"
    >
      {props.project.img ? (
        <img src={props.project.img} alt={props.project.name.toLowerCase()} />
      ) : null}
      <div>
        <h3>{props.project.name}</h3>
        <ul>
          {props.project.technologies.map((tech, i) => {
            return (
              <li key={i} className="tech">
                {tech}
              </li>
            );
          })}
        </ul>
      </div>
    </HashLink>
  );
}
