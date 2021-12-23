import fam from "../img/family_small.jpg";

import Bio from "./Bio";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="content">
      <ul id="about">
        <li>
          <img src={fam} alt="the kelley family" className="fam" id="fam" />
        </li>
        <li>
          <h2>about</h2>
        </li>
        <li>
          <Bio />
        </li>
      </ul>
      <ul id="skills" className="skills">
        <li>
          <h2>skills</h2>
        </li>
        <li>
          <Skills />
        </li>
      </ul>
    </div>
  );
};

export default About;
