import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import { Body } from "./Components/Body";
import About from "./Components/About";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./Components/Error";
//import Contact from "./Components/Contact";
import RestraurantsMenu from "./Components/RestraurantsMenu";
import { Shimmer } from './Components/Shimmer';

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

const ContactComponent = lazy(() => import("./Components/Contact"));

const AppLayout = () => (
  <div className="app">
    <Header />
    <Outlet />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loaading</h1>}>
            <ContactComponent />
          </Suspense>
        ),
      },
      {
        path: "/restraurantDetails/:id",
        element: <RestraurantsMenu />,
        errorElement: <Error />,
      },
    ],
  },
]);

//root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
