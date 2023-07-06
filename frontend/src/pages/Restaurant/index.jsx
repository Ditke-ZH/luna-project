import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./restaurant.css";
import LocationInformation from "../../components/LocationInformation/LocationInformation";
import RestaurantReview from "../../components/RestaurantReview/RestaurantReview";
import RestaurantInformation from "../../components/RestaurantInformation/RestaurantInformation";
import { axiosLuna } from "../../axios/axiosInstance";
// import Loader from "../../components/Loader/Loader";
import Container from "../../components/container/Container";
import StarRating from "../../components/StarRating/indx";

export default function RestaurantPage() {
  const { resturantId } = useParams();

  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const getFetchData = async () => {
      const res = await axiosLuna.get(`/restaurants/${resturantId}`);
      const data = res?.data;
      setFetchData(data);
    };
    getFetchData();
  }, []);
  console.log(fetchData);
  const reviews = [fetchData?.restaurant_reviews];

  return (
    <article className="RestaurantPageDiv">
      <div
        className="Header-div"
        style={{ backgroundImage: `url(${fetchData.image})` }}
      >
        <Container>
          <div className="restaurant-title-rating">
            <div>
              <h1>{fetchData.name}</h1>
              {fetchData.categories?.map((item) => <p>{item}</p>) || (
                <p>Unknown</p>
              )}
              <StarRating
                StarRating={fetchData.rating_average}
                totalRatingNumber={fetchData.review_count}
                ExtraClasses="resturant-stars"
              />
            </div>
            <LocationInformation restaurantData={fetchData} />
          </div>
        </Container>
      </div>
      <Container>
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
                return <RestaurantReview key={index} />;
              })}
            </div>
          </div>
          <RestaurantInformation />
        </div>
      </Container>
    </article>
  );
}
