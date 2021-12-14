import { HashLink } from "react-router-hash-link";
import linkedin from "../img/linkedin-white.png";

const Menu = () => {
  return (
    <nav>
      <HashLink
        to={{ pathname: "/about", hash: "#a" }}
        onClick={(e) => reset()}
      >
        About
      </HashLink>
      <HashLink
        to={{ pathname: "/projects", hash: "#a" }}
        onClick={(e) => reset()}
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

function reset() {
  if (window.innerWidth < 600) {
    hamE();
  }
}

function hamE() {
  const ham = document.querySelector("#ham").children;
  const upper = ham[0];
  const mid = ham[1];
  const lower = ham[2];
  const menu = document.querySelector("nav");
  mid.style.background = "";
  upper.style.transform = "";
  upper.style.top = "";
  lower.style.transform = "";
  lower.style.bottom = "";
  menu.style.bottom = "-100px";
}

export default Menu;
