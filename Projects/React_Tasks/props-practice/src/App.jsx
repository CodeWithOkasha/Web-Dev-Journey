import React from 'react';
import './App.css'
import Profile from './Profile.jsx';
import jackMaPic from "./assets/jackMa.webp"
import afridiPic from "./assets/AfridiImage.jpg"
import myPic from "./assets/mypic.jpg"
import aliPic from "./assets/IMG_20231026_111607_299.jpg"

function App() {
  return(
    <>
    <h1 style={{color:"white", textAlign:"center", fontSize:"2.5rem", letterSpacing:"1px"}}>My Team</h1>
<div className='appDiv'>  
<Profile image={afridiPic} name="Shahid Afridi" profession="Cricketer" email="afridikhan@gmail.com" />
<Profile image={myPic} name="Muhammad Okasha" profession="Frontend Developer" email="okashakhan461@gmail.com" />
<Profile image={jackMaPic} name="Jack Ma" profession="Business Man" email="jack@alibaba.com" />

</div>
</>
  );
}

export default App
