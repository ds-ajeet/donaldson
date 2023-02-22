import * as React from "react"
export default function Services(props:any){
    //console.log(props.service,"c_servicesdata")
 return(
    <>
<div className="flex w-full" >
<div className="flex w-full">
   {props.c_service && props.c_service?.map((s:any)=>{
        return(
            <>   
            <div className="container">
            <div className="nearby-sec-inner">
            <div className="nearby-card">        
                                
                
                {s.link?(<img src={s.link}/>):("")}
                <div className="serviceLable">
                    {s.label?(<a href="#"><h2>{s.label}</h2></a>):("")}
                </div>             
             </div>
             </div>
             </div>
            </>
        )
    })}

   </div>
  
 </div>   
    </>
 )
}