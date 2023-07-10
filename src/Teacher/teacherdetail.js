import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom";


function View({user}){
    const {id}=useParams();
    
    const per=user[id];
    console.log(per)
    return(
     <div>
        <p>Name</p>
     </div>
    )
}

export default View;