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
                <div className="review-page-bottom-content">
                    <div className="review-rating-container">
                        <div className="rating-stars-select-container">
                            <div className="select-your-stars">
                            <StarRating/>
                            <p className="select-rating">Select your rating:</p>
                        </div>
                        <div className="review-input-container">
                            <input className="review-user-input-text" placeholder="Your review helps others learn about great local businesses.
Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees." type="text"/>
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
