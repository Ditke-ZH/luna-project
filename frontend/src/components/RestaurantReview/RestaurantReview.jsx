import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import profilePicture from "../../assets/images/profile-picture.png";
import like from "../../assets/icons/like.svg";
import "./RestaurantReview.css";
import { axiosLuna } from "../../axios/axiosInstance";
import StarRating from "../StarRating";
import { useSelector } from "react-redux";

export default function RestaurantReview({ restaurantData }) {
  const { restaurantId } = useParams();
  const [fetchData, setFetchData] = useState([]);
  const [fetchedReviewData, setFetchedReviewData] = useState([]);

  const accessToken = useSelector((state) => state.user.accessToken);

  useEffect(() => {
    const getFetchData = async () => {
      let config = null;
      if (accessToken) {
        config = {
          headers: { Authorization: `Bearer ${accessToken}` },
          "Content-Type": "application/json",
        };
      }
      try {
        const res = await axiosLuna.get(`/restaurants/${restaurantId}`, config);
        const data = res?.data;
        setFetchData(data);
      } catch (error) {
        console.log("Error fetching restaurant data:", error);
      }
    };
    getFetchData();
  }, [restaurantId, accessToken]);
  console.log(fetchData);

  useEffect(() => {
    const fetchReviewData = async () => {
      let config = null;
      if (accessToken) {
        config = {
          headers: { Authorization: `Bearer ${accessToken}` },
          "Content-Type": "application/json",
        };
      }
      try {
        const response = await axiosLuna.get(
          `/restaurants/${restaurantId}/reviews`,
          config
        );
        const reviewData = response?.data;
        setFetchedReviewData(reviewData);
      } catch (error) {
        console.log("Error fetching review data:", error);
      }
    };

    fetchReviewData();
  }, [restaurantId, accessToken]);

  return (
    <div className="ReviewCardContainer">
      {fetchedReviewData.map((review) => (
        <div key={review.id} className="ReviewCard">
          <div className="ReviewCardTopDiv">
            <img src={profilePicture} alt="User Profile" width="68" />
            <div className="LeftContainer">
              <h5 className="reviewerName">{review.user}</h5>
              <span className="reviewCount">
                {restaurantData.review_count > 0
                  ? `${restaurantData.review_count} Reviews in Total`
                  : "0 Reviews in Total"}
              </span>
            </div>
            <div className="rating">
              <div className="starWrapper">
                <StarRating
                  StarRating={restaurantData.rating_average}
                  totalRatingNumber={restaurantData.review_count}
                  ExtraClasses="resturant-stars"
                />
              </div>
            </div>
            <span className="CreationDate">{review.created}</span>
          </div>
          <div className="ReviewCardBottomDiv">
            <p className="ReviewText">{review.text_content}</p>
            <div className="LikeCommentContainer">
              <div className="ButtonContainer">
                <div className="Like">
                  <img src={like} alt="Like Icon" />
                  Like {review.liked_by.length}
                </div>
                <div className="Comment">Comment {review.comments.length}</div>
              </div>
              <a href="#" className="ShowComments">
                View all comments
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
