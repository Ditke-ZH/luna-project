import "./userProfile.css";
import zurichSkyline from '../../assets/images/zuerich-skyline.jpg'
import profilePicture from '../../assets/images/profile-picture.png'
import UserProfileMenu from "../../components/UserProfile/UserProfileMenu/UserProfileMenu.jsx";
// import {useEffect, useState} from "react";
import UserProfileReviews from "../../components/UserProfile/UserProfileReviews/UserProfileReviews.jsx";
const UserProfile = () => {
    // useState()
    // useEffect(fetch)
    // fetch
    return (
        <>
            <div className="user-profile-page-container">
                <div className="user-profile-page-header">
                    <img className="header-image" src={zurichSkyline} alt="zurich-skyline"/>
                </div>
                <div className="user-main-body-container">
                    <div className="user-img-menu-container">
                        <div className="user-image-container">
                            <img className="user-image" src={profilePicture} alt="user-profile-picture"/>
                            <UserProfileMenu/>
                        </div>
                    </div>
                     <div className="user-info-reviews">
                         <div className="user-info">
                             <h2 className="user-info-full-name">Laurent H.</h2>
                             <p className="user-info-elements">Zurich, CH</p>
                             <p className="user-info-elements">6 reviews</p>
                             <p className="user-info-elements">210 comments</p>
                         </div>
                         <UserProfileReviews />
                    </div>
                    <div className="about-user">
                    </div>

                </div>
            </div>

        </>
    )
}

export default UserProfile