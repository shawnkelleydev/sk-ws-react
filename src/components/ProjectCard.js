import { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";

export default function ProjectCard(props) {
  const [show, setShow] = useState(false);
  const [y, setY] = useState(null);
  const [h, setH] = useState(null);
  const [id, setId] = useState(null);
  const [compY, setCompY] = useState(null);

  const card = useRef(null);

  useEffect(() => {
    setY(props.y);
    setH(props.h);
    setId("project-" + props.i);
  }, [props]);

  useEffect(() => {
    if (y && h && id) {
      let getId = "#" + id;
      let item = document.querySelector(getId);
      let yFromViewportTop = parseInt(
        item.getBoundingClientRect().y.toFixed(0)
      );
      setCompY(yFromViewportTop);
    }
  }, [y, h, id]);

  useEffect(() => {
    if (compY < h - 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [h, compY]);

  return (
    <HashLink
      to={{
        pathname: `/projects/${props.project.name.toLowerCase()}`,
        hash: "#a",
      }}
      className={show ? "ProjectCard" : "ProjectCard ProjectCard-hide"}
      ref={card}
      id={id}
    >
      <div>
        <h1>{props.project.name}</h1>
        <p>{props.project.shortDesc}</p>
      </div>
      <div>
        <span className="line" />
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
