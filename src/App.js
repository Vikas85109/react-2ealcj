import React from "react";
import Comp from './Comp'
import "./style.css";

export default function App() {
  const [flag,setFlag]=useState(true);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Comp/>
    </div>
  );
}
