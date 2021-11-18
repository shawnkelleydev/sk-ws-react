import { Outlet } from "react-router-dom";

const Projects = (props) => {
  return (
    <div>
      <h2>Projects</h2>
      <Outlet />
    </div>
  );
};

export default Projects;
