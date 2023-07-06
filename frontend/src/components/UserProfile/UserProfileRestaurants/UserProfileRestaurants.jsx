import React, {useEffect, useState} from "react";
import "./UserProfileRestaurants.css";
import Button from "../../Button/Button.jsx";
import {axiosMotion} from "../../../axios/axiosInstance.js";


const UserProfileRestaurants = () => {
    const [restaurants, setRestaurants] = useState([])
    const fetchRestaurantsData = async () => {
        try {
            const response = await axiosMotion.get('/restaurants/user/1/');
            console.log(response, '>>> Restaurant line11')
            setRestaurants(response.data);
            console.log(response.data, '>>> Restaurant line13')
        } catch (error) {
            console.error('Error fetching comments data:', error);
        }
    };

    useEffect(() => {
        fetchRestaurantsData();
    }, []);

    return (
        <div className="user-profile-restaurants-container">
            <h2 className="user-profile-restaurants-title">RESTAURANTS</h2>
            {restaurants?.map((restaurant) => {
                return(
            <div className="user-profile-restaurants-content-container">
                <div className="user-profile-restaurants-name-container">
                    <ul className="user-profile-name-time">
                        <li className="user-profile-restaurants-name">{restaurant.name}</li>
                    </ul>
                    <div className="star-container">
                        <div className="star-filled"><p
                            dangerouslySetInnerHTML={{__html: "&#9733; &#9733; &#9733; &#9733; &#9733;"}}></p></div>
                        <div className="star-unfilled"><p
                            dangerouslySetInnerHTML={{__html: "&#9733; &#9733; &#9733; &#9733; &#9733;"}}></p></div>
                    </div>
                    <div className="user-profile-restaurants-text">
                        <p>{restaurant.description}</p>
                    </div>
                </div>
            </div>)
                })
            }
            <div className="create-restaurants-button">
                <Button className="use-restaurant-create-btn">Create Restaurant</Button>
            </div>
        </div>
    );
};

export default UserProfileRestaurants