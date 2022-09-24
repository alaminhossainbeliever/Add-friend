import React from 'react';
import "./Profile.css"

const Profile = (props) => {
   let info=props.data;
   console.log();
    return (
        <div className='container'>
           <div className="imageBox">

           </div>
           <h3>Name: {info.username}</h3>
           <h6>Email: {info.email}</h6>
           <h6>Phone Num: {info.phone}</h6>
           <button onClick={()=>props.handle(info)}>Friend request</button>
        </div>
    );
};

export default Profile;