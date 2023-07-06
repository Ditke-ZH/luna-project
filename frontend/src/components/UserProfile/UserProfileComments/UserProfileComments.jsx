import React, {useEffect, useState} from "react";
import "./UserProfileComments.css";
import {axiosLuna} from "../../../axios/axiosInstance.js";


const UserProfileComments = () => {
    const [comments, setComments] = useState([])
    const fetchCommentsData = async () => {
        try {
            const response = await axiosLuna.get('/review/comment/1/');
            console.log(response, '>>> Comments line11')
            setComments(response.data);
            console.log(response.data, '>>> Comments line13')
        } catch (error) {
            console.error('Error fetching comments data:', error);
        }
    };

    useEffect(() => {
        fetchCommentsData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const month = date.toLocaleString("en-US", {month: "long"});
        const year = date.getFullYear();
        return `${month} ${year}`;
    };
    console.log(comments, '>>> Comments line 29')
    return (
        <div className="user-profile-comments-container">
            <h2 className="user-profile-comments-title">COMMENTS</h2>
            {comments?.map((comment) => {
                return (
                    <div className="user-profile-comments-container-details">
                        <div className="user-profile-comments-name-datetime">
                            <ul className="user-profile-name-time">
                                <li className="user-profile-comments-name">{comment.review}Review 1
                                </li>
                                <li className="user-profile-comments-time">01.01.2018 15:22
                                </li>
                            </ul>
                            <div className="user-profile-comments-text">
                                <p>{comment.text}</p>
                            </div>
                        </div>
                    </div>)
            })}
        </div>
    );
};

export default UserProfileComments