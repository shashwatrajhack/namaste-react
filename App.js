import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "namste react ....!!"
);

//jsx syntax

const jsxHeading = <h1>React Element by jsx syntax!!!...</h1>


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);