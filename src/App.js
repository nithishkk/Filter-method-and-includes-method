import React from "react";
import "./style.css";
const react=["React allows you to interface with other libraries and frameworks. This example uses remarkable, an external Markdown library, to"]

const user=["Nithish","React","JavaScript","Html","Css","Hampi","Harish"]
const nithish= react.filter(nithi=>nithi.includes("n"))
export default function App() {
  return (
    <div>
      {nithish}
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
