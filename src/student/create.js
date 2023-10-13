import React, { useState } from "react";
import {useHistory} from "react-router-dom"

function Edituser ({user, setuser}){
    const history=useHistory();
    const [id, setid]=useState();
    const [name, setname]=useState();
    const [batch, setbatch]=useState();
    const [exprience, setexprince]=useState();
    const [email, setemail]=useState();
    
    const Creatuser= async(e)=>{

        const createdata=
            {
                id,
                name,
                batch,
                exprience,
                email,
            }
            e.preventDefault();
            try {
                
                const reaponse= await fetch("https://64a57d6900c3559aa9bfcb65.mockapi.io/users",{
                    method:'POST',
                    body:JSON.stringify(createdata),
                    headers:{
                        "content-Type":"application/json"
                    }
                });
                const data=await reaponse.json();
                setuser([...user, data])
                history.push("/student")
                if(data){
                    console.log("not create data")
                }
            } catch (error) {
                console.log(error)
                
            }
        
        
    }
    
    

    return (
       <div>
         <h3>Create student data</h3>
      
        <div>
            <input placeholder="id" onChange={(e)=>setid(e.target.value)} />
            <input placeholder="name"  onChange={(e)=>setname(e.target.value)}/>
            <input placeholder="email" onChange={(e)=>setemail(e.target.value)} />
            <input placeholder="batch" onChange={(e)=>setbatch(e.target.value)}/>
            <input placeholder="exprience" onChange={(e)=>setexprince(e.target.value)}/>
            <button onClick={Creatuser}>Add</button>

        </div>
        </div>
    )
}

export default Edituser;