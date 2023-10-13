import React,{ useEffect,useState } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom";

function Edit({user, setuser}){
    const history=useHistory();
    const {id}=useParams();
    const selectuser= user.find((per,indx)=>per.id === id);
    console.log(selectuser);
    
    
    const [idx, setidx]=useState();
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [batch,setbatch]=useState();
    const [exprience,setexprience]=useState();
    

   


    useEffect(()=>{
        setidx(selectuser.id);
        setname(selectuser.name);
        setemail(selectuser.email);
        setbatch(selectuser.batch);
        setexprience(selectuser.exprience);

    },[])

    const Editdata=async()=>{
        const editindex=user.findIndex((per)=>per.id === id);
        console.log(editindex);
        const editdata={
            id:idx,
            name,
            email,
            batch,
            exprience
        }
console.log(editdata)
        try {
            const response= await fetch(`https://64a57d6900c3559aa9bfcb65.mockapi.io/users/${id}`,{
                method:"PUT",
                body:JSON.stringify(editdata),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            const data= await response.json();
            console.log(data);
            user[editindex]= data
            history.push("/student")
            setuser([...user]);
if(!data){
    console.log("not update data");
}
            
        } catch (error) {
            console.log(error)
            
        }
    }

    return(
        <div>
          <input 
          placeholder="id" 
          value={idx}
          onChange={(e)=>setidx(e.target.value)}/>
          <input 
          placeholder="name"
          value={name}  
          onChange={(e)=>setname(e.target.value)}/>
          <input 
          placeholder="email" 
          value={email} 
          onChange={
            (e)=>setemail(e.target.value)}/>
          <input 
          placeholder="batch" 
          value={batch} 
          onChange={(e)=>setbatch(e.target.value)}/>
          <input 
          placeholder="exprience" 
          value={exprience} 
          onChange={(e)=>setexprience(e.target.value)}/>
          
<button onClick={Editdata}>Update</button>

        </div>
    )
}

export default Edit;