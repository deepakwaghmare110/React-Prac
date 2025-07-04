import React from "react";
import RestroCard from "./RestroCard";
import resObj from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filterRes = resObj.filter((res) => {
              return res.rating > 4;
            });
            console.log(filterRes);
          }}
        >
          Top Rated Resturants Near me
        </button>
      </div>
      <div className="res-container">
        {resObj.map((resturant) => (
          <RestroCard resData={resturant} key={resturant.Id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
