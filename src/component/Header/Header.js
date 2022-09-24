import React from 'react';
import { useState } from 'react';
import './Header.css'

const Header = (props) => {
   let [isActive,setActive]=useState(false);
   let showlist=()=>{
    setActive(current=> !current)
   }
    return (
        <div className='topHead'>
            <h2>You Sent Friend Request: <span>{props.num.length}</span></h2>
            <button onClick={showlist}>show/hide list</button>
            <div className={isActive?"show":"Info"}>
                <h2>{props.num.length}</h2>
                 {
                props.num.map(Name=><h3>{Name.username} <button onClick={()=>props.remove(Name)}>X</button></h3>)
            }
            </div>
           
        </div>
    );
};

export default Header;