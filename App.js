const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React"
);

const root = ReactDOM.createRoot(document.getElementById("parent"));
root.render(heading);
