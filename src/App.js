import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const RestroCard = (props) => {
  return (
    <div className="res">
      <h3>{props.resName}</h3>

      <img
        className="res-img"
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/86/c2/c2/photo0jpg.jpg?w=600&h=400&s=1"
      ></img>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.eta}</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
