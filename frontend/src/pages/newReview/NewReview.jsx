import React, {useEffect, useState} from "react";
import "./NewReview.css";
import reviewHeader from "../../assets/images/DSC_0213.png";
import StarRating from "../../components/StarRating";
import Button from "../../components/Button/Button.jsx";
import { useParams } from "react-router-dom"
import {axiosLuna} from "../../axios/axiosInstance.js";

const NewReview = () => {

    const [restaurant, setRestaurant] = useState({});

    const { restaurantId } = useParams()
    const InputPlaceholder = "Your review helps others learn about great local businesses. " +
        "Please don't review this business if you received a freebie for writing this review, " +
        "or if you're connected in any way to the owner or employees."

    useEffect(() => {
        const fetchRestaurantData = async () => {
            try {
                const response = await axiosLuna.get(`/restaurants/${restaurantId}`);
                console.log(response.data)
                setRestaurant(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchRestaurantData();
    }, [restaurantId]);

    return (
        <>
            <main className="new-review-page-wrapper">
                <div className="new-review-page-container">
                    <div className="new-review-page-header">
                        <img className="new-review-header-image" src={restaurant.image} alt="Review Header"/>
                        <div className="new-review-overlay-image"></div>
                    </div>
                </div>
                <div className="review-page-bottom-content">
                    <div className="review-rating-container">
                        <div className="rating-stars-select-container">
                            <div className="select-your-stars">
                            <StarRating input={true}/>
                            <p className="select-rating">Select your rating:</p>
                        </div>
                        <div className="review-input-container">
                            <input className="review-user-input-text" placeholder={InputPlaceholder} type="text"/>
                        </div>

                        <div className="review-save-edit-button-delete-container">
                            <ul className="review-save-edit-button-delete-list">
                                <li className="review-delete-account">This Field is required</li>
                                <li className="review-save-edit"><Button>Submit</Button></li>


                            </ul>
                        </div>
                            </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default NewReview;
