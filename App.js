import React from "react";
import ReactDOM from "react-dom/client";

// Functional Component

const Heading = () => {
  return (
    <div className="div">
      <h1>React series part 1</h1>
    </div>
  );
};

const Heading2 = () => {
  return (
    <div className="div2">
      <h1>React series part 2</h1>
      <Heading />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading2 />);
