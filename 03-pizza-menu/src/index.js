import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// 将CSS文件导入到JS文件中，webpack会将CSS文件转换为JS文件，然后将其注入到HTML文件中。这样做的好处是，可以在JS文件中使用CSS文件中的类名，而不用担心类名冲突的问题。

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
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <React.Fragment>
          {/* // ! We use fragment( fragment is an empty tag ) to wrap multiple elements. 
                  Also we can add React.Fragment into the empty tag for adding a key for it */}
          <p>
            Authentic italian cuisine. 6 creative dhishes to choose from. All
            from our stone oven, all organic, all delicoius.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on Our menu. Please come back later :)</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        price={12}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // use destructuring to get the props
  console.log(pizzaObj);

  if (pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  // 营业时间大于开门时间且小于关门时间
  const isOpen = hour > openHour && hour < closeHour;
  console.log(isOpen);
  // if (isOpen) alert("We're currently open.");
  // else alert("We're currently closed.");

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or Order
        oline.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// render method after React 17
const root = ReactDOM.createRoot(document.getElementById("root"));
// 严格模式会渲染两次，第一次是为了检查是否有副作用，第二次才是真正的渲染。并且会检查不安全的生命周期方法和过时的ref字符串API。以及一些过时的findDOMNode方法。
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// render method before React 17
// ReactDOM.render(<App />, document.getElementById("root"));
