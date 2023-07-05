import React from "react";
import "./UserProfileEdit.css";
import Button from "../../Button/Button.jsx";

const UserProfileEdit = () => {
    return (
        <div className="user-profile-edit-container">
            <h2 className="user-profile-edit-title">EDIT USERPROFILE</h2>
            <div className="user-profile-edit-content-container">
                <div className="user-profile-edit-entry-container">
                    <div className="user-profile-edit-entry-container-username">
                    <h2 className="user-profile-edit-entry-label">Username</h2>
                    <input className="user-profile-edit-text-field" type="text" />
                        </div>
                </div>
            </div>
            <div className="create-edit-button">
                <Button className="use-edit-create-btn">Save</Button>
            </div>
        </div>
    );
};

export default UserProfileEdit