import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return <h1>Hello React!</h1>;
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
