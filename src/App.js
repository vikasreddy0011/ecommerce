import logo from './logo.svg';
import './App.css';
import Home from './Home';
import React from 'react';
import { useEffect } from 'react';
import { login,createUser } from './API/api';
var USERID ;

function App() {
const [userId,setUserId] = React.useState();
  useEffect(()=>{
    try{
      createUser(setUserId)
    }catch(e){
     
    }
  },[])
  if(userId){
    USERID=userId.id;
  }
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

export { USERID }
