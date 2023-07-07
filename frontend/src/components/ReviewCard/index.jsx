import { useState, useEffect } from "react";
import { axiosLuna } from "../../axios/axiosInstance";
import LunaLogo from "../../assets/images/luna-logo.svg";
import LikeIcon from "../../assets/icons/like.svg";
import AccordionBox from "./AccordionBox";
import { Link } from "react-router-dom";
import "./reviewcard.css";

const ReviewCard = ({
  userId,
  commentText,
  restaurantName,
  restaurantId,
  likesNumber,
  commentsNumber,
  comments,
}) => {
  const [user, setUser] = useState();
  console.log(user);
  console.log(userId);
  useEffect(() => {
    axiosLuna
      .get(`/users/${userId}`)
      .then(res => setUser(res.data))
      .catch(err => console.log(err.message));
  }, [userId]);

  return (
    <div className="review-card-container">
      <div className="review-card-userInof">
        <img
          src={user?.profile_picture || LunaLogo}
          alt={user?.first_name}
          className="userProfile-image"
        />
        <div className="userName-reviewsNumber">
          <h4>
            {user?.first_name} {user?.last_name?.charAt(0).toUpperCase()}
          </h4>
          <p>{Math.floor(Math.random() * 100) + 1} Reviews in total</p>
        </div>
      </div>
      <div className="restaurantName-reviewBody">
        <Link to={`restaurants/${restaurantId}`} target="_blank">
          <h4>{restaurantName}</h4>
        </Link>
        <AccordionBox>{commentText}</AccordionBox>
      </div>
      <div className="likes-comments">
        <div className="likes-number">
          <img src={LikeIcon} width={20} height={20} />
          <p>Likes {likesNumber}</p>
        </div>
        <div className="comments-number">
          <p>comments {commentsNumber}</p>
        </div>
      </div>
      <div className="latest-comments-wrapper">
        <h4>Latest comments</h4>
        <div>
          {comments?.slice(0, 3).map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
