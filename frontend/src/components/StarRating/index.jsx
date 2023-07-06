import { useState } from "react";
import { RiStarSFill } from "react-icons/ri";
import "./startRating.css";

const StarRating = ({ StarRating, totalRatingNumber, ExtraClasses, Input = false }) => {
  const [ratingSet, setRating] = useState();

  return (
    <div className={`starRating-container ${ExtraClasses}`}>
      <div>
        {[...Array(5)].map((item, idx) => {
          const ratingValue = idx + 1;
          return (
            <label key={idx}>
              <input
                type="radio"
                name="rating"
                className=" startInput"
                value={ratingSet === 0 ? 5 : ratingValue}
              />
              <RiStarSFill
                className="starSize"
                color={
                  StarRating && StarRating >= ratingValue
                    ? "#ffc107"
                    : "#EAEAEA"
                }
              />
            </label>
          );
        })}
      </div>
      <p className="totalRatingNumber">{totalRatingNumber}</p>
    </div>
  );
};

export default StarRating;
