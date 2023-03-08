import * as React from "react";
import logo from "../../images/mgmlogo.jpg";
import SearchBar from "../locationDetail/search";
import FilterSearch from "../locatorPage/FilterSearch";
import { StaticData } from "../../../sites-global/staticData";

const Header = (props: any) => {
  // console.log(props)
  React.useEffect(() => {
    document.body.setAttribute("id", "body");
  });
  const toggle = () => {
    (document.getElementById("body") as HTMLInputElement).classList.toggle("");
  };
  const linkDoms = props?._site?.c_headerLinks?.map((link: any) => (
    <a className="navbar-item" href="#">
      <span style={{ fontWeight: "bold" }}>{link.label}</span>
    </a>
  ));

  const Headercountact = props?._site?.c_headerMenus?.map((link: any) => (
    <div className="flex">
      <img src={link.headermenu.url} width="30" />
      <a
        className="navbar-item"
        href={link?.headermenus?.link}
        style={{ marginTop: "5px" }}
      >
        <span style={{ marginLeft: "4px", marginRight: "25px" }}>
          {link?.headermenus?.label}
        </span>
      </a>
    </div>
  ));

  return (
    <>
      <div
        style={{ height: "37px", width: "400px", marginLeft: "890px" }}
        className="flex pt-4"
      >
        <a href="#">
          <h3 style={{ fontWeight: "bold", fontSize: "17px" }}>
            {props._site.c_trustpilot.label}
          </h3>
        </a>
        <a href="#" className="ml-2">
          <img src={props._site.c_trustpilot.link} width="130" />
        </a>
      
        <a href="#">
          <img src={props._site.c_trust.url} width="100" alt="logo" />{" "}
        </a>
       
        <span className="ml-4">{StaticData.Vat}</span>
        <span className="ml-2">{StaticData.Inc}</span>
        <label className="switch ml-2">
          <input type="checkbox" />
          <span className="slide round"></span>
        </label>
        <span className="ml-4">{StaticData.Ex}</span>
        </div>
        

  
      

      <div
        style={{ background: "white", height: "70px" }}
        id="header"
        className="header-nav"
      >
        <div
          style={{ marginLeft: "25px" }}
          className="container header-content flex items-center justify-between"
        >
          <div className="logo w-auto">
            <a href="#">
              <img
                src={props._site.c_mgmTimberLogo.url}
                width="150"
                alt="logo"
              />
            </a>
            
          </div>

          <div>
            <SearchBar />
          </div>
          <div className="flex items-center font-bold text-sm">
            {Headercountact}
          </div>
        </div>
      </div>
      <div className="">
        <div
          style={{ background: "#02a6db"}}
          className="text-black w-full font-bold"
        >
          <div className="flex text-ml headerLink">
            {props?._site?.c_headerLinks?.map((link: any, index: number) => (
              <a className="navbar-item" href="#">
                {/* <span style={{ fontWeight: "bold" }}></span> */}
                <div className="navbar">
                  <div className="dropdown">
                    <button className="dropbtn">{link.label}
                      <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">


                      <div className="rows">
                        <div className="columns">
                          <div>
                              {props?._site?.c_submenu?.map((item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <h3 className="text-black">{item.heading}</h3>
                                      {item?.cta?.map((data: any) => (
                                        <>
                                          <a href="#">{data.label}</a>

                                        </>
                                      ))}
                                    </>
                                  ) : ("")}
                                </>
                              ))}
                           </div>
                           <div>
                           {props?._site?.c_submenutwo?.map((item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <h3 className="text-black">{item.heading}</h3>
                                      {item?.cta?.map((data: any) => (
                                        <>
                                          <a href="#">{data.label}</a>

                                        </>
                                      ))}
                                    </>
                                  ) : ("")}
                                </>
                              ))}
                           </div>
                           <div>
                            {props?._site?.c_submenuthree?.map((item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <h3 className="text-black">{item.heading}</h3>
                                      {item?.cta?.map((data: any) => (
                                        <>
                                          <a href="#">{data.label}</a>

                                        </>
                                      ))}
                                    </>
                                  ) : ("")}
                                </>
                              ))}
                              </div>
                           <div>
                           {props?._site?.c_submenufour?.map((item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <h3 className="text-black">{item.heading}</h3>
                                      {item?.cta?.map((data: any) => (
                                        <>
                                          <a href="#">{data.label}</a>

                                        </>
                                      ))}
                                    </>
                                  ) : ("")}
                                </>
                              ))}
                           </div>
                           <div>
                           {props?._site?.c_submenufive?.map((item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <h3 className="text-black">{item.heading}</h3>
                                      {item?.cta?.map((data: any) => (
                                        <>
                                          <a href="#">{data.label}</a>

                                        </>
                                      ))}
                                    </>
                                  ) : ("")}
                                </>
                              ))}
                           </div>
                           <div>
                           {props?._site?.c_submenussix?.map((item: any, indexes: number) => (
                                <>
                                  {index == indexes ? (
                                    <>
                                      <h3 className="text-black">{item.heading}</h3>
                                      {item?.cta?.map((data: any) => (
                                        <>
                                          <a href="#">{data.label}</a>

                                        </>
                                      ))}
                                    </>
                                  ) : ("")}
                                </>
                              ))}
                           </div>

                    
                        </div>
                        

                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
            {/* {linkDoms} */}
          </div>
        </div>
      </div>


    </>
  );
};

export default Header;
