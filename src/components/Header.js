import logoOrange from "../img/logo-orange-2.png";
import { Link } from "react-router-dom";

//components
import Ham from "./Ham";
import Menu from "./Menu";

const Header = () => {
  return (
    <header>
      <div className="header-content">
        <div>
          <Link
            to="/"
            id="logo-link"
            className="logo-link"
            onClick={(e) => {
              reset();
            }}
          >
            <img src={logoOrange} alt="logo" className="logo" />
            <span>
              <h1>Shawn Kelley</h1>
              <h3>Developer. Musician.</h3>
            </span>
          </Link>
        </div>
        <Ham />
        <Menu />
      </div>
    </header>
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
export default Header;
