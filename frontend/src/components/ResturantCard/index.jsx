import "./resturantCard.css";
import StarRating from "../StarRating/indx";

const ResturantCard = ({
  title,
  address,
  totalRatingNumber,
  StarsNumber,
  image,
}) => {
  return (
    <div className="resturant-card-container">
      <h4 className="resturantCardTitle">{title}</h4>
      <p className="resturantCardAddress">{address}</p>
      <StarRating
        StarRating={StarsNumber}
        totalRatingNumber={totalRatingNumber}
        ExtraClasses={"starsMargin"}
      />
      <img src={image} alt={title} className="resturant-card-image" />
    </div>
  );
};

export default ResturantCard;
