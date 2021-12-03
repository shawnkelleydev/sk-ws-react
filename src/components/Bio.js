import { HashLink } from "react-router-hash-link";

const Bio = () => {
  return (
    <ul>
      <li className="bottom20">
        A seasoned musician and teacher, Shawn fell in love with programming in
        mid-2021 and never looked back. He loves intellectual challenges and is
        currently completing the Full-Stack JavaScript program at Team
        Treehouse, a technology education platform.
      </li>
      <li className="bottom20">
        As a musician, Shawn's been priveleged to appear with GRAMMY®-Award
        winners Doc Severinsen, Kenny Rogers, and Charlie Daniels. He was also
        seen on international television as a part of President George W. Bush's
        second innauguration parade.
      </li>
      <li className="bottom20">
        Shawn loves to make new things and is a prolific composer, having
        completed 9 unique works for tuba quartet, his ensemble of choice. His
        first published work, <em>Urban Suite</em>, was premiered at Eastman
        School of Music in 2009. A finalist for the 2010 ITEA Harvey Phillips
        Award, <em>Urban Suite</em>
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
  );
};

export default Bio;
