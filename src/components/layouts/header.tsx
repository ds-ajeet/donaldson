// import * as React from "react";
// import logo from "../../images/mgmlogo.jpg";
// import SearchBar from "../locationDetail/search";
// import FilterSearch from "../locatorPage/FilterSearch";
// import { StaticData } from "../../../sites-global/staticData";

// const Header = (props: any) => {
//   // console.log(props)
//   React.useEffect(() => {
//     document.body.setAttribute("id", "body");
//   });
//   const toggle = () => {
//     (document.getElementById("body") as HTMLInputElement).classList.toggle("");
//   };
//   const linkDoms = props?._site?.c_headerLinks?.map((link: any) => (
//     <a
//       className="navbar-item"
//       href="#"
//     >
//       <span style={{fontWeight:"bold"}}>{link.label}</span>
//     </a>
//   ));

//   const Headercountact = props?._site?.c_headerMenus?.map((link: any) => (
//     <div className="flex">
//       <img src={link.headermenu.url} width="30" />  
//     <a  className="navbar-item" href={link?.headermenus?.link} style={{marginTop:"5px"}}>
      
//       <span style={{marginLeft:"5px",marginRight:"20px"}}>{link?.headermenus?.label}</span>
      
//     </a>
//     </div>
//   ));


//   return (
//     <>    
//       <div
//         style={{ background: "white", height: "100px" }}
//         id="header"
//         className="header-nav"
//       >
//         {/* <div style={{marginLeft:"1200px"}}>
//         <span >{StaticData.Vat}</span>
//         <span className="ml-4">{StaticData.Inc}</span>
//         <label className="switch"><input type="checkbox" className="ml-2"/>
//         <div className="sliderr"></div>
//         </label>
        
//         <span className="ml-2">{StaticData.Ex}</span>
//         </div> */}
//         <div
//           style={{ marginLeft: "25px" }}
//           className="container header-content flex items-center justify-between"
//         >
          
          
          
//           <div className="logo pt-2 w-auto">
            
//               <a href="#"><img src={props._site.c_mgmTimberLogo.url} width="150" alt="logo"/></a>
              
//           </div>
//           <div>
//           <SearchBar/>
        
//           </div>
//           <div className="flex items-center font-bold text-sm">{Headercountact}</div>
        
          
//         </div>
//         <div className="header-content-right lg:hidden">
//           <span className="navbar-burger burger" data-target="navbarMenu">
//             <span></span>
//             <span></span>
//             <span></span>
//           </span>
//         </div>
//       </div>
//       <div className="">
//         <div
//           style={{ background: "#02a6db", height: "70px" }}
//           className="text-black w-full font-bold"
//         >
//           <div
//             className="flex gap-x-16 text-ml headerLink"
//           >
//             {linkDoms}
//           </div>
//         </div>
//       </div>
      
//     </>
//   );
// };

// export default Header;

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
      <span style={{fontWeight:"bold"}}>{link.label}</span>
    </a>
   
  ));

   const Headercountact = props?._site?.c_headerMenus?.map((link: any) => (
    <div className="flex">
      <img src={link.headermenu.url} width="30" />  
    <a  className="navbar-item" href={link?.headermenus?.link} style={{marginTop:"5px"}}>
      
      <span style={{marginLeft:"4px",marginRight:"25px"}}>{link?.headermenus?.label}</span>
      
    </a>
    </div>
  ));

  return (
    <>   
    <div style={{height:"37px" ,width:"300px",marginLeft:"900px"}} className="grid grid-cols-3 pt-4">
        <a href="#"><h3 style={{fontWeight:"bold",fontSize:"17px"}}>{props._site.c_trustpilot.label}</h3></a>
        <a href="#"><img src={props._site.c_trustpilot.link} width="130" /></a>
      
        <a href="#"><img src={props._site.c_trust.url} width="100" alt="logo"/> </a>
      
        </div>
        
    
      <div
        style={{ background: "white", height: "85px" }}
        id="header"
        className="header-nav"
      >
        
        
        <div
          style={{ marginLeft: "25px" }}
          className="container header-content flex items-center justify-between"
        >
          
          <div className="logo w-auto">
          {/* <img src={props._site.c_trust.url} width="90" alt="logo" style={{marginLeft:"10s00px"}}/>  */}
              <a href="#"><img src={props._site.c_mgmTimberLogo.url} width="150" alt="logo"/></a>
              
             
          </div>
         
          
          
          
          <div>
          <SearchBar/>
          
          </div>
          <div className="flex items-center font-bold text-sm">{Headercountact}</div>
        
          
        </div>
        <div className="header-content-right lg:hidden">
          <span className="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
      <div className="">
        <div
          style={{ background: "#02a6db", height: "70px" }}
          className="text-black w-full font-bold"
        >
          <div
            className="flex gap-x-4 text-ml headerLink"
          >
            {linkDoms}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Header;
