import React from "react";
import pin from "../../assets/icons/pin.svg";
import phone from "../../assets/icons/phone.svg";
import web from "../../assets/icons/web.svg";
import "./LocationInformation.css";

export default function LocationInformation({ restaurantData }) {
  return (
    <div className="LocationInformationDiv">
      <div className="TopDiv">
        <div>Here comes the map</div>
      </div>
      <div className="BottomDiv">
        <div className="address">
          <img src={pin} alt="Location Pin" height="26" />
          <div>{restaurantData.street}</div>
        </div>
        <div className="phone">
          <img src={phone} alt="Phone Icon" height="26" />
          <div>{restaurantData.phone}</div>
        </div>
        <div className="website">
          <img src={web} alt="Web Icon" height="26" />
          <a href="https://laderach.com/ch-en/">laederach.com</a>
        </div>
      </div>
    </div>
  );
}
