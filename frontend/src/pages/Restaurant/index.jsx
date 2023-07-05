import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import "./restaurant.css";
import RestaurantHeader from "../../components/RestaurantHeader/RestaurantHeader";
import LocationInformation from "../../Components/LocationInformation/LocationInformation";
import RestaurantReview from "../../Components/RestaurantReviewWide/RestaurantReview";
import RestaurantInformation from "../../Components/RestaurantInformation/RestaurantInformation";

export default function RestaurantPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState([]);
  const getFetchData = async (link) => {
    const { data } = await axios.get(link);

    setFetchData(data);
  };
  useEffect(() => {
    if (navigate.location.pathname.startsWith(`/restaurants/${id}`))
      getFetchData(
        `https://luna3.propulsion-learn.ch/backend/api/restaurants/${id}/`
      );
  }, []);

  const reviews = [fetchData.restaurant_reviews];

  return (
    <div className="RestaurantPageDiv">
      <div className="Header-div">
        <RestaurantHeader />
        <LocationInformation />
      </div>

      <div className="Bottom-div">
        <div className="left">
          <div className="Filter-div">
            <input
              type="search"
              placeholder="Filter list..."
              className="FilterBar"
            />
            <button href="#" className="FilterButton">
              FILTER
            </button>
          </div>
          <div className="cardContainer">
            {reviews.map((value, index) => {
              return RestaurantReview(value);
            })}
          </div>
        </div>
        <RestaurantInformation />
      </div>
    </div>
  );
}
