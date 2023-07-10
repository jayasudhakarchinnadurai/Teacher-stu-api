import './App.css';

import { Switch, Route, useHistory } from 'react-router-dom/cjs/react-router-dom';
import Teacher from './Teacher/teacherdata';
import { useEffect, useState } from 'react';
import View from './Teacher/teacherdetail';


function App() {
  const [user, setuser]=useState([]);
  const history=useHistory();
  
  useEffect(()=>{
    const getdata= async()=>{
     try {
      const response = await fetch("https://64a57d6900c3559aa9bfcb65.mockapi.io/users",{
        method:"GET"
      })
      const data = await response.json();
      setuser(data)
      
     } catch (error) {
      console.log(error)
      
     }
    }
    getdata()
  },[])
 
  return (
    <div className="App">
     <Switch >


 <Route exact path='/' >
  
   <h1>Welcome</h1>
   <button onClick={()=>history.push('/teacher')}>click</button>
   </Route>


   <Route path='/view/:id'>
  <View  user={user}/>
  </Route>


 <Route path='/teacher'>

 <Teacher  user={user}
 setuser={setuser}
 />
 </Route>

 

   

     </Switch>
    </div>
  );
}

export default App;
