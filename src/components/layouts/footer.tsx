import * as React from "react";
import SubscribeForm from "../commons/Newsletter";
import { emails_icn } from "../../../sites-global/global";
import footerLOgo from "../../images/mgmtimber_logo_footer.svg";
const Footer = (props: any) => {
  const Aboutm = props?._site?.c_aboutMgm?.headingLink?.map((link: any) => (
    <a className="navbar-item" href="#">
      <span>{link.label}</span>
      <br />
    </a>
  ));
  const customerService = props?._site?.c_customer_Services?.headingLink?.map(
    (link: any) => (
      <a className="navbar-item" href="#">
        <span>{link.label}</span>
        <br />
      </a>
    )
  );
  const countact = props?._site?.c_footerCta?.map((link: any) => (
    <div className="flex">
      <img src={link.headermenu.url} width="20" />  
    <a  className="navbar-item" href={link?.headermenus?.link} style={{marginTop:"5px"}}>
      
      <span style={{marginLeft:"10px",marginRight:"20px"}}>{link?.headermenus?.label}</span>
      
    </a>
    </div>
  ));
  return (
    <>
      <footer
        style={{ background: "#1e293e" }}
        className="inline-block w-full site-footer"
      >
        <div className="container">
          <div className="store-locator">
            <div className="company-logo">
              <img src={footerLOgo} />

            </div>
            <div className="countact grid grid-cols-2 gap-x-4 gap-y-5">{countact}</div>
          </div>
          <div style={{ color: "#fff" }}>
            
            <h2>{props._site?.c_customer_Services.headerLinkHeading}</h2>
            <ul className="pt-4">
              <li className="pt-4">
                <a href="#" title="">
                  {customerService}
                </a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h2>{props._site.c_aboutMgm.headerLinkHeading}</h2>
            <ul className="f_abouts pt-4">
              <li style={{ paddingTop: "15px" }}>
                <a href="#" title="">
                  {Aboutm}
                </a>
              </li>
            </ul>
          </div>

          <div className="otherLinks">
              <div className="flex flex-row" style={{ width: "40px" }}>
                <span style={{marginTop:"10px"}}
                  className="icon"
                  dangerouslySetInnerHTML={{ __html: emails_icn }}
                />
                <div>
                  <h2
                    style={{
                      color: "white",
                      font: "bold",
                      width: "220px",
                      marginInline: "15px",
                    }}
                  >
                    {props._site.c_newsletterHeading}
                  </h2>
                </div>
              </div>

              <div style={{ width: "360px",marginLeft:"60px",marginTop:"-20px"}}>
                <h6 style={{ color: "#7b7b7b"}}>
                  {props._site.c_newsletter}
                </h6>{" "}
              </div>

            <div className="subscribe">
              <SubscribeForm />
            </div>
            <div className="socialmediaData">
              <h4 style={{ color: "white" }} className="socialmedias">
                {props._site.headline}
              </h4>
              <ul className="socialmedia inline-grid grid-cols-6 gap-x-2 gap-y-2">
                {props._site.c_socialIcons.map((res: any) => {
                  return (
                    <>
                      <a href="#">
                        <img
                          style={{ width: "30px", height: "28px" }}
                          src={res.icon.url}
                        ></img>
                      </a>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>

          <div style={{marginTop:"-20px"}}>
            <img src={props._site.c_jdGroups.url} width="250px" alt="logo" />
          </div>
          <div style={{ color: "#7b7b7b" }}>
            <div
              style={{ width: "1150px", color: "#e9e9e9" }}
              className="policy grid grid-cols-2"
            >
              <div className="termcondition">
                <a href="#">{props._site.c_cookiePolicy.label}</a>
                <a href="#">{props._site.c_privacyPolicy.label}</a>
                <a href="#">{props._site.c_termAndConditioon.label}</a>
                
              </div>
              <div className="paymentImg">
                <img src={props._site.c_payment.url} alt="logo" width="360"/>
              </div>
            </div>

            <div className="footerDescription">{props._site.c_footerDescription}</div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
