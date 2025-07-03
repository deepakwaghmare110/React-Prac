import RestroCard from "./RestroCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search"> search</div>
      <div className="res-container">
        <RestroCard
          resName="Shravani Dhaba"
          cuisine="Indian, Chinese"
          rating="5.5"
          eta="39 mins"
        />
        <RestroCard
          resName="Burger King"
          cuisine="Burger, Fries"
          rating="9.3"
          eta="40 mins"
        />
        <RestroCard />
        <RestroCard />
        <RestroCard />
        <RestroCard />
      </div>
    </div>
  );
};

export default Body;
