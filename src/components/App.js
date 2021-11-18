import { NavLink, Outlet } from "react-router-dom";
import logo from "../img/logo-black-2.png";

//components
// import Home from "./Home";
// import About from "./About";
// import Projects from "./Projects";
// import Project from "./Project";

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <img src={logo} alt="logo" id="logo" />
          <span>
            <h1>Shawn Kelley</h1>
            <h3>Developer</h3>
          </span>
        </div>
        <ul id="ham">
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <nav>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
