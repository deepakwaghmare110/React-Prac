import React, { useState } from "react";
import RestroCard from "./RestroCard";
import resObj from "../utils/mockData";

const Body = () => {
  const [restro, setRestro] = useState(resObj);
  const [inputSearch, setInputSearch] = useState("");
  const [filteredResturant, setFilteredResturant] = useState([]);

  const handleFilter = () => {
    const filtered = resObj.filter((res) => {
      return res.rating > 4;
    });
    setFilteredResturant(filtered);
  };

  const handleSearch = () => {
    const filteredResturant = resObj.filter((res) =>
      res.name.toLowerCase().includes(inputSearch.toLowerCase())
    );
    setRestro(filteredResturant);
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for resturants,cafe src."
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          ></input>
          <button onClick={handleSearch} className="search-btn">
            Search
          </button>
        </div>
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
