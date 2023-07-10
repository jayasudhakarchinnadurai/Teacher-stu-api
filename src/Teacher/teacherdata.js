import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Teacher ({user, setuser}){
    const history=useHistory();

   const deleteuser = async(idx)=>{

    try {
        const response = await fetch(`https://64a57d6900c3559aa9bfcb65.mockapi.io/users/${idx}`,{
            method:"Delete"

        })
        const data= await response.json();
        console.log(data)
        if(!data){
            console.log('could not delete the data')
        }
        
    } catch (error) {
        
    }

   }
    
    return (
        
        <div className="student">
        {user.map((person,idx)=>{
           return <div key={idx} className="data" > 
                <p>Name:{" "}{person.name}</p>
                <p>Email:{" "}{person.email}</p>
                <p>Batch:{" "}{person.batch}</p>
                <p>Exprience:{" "}{person.exprience}</p>
                <button onClick={()=>history.push(`/view/${person.id}`)}>View</button>{' '} <button>Edit</button>{' '}<button onClick={()=>deleteuser(person.id)}>Delete</button>
            </div>
        })}
        </div>

        
    )
}
export default Teacher;