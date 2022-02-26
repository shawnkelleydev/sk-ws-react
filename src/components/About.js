import fam from "../img/family_small.jpg";

import Bio from "./Bio";
import { skills } from "./Skills";

const About = () => {
  return (
    <div className="content">
      <ul className="about">
        <li>
          <img
            src={fam}
            alt="the kelley family sitting on a log over a river in a wheat field"
            className="fam"
            id="fam"
          />
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
          <ul>
            {skills.map((skill, i) => (
              <li className="skill" key={i}>
                {skill}
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default About;
