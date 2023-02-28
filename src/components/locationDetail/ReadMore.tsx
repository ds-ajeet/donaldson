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
         hnj
        </ReadMore>
      </h4>
      
    </div>
  );
};
  
export default Contentt;