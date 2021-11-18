import fam from "../img/family_small.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <img src={fam} alt="the kelley family" className="fam" />
      <h1>Shawn Kelley</h1>
      <h2>Full-Stack JavaScript Developer</h2>
      <Link to="/about" id="learn-more">
        Learn more &rarr;
      </Link>
    </div>
  );
};

export default Home;
