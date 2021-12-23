import { HashLink } from "react-router-hash-link";
import linkedin from "../img/linkedin-white.png";
import { useLocation } from "react-router-dom";

const Menu = () => {
  let location = useLocation().pathname;

  const reset = () => {
    const menu = document.querySelector("nav");
    const ham = document.querySelector(".ham");
    menu.className = "hide";
    ham.className = "ham";
  };

  return (
    <nav className="hide">
      <HashLink
        to={{ pathname: "/about", hash: "#a" }}
        onClick={() => {
          reset();
        }}
        id="about"
        className={location === "/about" ? "active about" : "about"}
      >
        About
      </HashLink>
      <HashLink
        to={{ pathname: "/projects", hash: "#a" }}
        onClick={() => {
          reset();
        }}
        id="projects"
        className={
          location === "/projects" || location.split("/")[1] === "projects"
            ? "active projects"
            : "projects"
        }
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
