import './App.css';

import { Switch, Route, useHistory } from 'react-router-dom/cjs/react-router-dom';
import Teacher from './student/studentdata.js';
import { useEffect, useState } from 'react';
import View from './student/studentails.js';
import Edituser from './student/create.js';
import Edit from './student/edit.js';


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
   <h2>student and Teacher dashboard</h2>
   <button onClick={()=>history.push('/student')}>click</button>
   </Route>


   <Route path='/view/:id'>
  <View  user={user}/>
  </Route>


 <Route path='/student'>

 <Teacher  user={user}
 setuser={setuser}
 />
 </Route>


 <Route path="/create">
  <Edituser user={user} setuser={setuser}></Edituser>
 </Route>

 <Route path="/edit/:id">
  <Edit user={user} setuser={setuser}></Edit>
 </Route>

 

   

     </Switch>
    </div>
  );
}

export default App;
