import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//components
import App from "./App";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Project from "./components/Project";
import ProjectMenu from "./components/ProjectMenu";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />}>
          <Route index element={<ProjectMenu />} />
          <Route path=":project" element={<Project />} />
        </Route>
        <Route
          path="*"
          element={
            <div className="error-div">
              <p className="error">Man down! 404</p>
              <Link to="/projects" className="error">
                see projects &rarr;
              </Link>
            </div>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
