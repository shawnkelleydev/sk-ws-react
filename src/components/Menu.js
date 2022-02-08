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

  const pages = ["about", "projects"];

  return (
    <nav className="hide">
      {pages.map((page, i) => (
        <HashLink
          key={i}
          to={{ pathname: `/${page}`, hash: "#a" }}
          onClick={() => {
            reset();
          }}
          id={`menu-${i + 1}`}
          className={location === `/${page}` ? "active" : null}
        >
          {page}
        </HashLink>
      ))}

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
