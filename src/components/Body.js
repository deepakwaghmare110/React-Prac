import React, { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import resObj from "../utils/mockData";

const Body = () => {
  const [restro, setRestro] = useState(resObj);

  const handleFilter = () => {
    const filtered = resObj.filter((res) => {
      return res.rating > 4;
    });
    setRestro(filtered);
  };

  useEffect(() => {});

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Resturants Near me
        </button>
      </div>
      <div className="res-container">
        {restro.map(
          (
            resturant // on initial level restro is equal resObj but later it gets chnaged when filter method is applied.
          ) => (
            <RestroCard resData={resturant} key={resturant.Id} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
