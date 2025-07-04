import React from "react";

const RestroCard = ({ resData }) => {
  return (
    <div className="res">
      <h3>{resData.name}</h3>
      <img
        className="res-img"
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/86/c2/c2/photo0jpg.jpg?w=600&h=400&s=1"
        alt={resData.name}
      />
      <h4>City:{resData.city}</h4>
      <h4>Rating:{resData.rating}</h4>
    </div>
  );
};

export default RestroCard;
