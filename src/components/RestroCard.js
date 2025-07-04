import React from "react";
import { IMG_URL } from "../utils/constants";

const RestroCard = ({ resData }) => {
  return (
    <div className="res">
      <h3>{resData.name}</h3>
      <img className="res-img" src={resData.img} alt={resData.name} />
      <h4>{resData.city}</h4>
      <h4>{resData.rating}</h4>
    </div>
  );
};

export default RestroCard;
