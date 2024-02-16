// import React from "react";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="item">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          // width="40px"
          alt="react logo."
        />

        <ul className="nav-items">
          <li>Pricing</li>
          <li>About </li>
          <li>Content </li>
        </ul>
      </nav>
    </header>
  );
}
// ReactDOM.render(<Header />, document.getElementById("root"));
