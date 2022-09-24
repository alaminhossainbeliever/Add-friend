import './App.css';
import { useEffect, useState } from 'react';
import './component/Profile/Profile'
import Profile from './component/Profile/Profile';
import Header from './component/Header/Header';

function App() {
  let [info,setInfo]=useState([]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json =>{
    setInfo(json)
  } )
},[])
let [friend,setFriend]=useState([]);
console.log(friend);
  let FriendReq=(buddy)=>{
       let newBuddy=[...friend,buddy]
    let uniqe=[...new Set(newBuddy)]
    setFriend(uniqe)
   
  }
  let remove=(item)=>{
    console.log("worked");

  }
  return (
    <div className="App">
      <Header remove={remove} num={friend}></Header>
      {
       info.map(profile=><Profile handle={FriendReq} key={profile.id} data={profile} ></Profile>)
      }
    </div>
  );
}

export default App;
