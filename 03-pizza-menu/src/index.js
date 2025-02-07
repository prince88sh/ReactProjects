import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const headerStyle = {
  //   color: "orange",
  //   fontSize: "48px",
  //   textTransform: "uppercase",
  // };
  const headerStyle = {};
  return (
    <header className="header">
      <h1 style={headerStyle}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzaList = pizzaData;
  const numPizzas = pizzaList.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic italian cuisine, 6 creative dishes to choose from. All
            from our stone oven, all organic and all delicious.
          </p>
          <ul className="pizzas">
            {/* {pizzaData.map(pizza=><Pizza name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName} price={pizza.price}/>)}
             */}
            {pizzaList.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>WE're still working on the menu. Please come back later :) </p>
      )}
      {/* <Pizza name="Focaccia" ingredients="Bread with italian olive oil and rosemary" photoName="pizzas/focaccia.jpg" price={10}/>
      <Pizza name="Pizza Margherita" ingredients="Tomato and mozarella" photoName="pizzas/margherita.jpg" price={12}/> */}
    </main>
  );
}

// so for the below one we can use props instead of pizzaObj but remember to add {} (curly braces)which mean destructinh the object
function Pizza({ pizzaObj }) {
  console.log(pizzaObj, "sadsvb");
  return (
    <div className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  if (isOpen) console.log("We're currently open");
  else console.log("Sorry we're Closed");

  // return React.createElement("footer", null, "We're currently open");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHour} openHour={openHour} />
      ) : (
        <p>
          Sorry we're closed. We're happy to welcome you between {closeHour}:00
          - {openHour}:00
        </p>
      )}
    </footer>
  );
}

const Order = ({ closeHours, openHour }) => {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHours}:00. Come vist us or order
        online.
      </p>
      <button className="btn">Order now</button>
    </div>
  );
};
//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
/* Adding strict mode */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before v18
// React.render(<App />,document.getElementById("root"));
