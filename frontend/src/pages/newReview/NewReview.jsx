import React from "react";
import "./NewReview.css";
import reviewHeader from "../../assets/images/DSC_0213.png";
import StarRating from "../../components/StarRating/indx.jsx";
import Button from "../../components/Button/Button.jsx";

const NewReview = () => {

    return (
        <>
            <main className="new-review-page-wrapper">
                <div className="new-review-page-container">
                    <div className="new-review-page-header">
                        <img className="new-review-header-image" src={reviewHeader} alt="Review Header"/>
                        <div className="new-review-overlay-image"></div>
                    </div>
                </div>
                <div className="review-rating-container">
                    <div className="select-your-rating">
                        <StarRating/>
                        <p>Select your rating:</p>
                    </div>
                    <div className="review-input-container">
                        <input type="text"/>
                    </div>
                    <div className="save-edit-button-delete-container">
                        <ul className="save-edit-button-delete-list">
                            <li className="save-edit"><Button>Save</Button></li>
                            <li className="delete-account">Delete Account</li>

                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default NewReview;
