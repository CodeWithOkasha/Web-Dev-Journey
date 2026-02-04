import { useState } from "react";
import "./App.css";
import { Counter_App } from "./Counter_Component.jsx";
function App() {
  return (
    <>
      <h1
        style={{ color:"white",textAlign: "center", margin: "10px 0px", fontSize: "4.2rem" }}
      >
        Counter App
      </h1>
      <Counter_App />
    </>
  );
}

export default App;
