import React from "react";
import ReactDOM from "react-dom/client";

//Header
//Navbar
//Logo
//

//Body
//Footer

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://images-platform.99static.com/A_Ax0GQuo_NHI0Y7XZHmFtGfBDY=/0x0:1000x1000/500x500/top/smart/99designs-contests-attachments/126/126252/attachment_126252018"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"> search</div>
      <div className="res-container">
        <RestroCard
          resName="Shravani Dhaba"
          cuisine="Indian, Chinese"
          rating="5.5"
          eta="39 mins"
        />
        <RestroCard
          resName="Burger King"
          cuisine="Burger, Fries"
          rating="9.3"
          eta="40 mins"
        />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
      </div>
    </div>
  );
};

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
