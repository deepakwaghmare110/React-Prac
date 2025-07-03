const RestroCard = (props) => {
  return (
    <div className="res">
      <h3>{props.resName}</h3>

      <img
        className="res-img"
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/86/c2/c2/photo0jpg.jpg?w=600&h=400&s=1"
      ></img>
      <h4>{props.cuisine}</h4>
      <h4>{props.rating}</h4>
      <h4>{props.eta}</h4>
    </div>
  );
};

export default RestroCard;
