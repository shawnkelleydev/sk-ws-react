import { Link, Outlet } from "react-router-dom";
import logoOrange from "../img/logo-orange-2.png";
import { HashLink } from "react-router-hash-link";
import linkedin from "../img/linkedin-white.png";

//components
import Ham from "./Ham";

function App() {
  return (
    <div className="App">
      <span id="a" />
      <header>
        <div className="header-content">
          <div>
            <Link to="/" id="logo-link">
              <img src={logoOrange} alt="logo" className="logo" />
              <span>
                <h1>Shawn Kelley</h1>
                <h3>Developer. Musician.</h3>
              </span>
            </Link>
          </div>
          <Ham />
          <nav>
            <HashLink to={{ pathname: "/about", hash: "#a" }}>About</HashLink>
            <HashLink to={{ pathname: "/projects", hash: "#a" }}>
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
        </div>
      </header>
      {/* #content-parent used for sticky footer */}
      <div id="content-parent">
        <Outlet />
      </div>

      <footer>
        <ul>
          <li>all rights reserved</li>
          <li>copyright © 2021 shawn kelley</li>
          <li>-</li>
          <li>site developed with react / react router</li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
