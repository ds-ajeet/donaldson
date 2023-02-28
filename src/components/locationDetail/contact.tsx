import * as React from "react";
import Cta from "../commons/cta";
import Hours from "../commons/hours";
import woodtexture from "../../images/wood-texture.jpg";
import mapimage from "../../images/map.svg";
import Phonesvg from "../../images/phone.svg";
import Address from "../commons/Address";
import GetDirection from "../commons/GetDirection";
import { StaticData } from "../../../sites-global/staticData";
import Holidayhours from "./Holdayhours";
import Model from "./Model";
import CustomMap from "./CustomMap";

const Contact = (props: any) => {
  const {
    address,
    phone,
    email,
    latitude,
    longitude,
    hours,
    c_specific_day,
    additionalHoursText,
    yextDisplayCoordinate,
    c_storeInfoHeading,
    c_getDirectionsCTAText
  } = props;
  return (
    <>
      <div className="address-main-sec" style={{ width: "500px" }}>
        <h4 className="box-title font-bold">
          {c_storeInfoHeading ? c_storeInfoHeading : "Address : "}
        </h4>

        <div className="icon-row content-col">
          <div className="icon">
            {" "}
            <img
              className=" "
              src={mapimage}
              width="20"
              height="20"
              alt="mapimage"
            />
          </div>
          <div className="address-text notHighlight">
            {address.line1}&nbsp;
            {address.line2}&nbsp;
            {address.city}
            <div>{address.postalCode}</div>
          </div>
        </div>

        <ul className="">
          <li className="button-bx direction-button">
            <GetDirection
              buttonText={
                c_getDirectionsCTAText
                  ? c_getDirectionsCTAText
                  : StaticData.getDirection
              }
              address={address}
              latitude={latitude}
              longitude={longitude}
            />
          </li>
        </ul>

        <div className="map-sec">
          <CustomMap prop={yextDisplayCoordinate} />
        </div>
        
        {phone ? (
          <div className="icon-row" style={{marginTop:"40px", marginLeft:"-28px"}}>
            <div className="icon">
              {" "}
              {/* <img
                className=" "
                // src={Phonesvg}
                width="22"
                height="22"
                alt="phonesvg"
              /> */}
            </div>
            <span style={{fontWeight:"bold",color:"#1e293e",fontSize:"16px"}}>Contact</span>
            <div className="content-col pt-2">
              <a id="address" className=" location-phn" href={`tel:${phone}`}>
                Tel:&nbsp;{phone}
              </a>
              
              <a id="address" className=" location-phn" href={`tel:${email}`} style={{marginLeft:"40px"}}>
               Email:&nbsp;{email}
              </a>
            </div>
          </div>
        ) : (
          ""
        )}


        {hours && typeof hours.monday != "undefined" ? (
        <div className="hours">
          <div className="hours-sec">
            <div className="title-with-link-1">
              <h4 className="box-title" style={{fontWeight:"bold"}}>{"Opening Hours :"}</h4>
            </div>
            <div className="hours-div mb-5 md:mb-1 flex flex-col">
              {hours.holidayHours && typeof hours.reopenDate == "undefined" ? (
                <>
                  <Model
                    name={StaticData.Holdiay}
                    holidayHours={hours.holidayHours}
                    c_specific_day={c_specific_day}
                  />
                </>
              ) : (
                ""
              )}
              {hours && (
                <Hours
                  title={"Opening Hours"}
                  additionalHoursText={additionalHoursText}
                  hours={hours}
                  c_specific_day={c_specific_day}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      </div>

      
    </>
  );
};

export default Contact;
