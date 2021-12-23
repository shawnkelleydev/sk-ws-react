import { Outlet } from "react-router-dom";

//components
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <span id="a" />
      <Header />
      {/* #content-parent used for sticky footer */}
      <div id="content-parent" className="content-parent">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
