import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import StarRating from "../StarRating/indx";
import "./RestaurantHeader.css";

export default function RestaurantHeader() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState([]);
  const getFetchData = async (link) => {
    const { data } = await axios.get(link);
    // console.log("full data", data);
    setFetchData(data);
  };
  useEffect(() => {
    if (navigate.location.pathname.startsWith(`/restaurants/${id}`))
      getFetchData(
        `https://luna3.propulsion-learn.ch/backend/api/restaurants/${id}/`
      );
  }, []);

  const backgroundIMG = {
    backgroundImage: `url(${fetchData.image})`,
  };
  return (
    <div className="RestaurantHeaderDiv" style={backgroundIMG}>
      <div className="RestaurantHeaderDivContainer">
        <h3>{fetchData.name}</h3>
        <h5>{category[fetchData.category - 1]}</h5>
        <div className="rating">
          <StarRating
            StarRating={StarsNumber}
            totalRatingNumber={totalRatingNumber}
            ExtraClasses={"starsMargin"}
          />
        </div>
      </div>
    </div>
  );
}
