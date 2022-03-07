import { HashLink } from "react-router-hash-link";

const Bio = () => {
  return (
    <section>
      <p className="bottom20">
        A seasoned musician and teacher, Shawn fell in love with programming in
        mid-2021 and never looked back. He loves intellectual challenges and
        completed the Full-Stack JavaScript{" "}
        <a
          href="https://www.credential.net/a6e6f1aa-8bbc-49c8-99c3-a3929351c6d5#gs.jddjgk"
          target="_blank"
          rel="noreferrer"
        >
          Techdegree
        </a>{" "}
        at{" "}
        <a
          href="https://teamtreehouse.com/home"
          target="_blank"
          rel="noreferrer"
        >
          Team Treehouse
        </a>{" "}
        in December, 2021.
      </p>
      <p className="bottom20">
        As a musician, Shawn's been priveleged to appear with GRAMMY®-Award
        winners Doc Severinsen, Kenny Rogers, and Charlie Daniels, as well as
        the Knoxville Symphony Orchestra, Southern Stars Symphonic Brass, and
        Cathedral Brass. He was also seen on international television as a part
        of President George W. Bush's second innauguration parade.
      </p>
      <p className="bottom20">
        Shawn loves to make new things and is a prolific composer, having
        completed 9 unique works for tuba quartet, his ensemble of choice. His
        first published work, <em>Urban Suite</em>, was premiered at Eastman
        School of Music in 2009. A finalist for the 2010{" "}
        <abbr title="International Tuba Euphonium Association">ITEA</abbr>{" "}
        Harvey Phillips Award, <em>Urban Suite</em> has been performed and
        recorded around the world.
      </p>
      <p className="bottom20">
        Shawn lives near Denver with his wife, flutist Whitney Kelley, two
        daughters, and English Springer Spaniel.
      </p>
      <p className="see">
        <HashLink to={{ pathname: "/projects", hash: "#a" }}>
          see work &rarr;
        </HashLink>
      </p>
    </section>
  );
};

export default Bio;
