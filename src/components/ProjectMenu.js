import { projects } from "./Work";
import ProjectCard from "./ProjectCard";
import { useState, useEffect } from "react";

const ProjectMenu = () => {
  const [y, setY] = useState(0);
  const [h, setH] = useState(null);

  useEffect(() => {
    function yUpdate() {
      setY(window.pageYOffset);
    }
    function hUpdate() {
      setH(window.innerHeight);
    }

    setH(window.innerHeight);

    window.onscroll = yUpdate;
    window.onresize = hUpdate;

    return () => {
      setY(null);
      setH(null);
      window.removeEventListener("scroll", yUpdate);
      window.removeEventListener("resize", hUpdate);
    };
  }, []);

  return (
    <div className="ProjectMenu">
      <h1 className="section-header">Projects</h1>
      <div>
        {projects.map((project, i) => {
          return (
            <ProjectCard project={project} h={h} y={y} i={i + 1} key={i} />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMenu;
