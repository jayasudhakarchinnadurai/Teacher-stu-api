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
        const alteruser = user.filter((per)=> per.id !== idx)
        setuser(alteruser)
        if(!data){
            console.log('could not delete the data')
        }
        
    } catch (error) {
        console.log(error)
    }

   }
    
    return (
        <div>
          <h3>Welcome dashboard!</h3>  
        <button onClick={()=>history.push("/create")} className="create-btn"> createuser</button><br></br><br></br> 
        <div className="student">
            
        {user.map((person,idx)=>{
           return <div key={idx} className="data" > 
                <p>Name:{" "}{person.name}</p>
                <p>Email:{" "}{person.email}</p>
                <p>Batch:{" "}{person.batch}</p>
                <p>Exprience:{" "}{person.exprience}</p>
                <button onClick={()=>history.push(`/view/${idx}`)}>View</button>
                {' '} <button onClick={()=>history.push(`/edit/${person.id}`)}>Edit</button>{' '}
                <button onClick={()=>deleteuser(person.id)}>Delete</button>
            </div>
        })}


        </div> <br></br>
       

        </div>
    )
}
export default Teacher;