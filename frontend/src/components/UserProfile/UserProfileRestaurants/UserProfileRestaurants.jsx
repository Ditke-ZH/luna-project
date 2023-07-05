import React from "react";
import "./UserProfileRestaurants.css";
import Button from "../../Button/Button.jsx";


const UserProfileRestaurants = () => {
    return (
        <div className="user-profile-restaurants-container">
            <h2 className="user-profile-restaurants-title">RESTAURANTS</h2>
            <div className="user-profile-restaurants-content-container">
                <div className="user-profile-restaurants-name-container">
                    <ul className="user-profile-name-time">
                        <li className="user-profile-restaurants-name">Laurentio Gelato Store</li>
                    </ul>
                    <div className="star-container">
                        <div className="star-filled"><p
                            dangerouslySetInnerHTML={{__html: "&#9733; &#9733; &#9733; &#9733; &#9733;"}}></p></div>
                        <div className="star-unfilled"><p
                            dangerouslySetInnerHTML={{__html: "&#9733; &#9733; &#9733; &#9733; &#9733;"}}></p></div>
                    </div>
                    <div className="user-profile-restaurants-text">
                        <p>Lorem ipsum dolor sit amet, et legere populo quodsi sea. Nec quodsi albucius eu, simul soleat
                            accusata te sea. Vix maluisset sententiae et, eam an salutatus consectetuer, ludus partiendo
                            te ius. Vivendum convenire pro in. Cum impedit honestatis eu.</p>
                    </div>
                </div>
            </div>
            <div className="create-restaurants-button">
                <Button className="use-restaurant-create-btn">Create Restaurant</Button>
            </div>
        </div>
    );
};

export default UserProfileRestaurants