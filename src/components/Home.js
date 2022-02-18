import fam from "../img/fam_square.jpg";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div id="home" className="Home">
      <img src={fam} alt="the kelley family" className="fam-front" />

      <div>
        <h1>Shawn Kelley</h1>
        <span />
        <h2>full stack JavaScript</h2>
        <HashLink to={{ pathname: "/about", hash: "#a" }}>
          Learn more &rarr;
        </HashLink>
      </div>
    </div>
  );
};

export default Home;
