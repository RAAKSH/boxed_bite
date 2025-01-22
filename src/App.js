import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import { Body } from "./Components/Body";
import { About } from "./Components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

// const headings = React.createElement("h5", { id: "heading" }, "hai Raksha");

// const jsxHeading = <h1 id="heading">Namaste React!!!!!!</h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// const Ht1 = ()=><h1>This is the first heading</h1>;

//React Component

const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

root.render(<RouterProvider router={appRouter} />);
