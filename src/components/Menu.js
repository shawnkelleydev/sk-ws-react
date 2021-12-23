import { HashLink } from "react-router-hash-link";
import linkedin from "../img/linkedin-white.png";
import { useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation().pathname;

  const reset = () => {
    console.log("reset");
  };

  return (
    <nav className="hide">
      <HashLink
        to={{ pathname: "/about", hash: "#a" }}
        onClick={(e) => {
          reset();
        }}
        id="about"
        className={location === "/about" ? "active about" : "about"}
      >
        About
      </HashLink>
      <HashLink
        to={{ pathname: "/projects", hash: "#a" }}
        onClick={(e) => {
          reset();
        }}
        id="projects"
        className={location === "/projects" ? "active projects" : "projects"}
      >
        Projects
      </HashLink>
      <a
        href="https://www.linkedin.com/in/shawnkelleydev/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} className="social" alt="linked in icon" />
      </a>
    </nav>
  );
};

export default Menu;
