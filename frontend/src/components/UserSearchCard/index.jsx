import React from "react";
import LunaLogo from "../../assets/images/luna-logo.svg";
import AccordionBox from "../ReviewCard/AccordionBox";
import "./userCard.css";

const UserSearchCard = ({ profileImage, firstName, lastName, about }) => {
  return (
    <div className="review-card-container">
      <div className="user-card-userInof ">
        <img
          src={profileImage || LunaLogo}
          alt={firstName}
          className="userCardProfile-image "
        />
        <div className="userCard-userName-reviewsNumber">
          <h4>
            {firstName || "Anonymous"} {lastName?.charAt(0).toUpperCase()}
          </h4>
          <p>{Math.floor(Math.random() * 100) + 1} Reviews in total</p>
        </div>
      </div>
      <div className="restaurantName-reviewBody">
        <AccordionBox>
          {about || "The user didn't share information."}
        </AccordionBox>
      </div>
    </div>
  );
};

export default UserSearchCard;
