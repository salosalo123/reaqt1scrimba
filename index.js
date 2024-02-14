// const h1 = document.createElement("h1");
// h1.textContent = "Hallo";
// h1.className = "header";
// document.getElementById("root").append(h1);
// console.log(h1);

// jsx
const navbar = (
  <nav>
    <h1 className="header">Salo's saiti</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contant</li>
    </ul>
  </nav>
);
ReactDOM.render(navbar, document.getElementById("root"));
