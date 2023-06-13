import React from "react";

const Info =(prop)=>{
    return<>
    <h3>{prop.country}</h3>
     <p className='info'><strong>{prop.name}</strong>{prop.info}</p>
     
    </>
}
export default Info;