import { Outlet } from "react-router-dom";

//components
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <span id="a" />
      <Header />
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
