import * as React from "react";

const Footer = (props: any) => {
  console.log(props);
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle("");
  };
  const Services = props?._site?.c_customer_Services?.headingLink?.map(
    (link: any) => (
      <a
        style={{ font: "caption", color: "black" }}
        className="navbar-item"
        href="#"
      >
        <span>{link.label}</span>
        <br />
      </a>
    )
  );

  const Aboutm = props?._site?.c_aboutMgm?.headingLink?.map((link: any) => (
    <a
      style={{ font: "caption", color: "black" }}
      className="navbar-item"
      href="#"
    >
      <span>{link.label}</span>
      <br />
    </a>
  ));

  return (
    <footer style={{background:"#1e293e"}} className="inline-block w-full site-footer">
      <div className="container">
        <section className="footer-panel">
          <div className="grid grid-cols-5 gap-x-20 gap-y-20">
            <div className="u-mar-t-medium col-12@lg col-6@xs">
              <img
                src={props._site.c_mgmTimberLogo.url}
                width="52%"
                alt="logo"
              />
            </div>

            <div className="col-xs-12 col-sm-2 col-lg-2 col-md-2">
              <h2 style={{ color: "white" }} className="title-widget">
                {props._site?.c_customer_Services.headerLinkHeading}
              </h2>
              <ul className="menu_footer">
                <li >
                  <a >{Services}</a>
                  <br />
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-2 col-lg-2 col-md-2">
              <h2 style={{ color: "white" }} className="title-widget">
                {props._site.c_aboutMgm.headerLinkHeading}
              </h2>
              <ul className="menu_footer">
                <li>
                  <a href="#">{Aboutm}</a>
                </li>
              </ul>
            </div>
            <div className="">
                      <div className="grid grid-cols-5 gap-x-5 gap-y-5">
                        {props._site.c_socialIcons.map((res: any) => {
                          return (
                            <>
                              <a href="#" >
                                <img src={res.icon.url} />
                              </a>
                            </>
                          )
                        })}
                      </div>
                    </div>
            {/* <div>
                <h2 style={{ color: "#f5821f" }} className="title-widget">{props._site.c_ourWebsites.headingName}</h2>
                <ul style={{ color: "black" }} className="menu_footer">

                  <li><a href="#">{Websites}</a></li>


                </ul>

              </div> */}
            <div>
              {/* <div className="col-12@xs col-3@lg u-mar-t-large o-footer__menu--social pr-4">
                  
                    <div className="col-12@xs o-footer__app-store-container__header-wrap u-mar-b-small">
                      <h3 className="u-font-wb u-font-ta-c@md-down pb-4"><b>{props._site.c_appSectionText}</b></h3>
                    </div>

                    <div className="grid grid-cols-2 gap-x-5 gap-y-5">
                      {props._site.c_appIcons.map((res: any) => {
                        return (
                          <>
                            <a href="#" >
                              <img src={res.icon.url} />
                            </a>
                          </>
                        )
                      })}

                    </div>
                    <br />

                    <div className="row u-mar-b-large@lg-up u-mar-t-medium">
                      <div className="grid grid-cols-5 gap-x-5 gap-y-5">
                        {props._site.c_socials.map((res: any) => {
                          return (
                            <>
                              <a href="#" >
                                <img src={res.icon.url} />
                              </a>
                            </>
                          )
                        })}
                      </div>
                    </div><br />
                    <div className="row">
                      <div className="col-12@xs u-mar-v-medium@md-down">
                        <span ><p style={{ font: "small-caption" }} className="u-font--smaller u-font-ta-c@md-down" data-copyright="">
                          {props._site.c_description}

                        </p></span>
                      </div>
                    </div><br />

                    <div className="col-12@xs u-font-lh-0 u-font-ta-c@md-down">
                     <a href="#"><img style={{ }} src={props._site.c_footerLogo.url} alt="footer logo" /></a> 
                    </div> */}
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
