import React from "react";

const RestroCard = ({ resData }) => {
  const { name, avgRating, city, cuisines } = resData?.info;
  const imagePath =
    "THUMBNAIL/IMAGES/VENDOR/2025/6/18/2d14392e-f99d-404b-a5be-af48ee242dca_203926.jpg";

  return (
    <div className="res">
      <h3>{name}</h3>
      <h4>{city}</h4>
      <h4>{avgRating}</h4>
      <h3>{cuisines + "  "}</h3>
    </div>
  );
};

export default RestroCard;
