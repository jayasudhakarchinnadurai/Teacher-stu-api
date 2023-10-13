import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";


function View({user}){
    const {id}=useParams();
    
    const per=user[id];
    
    return(
     <div>
      <h2>Student Details</h2>
        <h3>{per.name}</h3>
        <p>{per.email}</p>
        <p>{per.batch}</p>
     </div>
    )
}

export default View;