import axios from "axios";
import { useEffect, useState} from "react";
import "./userProfile.css";
import zurichSkyline from '../../assets/images/zuerich-skyline.jpg'
import profilePicture from '../../assets/images/profile-picture.png'
import UserProfileMenu from "../../components/UserProfile/UserProfileMenu/UserProfileMenu.jsx";
// import UserProfileReviews from "../../components/UserProfile/UserProfileReviews/UserProfileReviews.jsx";
import UserProfileRestaurants from "../../components/UserProfile/UserProfileRestaurants/UserProfileRestaurants.jsx";
import UserProfileEdit from "../../components/UserProfile/UserProfileEdit/UserProfileEdit.jsx";
const UserProfile = () => {
    const [user, setUser] = useState(null)
     useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users/me/');
        setUser(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
    }, []);

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
                         {/*<UserProfileReviews />*/}
                         {/*<UserProfileRestaurants />*/}
                         <UserProfileEdit />
                    </div>
                    <div className="about-user">
                        <div className="about-user-title"><h2>ABOUT LAURENT</h2></div>
                        <div className="about-location-city">
                            <h3 className="about-user-h3-headings">Location</h3>
                            <p className="about-user-paragraphs">Zurich, CH</p>
                        </div>
                        <div className="about-luna-member-since">
                            <h3 className="about-user-h3-headings">Luna Member Since</h3>
                            <p className="about-user-paragraphs">April, 2018</p>
                        </div>
                         <div className="about-things-love-things">
                            <h3 className="about-user-h3-headings">Things I Love</h3>
                            <p className="about-user-paragraphs">Everything</p>
                        </div>
                        <div className="about-description-text">
                            <h3 className="about-user-h3-headings">Description</h3>
                            <p className="about-user-paragraphs">Im professional photographer with an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop and take notes</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default UserProfile