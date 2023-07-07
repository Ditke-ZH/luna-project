import { useState } from "react";
import "./accordionBox.css";

const AccordionBox = ({ children }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const paraghraphCheck = children.length <= 60;
  return (
    <div>
      <p className={isReadMore ? "accordionText" : "accordionText readMore"}>
        {children}
      </p>
      {!paraghraphCheck && (
        <button
          className="accordionButton"
          onClick={() => setIsReadMore(!isReadMore)}
        >
          {isReadMore ? "read less" : "read more"}
        </button>
      )}
    </div>
  );
};

export default AccordionBox;
