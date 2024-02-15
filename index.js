// import ReactDOM from "react";

function BYMy() {
  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        width="40px"
        alt="react logo."
      />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was firs released in 2013</li>
        <li>Was originally created by Jordan Walker</li>
        <li>Is maintained by Facebook</li>
        <li>Has well over 100K stars on Github</li>
        <li>Powers thousands of enterprise apps, including mobie apps</li>
      </ul>
    </div>
  );
}
ReactDOM.render(<BYMy />, document.getElementById("rut"));

function FirstReactMy() {
  return (
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        width="40px"
        alt="react logo."
      />
      <h1>Fun facts about React</h1>
      <ul>
        <li>20000000</li>
        <li>Was originally created by Jordan Walker</li>
        <li>Is maintained by Facebook</li>
        <li>Has well over 100K stars on Github</li>
        <li>Powers thousands of enterprise apps, including mobie apps</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<FirstReactMy />, document.getElementById("root"));

function Header() {
  return (
    <div>
      <header>
        <nav>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            width="40px"
            alt="react logo."
          />
        </nav>
        <ol>
          <li>200</li>
          <li>Was </li>
          <li>Is </li>
          <li>Has </li>
          <li>Powers</li>
        </ol>
      </header>
    </div>
  );
}

ReactDOM.render(<Header />, document.getElementById("root"));
