import { Link } from "@yext/pages/components";
import * as React from "react";
import $ from "jquery";

export default function ReadMore(props: any) {
  const { c_branchDetails, c_readMore, c_readDesc } = props;

  var buttonText = "Show More";
  // create a function function to hide  show search section after click on search icon on show

  const myFunction = (x:any, y:any) => {

    //console.log("snnfdxvb")
     x = document.getElementById("hide-show");

     y = document.getElementById("hide");


    if (x.style.visibility === "visible") {
      x.style.visibility = "hidden";
      x.style.display = "none";
      buttonText = "Show More";
    } else {
      x.style.visibility = "visible";
      x.style.display = "block";
      buttonText = "Read Less";
    }
    y.innerText = '';
    y.innerHTML += buttonText;
  }



  return (
    <>
      <div className="Branchdetails">
        <div className="title">Branch Details</div>
        {props.c_branchDetails}

        <div className="hideandshow-section" id="hide-show">
          <h2 className="labelDetils" >{props.c_readMore}</h2>

          <p className="pt-4">{props.c_readDesc}</p>
        </div>
        <div className="pt-4">
        <a href="javascript:void(0)" id="hide" onClick={myFunction}>{buttonText}</a>
      </div>
      </div>

    </>
  )


}