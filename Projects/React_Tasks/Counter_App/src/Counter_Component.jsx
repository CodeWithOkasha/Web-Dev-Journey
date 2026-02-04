// import logo from "./assets/brand_logo.png";
// export default function Nav_Component() {
//   return (
//     <nav>
//     <div className="NavBar">
//       <img
//         src={logo}
//         alt="logo"
//         style={{ width: "50px", height: "50px" }}
//       />
//       <menu class="menu_list" style={{color:"white"}}>
//         <li>MENU</li>
//         <li>LOCATION</li>
//         <li>CONTACT</li>
//         <li>ABOUT</li>
//       </menu>
//       <button style={{ padding:"7px",color: "White",backgroundColor:"red" }}>Login</button>
//     </div>
//     </nav>
//   );
// }

import { useState } from "react";

export function Counter_App() {
  const [countVal,setCountVal]=useState(0);
  const increment=()=>{
  setCountVal(countVal+1);
  }
  const decrement=()=>{
  setCountVal(countVal-1);
  }
  const reset=()=>{
  setCountVal(0);
  }
  return(
    <div className="counter_container">
    <p className="current_val">{countVal}</p>
    <button className="increment_counter" onClick={increment}>Increment</button>
    <button className="decrement_counter"  onClick={decrement}>Decrement</button>
    <button className="reset_btn" onClick={reset}>Reset</button>
    </div>
    
  );
}