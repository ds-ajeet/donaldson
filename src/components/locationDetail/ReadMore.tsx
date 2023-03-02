import React, { useState } from "react";
import "./styles.css";
  
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        <br/>
        <div style={{color:"#02a6db"}}>{isReadMore ? "Read more" : " Read less"}</div>
      </span>
    </p>
  );
};
  
const Contentt = (prop:any) => {
 
  return (
    <div className="" style={{width:"700px"}}>
      
      <h4 style={{marginLeft:"100px"}}>
        <ReadMore>
          MGM Timber is Scotland’s leading timber supplier. We bring all areas
          of Scotland, Grangemouth included, a wide variety of different
          timber-based products for all kinds of projects. If you want premium
          quality and live in the Grangemouth area, we have you covered. Our
          showrooms are open to all. We supply to both retail customers and
          trade customers, so that you can choose from our exceptional selection

          in person. And with a focus on providing our customers with a service
          that’s second to none, we are determined to ensure you walk away
          satisfied and happy with your MGM Timber experience.
        </ReadMore>
      </h4>
      
    </div>
  );
};
  
export default Contentt;