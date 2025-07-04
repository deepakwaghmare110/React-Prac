import React from "react";
import RestroCard from "./RestroCard";
import resObj from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((resturant) => (
          <RestroCard resData={resturant} key={resturant.Id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
