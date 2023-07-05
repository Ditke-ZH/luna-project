import React from "react";
import "./UserProfileReviews.css";


const UserProfileReviews = () => {
    return (
        <div className="user-profile-reviews-container">
            <h2 className="user-profile-reviews-title">REVIEWS</h2>
            <div className="user-profile-review-container">
                <div className="user-profile-review-name-datetime">
                    <ul className="user-profile-name-time">
                        <li className="user-profile-review-name">Läderach Chocolatier Suisse
                        </li>
                        <li className="user-profile-review-time">01.01.2018 15:22
                        </li>
                    </ul>
                    <div className="star-container">
                        <div className="star-filled"><p dangerouslySetInnerHTML={{ __html: "&#9733; &#9733; &#9733; &#9733; &#9733;" }}></p></div>
                        <div className="star-unfilled"><p dangerouslySetInnerHTML={{ __html: "&#9733; &#9733; &#9733; &#9733; &#9733;" }}></p></div>
                    </div>
                    <div className="user-profile-reviews-text">
                        <p>This location at the Bahnhofstrasse is quite friendly and easily located across the street
                            from the train station. The people there seem to be quite good and helpful in their
                            service</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default UserProfileReviews