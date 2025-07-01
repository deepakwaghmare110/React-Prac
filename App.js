import React from "react";
import ReactDOM from "react-dom/client";

const Heading = <h1>Hello World</h1>;

// Functional Component

const HeadingComponent = () => {
  return <h1>Hello world from ReactJS</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
