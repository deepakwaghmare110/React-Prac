import React from "react";

const RestroCard = ({ resData }) => {
  const { name, avgRating, city } = resData.info;
  return (
    <div className="res">
      <h3>{name}</h3>
      <h4>{city}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestroCard;
