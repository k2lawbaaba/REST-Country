import React from "react";
import Info from "./Info";
import Avatar from "./Avatar";

const CountryDetails =(properity)=>{

  

  
    return<>
        
      <div className="card">
        <div className="top">

          <Avatar img={properity.src} />
        </div>
       <div className="bottom">
       <Info country={properity.name}/><br/>
        <Info info={properity.population} name='Population: '/><br/>
        <Info info={properity.Region} name='Region: '/><br/>
        <Info info={properity.capital} name='Capital:'/>

        </div>
      </div>

    </>
}
export default CountryDetails;