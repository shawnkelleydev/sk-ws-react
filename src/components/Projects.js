import { Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div id="projects-div" className="projects-div">
      <Outlet />
    </div>
  );
};

export default Projects;
