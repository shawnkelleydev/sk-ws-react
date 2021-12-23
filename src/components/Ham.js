/*

This component controls the mobile hamburger.

*/

function Ham() {
  return (
    <ul
      id="ham"
      className="ham"
      onClick={(e) => {
        const menu = document.querySelector("nav");
        let target = e.target;
        if (target.tagName === "LI") {
          target = e.target.parentElement;
        }
        if (!target.className.includes("hamX")) {
          target.className = "ham hamX";
          menu.className = "show";
        } else {
          target.className = "ham";
          menu.className = "hide";
        }
      }}
    >
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
}

export default Ham;
