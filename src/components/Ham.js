/*

This component controls the mobile hamburger.

*/

function Ham() {
  const menu = document.querySelector("nav");

  return (
    <ul
      id="ham"
      className="ham"
      onClick={(e) => {
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

// function hamE(target) {
//   const upper = target.children[0];
//   const mid = target.children[1];
//   const lower = target.children[2];
//   const menu = target.nextElementSibling;
//   mid.style.background = "";
//   upper.style.transform = "";
//   upper.style.top = "";
//   lower.style.transform = "";
//   lower.style.bottom = "";
//   menu.style.bottom = "-100px";
// }

// function hamX(target) {
//   const upper = target.children[0];
//   const mid = target.children[1];
//   const lower = target.children[2];
//   const menu = target.nextElementSibling;
//   mid.style.background = "transparent";
//   upper.style.transform = "rotate(45deg)";
//   upper.style.top = "14px";
//   lower.style.transform = "rotate(-45deg)";
//   lower.style.bottom = "14px";
//   menu.style.bottom = "70px";
// }

export default Ham;
