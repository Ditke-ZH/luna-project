import React from "react";
import pin from "../../assets/icons/pin.svg";
import phone from "../../assets/icons/phone.svg";
import web from "../../assets/icons/web.svg";
import "./LocationInformation.css";

export default function LocationInformation() {
  return (
    <div className="LocationInformationDiv">
      <div className="TopDiv">
        <div>Here comes the map</div>
      </div>
      <div className="BottomDiv">
        <div className="address">
          <img src={pin} alt="Location Pin" height="26" />
          <div>Bahnhofstrasse 106, 8001 Zürich</div>
        </div>
        <div className="phone">
          <img src={phone} alt="Phone Icon" height="26" />
          <div>+41 44 211 53 72</div>
        </div>
        <div className="website">
          <img src={web} alt="Web Icon" height="26" />
          <a href="https://laderach.com/ch-en/">laederach.com</a>
        </div>
      </div>
    </div>
  );
}
