import fam from "../img/family_small.jpg";
import { HashLink } from "react-router-hash-link";

const Home = () => {
  return (
    <div id="home" className="home">
      <img src={fam} alt="the kelley family" className="fam" />
      <h1>Shawn Kelley</h1>
      <h2>Full-Stack JavaScript Developer</h2>
      <HashLink to={{ pathname: "/about", hash: "#a" }}>
        Learn more &rarr;
      </HashLink>
    </div>
  );
};

export default Home;
