import logoOrange from "../img/logo-orange-2.png";
import { Link } from "react-router-dom";

//components
import Ham from "./Ham";
import Menu from "./Menu";

const Header = () => {
  const reset = () => {
    console.log("reset");
  };

  return (
    <header>
      <div className="header-content">
        <div>
          <Link
            to="/"
            id="logo-link"
            className="logo-link"
            onClick={() => {
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

export default Header;
