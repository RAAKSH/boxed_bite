import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello world from React"
// );

{
  /* <div id="parent">
  <div id="child">
    <h1> I am an H1 Tag</h1>
    <h2> I am an H2 Tag</h2>
  </div>
</div> */
}

// const heading1 = React.createElement(
//   "div",
//   {},
//   React.createElement("div", {}, [
//     React.createElement("h1", {}, "NAMSTE REACT abc "),
//     React.createElement("h2", {}, "I am a h2 tag"),
//   ])
// );

// console.log("abc", heading1);

// const root = ReactDOM.createRoot(document.getElementById("parent"));
// root.render(heading1);


const headings=React.createElement("h5",{id:"heading"},"hai Raksha");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headings);