import React from "react";
import RestroCard from "./RestroCard";
import resObj from "./resData"; // move data to a separate file

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
      </div>
    </div>
  );
};

export default Body;
