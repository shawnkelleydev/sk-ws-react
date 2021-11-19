import { NavLink, Outlet } from "react-router-dom";
import logoblack from "../img/logo-black-3.png";

//components
import Ham from "./Ham";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <img src={logoblack} alt="logo" className="logo" />
          <span>
            <NavLink to="/">
              <h1>Shawn Kelley</h1>
            </NavLink>
            <h3>Developer. Musician.</h3>
          </span>
        </div>
        <Ham />
        <nav>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
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
