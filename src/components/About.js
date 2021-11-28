import fam from "../img/family_small.jpg";
import { HashLink } from "react-router-hash-link";

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
          <ul>
            <li className="bottom20">
              A seasoned musician and teacher, Shawn fell in love with
              programming in mid-2021 and never looked back. He loves
              intellectual challenges and is currently completing the Full-Stack
              JavaScript program at Team Treehouse, a technology education
              platform.
            </li>
            <li className="bottom20">
              As a musician, Shawn's been priveleged to appear with
              GRAMMY®-Award winners Doc Severinsen, Kenny Rogers, and Charlie
              Daniels. He was also seen on international television as a part of
              President George W. Bush's second innauguration parade.
            </li>
            <li className="bottom20">
              Shawn loves to make new things and is a prolific composer, having
              completed 9 unique works for tuba quartet, his ensemble of choice.
              His first published work, <em>Urban Suite</em>, was premiered at
              Eastman School of Music in 2009. A finalist for the 2010 ITEA
              Harvey Phillips Award, <em>Urban Suite</em>
              has been performed and recorded around the world.
            </li>
            <li className="bottom20">
              Shawn lives near Denver with his wife, flutist Whitney Kelley, two
              daughters, and English Springer Spaniel.
            </li>
            <li className="see">
              <HashLink to={{ pathname: "/projects", hash: "#a" }}>
                see work &rarr;
              </HashLink>
            </li>
          </ul>
        </li>
      </ul>
      <ul id="skills">
        <li>
          <h2>skills</h2>
        </li>
        <li>
          <ul>
            <li className="skill">JavaScript</li>
            <li className="skill">React</li>
            <li className="skill">JSX</li>
            <li className="skill">Node.js</li>
            <li className="skill">Express</li>
            <li className="skill">Pug</li>
            <li className="skill">SQL</li>
            <li className="skill">Sequelize ORM</li>
            <li className="skill">HTML</li>
            <li className="skill">CSS</li>
            <li className="skill">JSON</li>
            <li className="skill">Git / GitHub</li>
            <li className="skill">VS Code </li>
            <li className="skill">RegEx</li>
            <li className="skill">OOP</li>
            <li className="skill">API</li>
            <li className="skill">Accessibility</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default About;
