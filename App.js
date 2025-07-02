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
      <div className="search">
        search
        <RestroCard />
      </div>
    </div>
  );
};

const RestroCard = () => {
  return (
    <div className="res-container">
      <h3>Shravani Dhaba</h3>

      <img
        className="res-img"
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/86/c2/c2/photo0jpg.jpg?w=600&h=400&s=1"
      ></img>
      <h4>Indian, chinese</h4>
      <h4>4.4 stars</h4>
      <h4>40 mins</h4>
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
