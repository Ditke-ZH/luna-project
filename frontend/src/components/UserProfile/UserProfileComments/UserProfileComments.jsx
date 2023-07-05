import React from "react";
import "./UserProfileComments.css";


const UserProfileComments = () => {
    return (
        <div className="user-profile-comments-container">
            <h2 className="user-profile-comments-title">COMMENTS</h2>
            <div className="user-profile-comments-container-details">
                <div className="user-profile-comments-name-datetime">
                    <ul className="user-profile-name-time">
                        <li className="user-profile-comments-name">Review 1
                        </li>
                        <li className="user-profile-comments-time">01.01.2018 15:22
                        </li>
                    </ul>
                    <div className="user-profile-comments-text">
                        <p>This is Horrible!</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default UserProfileComments