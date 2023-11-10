import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

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
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <h1 style={{ textAlign: "center", fontSize: "18px" }}>
      Fast React Pizza Co.
    </h1>
  );
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour > openHour && hour < closeHour;
  console.log(isOpen);
  // if (isOpen) alert("We're currently open.");
  // else alert("We're currently closed.");

  return (
    <footer style={{ textAlign: "center" }}>
      {new Date().toLocaleTimeString()} We're currently{" "}
      {isOpen ? "open" : "closed"}.
    </footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="pizza spinaci" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
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
