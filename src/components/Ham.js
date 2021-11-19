const Ham = () => {
  return (
    <ul
      id="ham"
      onClick={(e) => {
        let target = e.target;
        if (target.tagName === "LI") {
          target = e.target.parentElement;
        }
        const upper = target.children[0];
        const mid = target.children[1];
        const lower = target.children[2];
        const menu = target.nextElementSibling;
        if (mid.style.background !== "transparent") {
          mid.style.background = "transparent";
          upper.style.transform = "rotate(45deg)";
          upper.style.top = "14px";
          lower.style.transform = "rotate(-45deg)";
          lower.style.bottom = "14px";
          menu.style.top = "70px";
        } else {
          mid.style.background = "";
          upper.style.transform = "";
          upper.style.top = "";
          lower.style.transform = "";
          lower.style.bottom = "";
          menu.style.top = "-100px";
        }
      }}
    >
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
};

export default Ham;
