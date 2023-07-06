import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import StarRating from "../StarRating/indx";
import "./RestaurantHeader.css";

export default function RestaurantHeader({ resturantData }) {
  const backgroundIMG = resturantData?.image;
  return (
    <div className="RestaurantHeaderDiv" style={backgroundIMG}>
      {/* <div className="RestaurantHeaderDivContainer">
        <h3>{fetchData.name}</h3>
        <h5>{category[fetchData.category - 1]}</h5>
        <div className="rating">
          <StarRating
            StarRating={StarsNumber}
            totalRatingNumber={totalRatingNumber}
            ExtraClasses={"starsMargin"}
          />
        </div>
      </div> */}
    </div>
  );
}
