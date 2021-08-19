import React, { useState } from 'react'
import Header from './Header'
import Typewriter from 'typewriter-effect'
import './styles/Home.css'

function Home() {
    const [home__img1__marginRight,set_home__img1__marginRight]=useState(null);
    
    
    const setrightmargin=()=>{
        set_home__img1__marginRight((parseInt(window.screen.width)/10).toString());
    }
    
   
    const home__img1_style={
        
        float:"right",
    }

    const style_home_text={
        fontFamily:"Krona One, sans-serif",
    }

    const style_home_button={backgroundColor:"#0085FF", padding:"20px",paddingLeft:"40px",paddingRight:"40px",fontFamily:"Krona One, sans-serif",textDecoration:"none",color:"white", marginLeft:"44%"}
    return (
        <div style={{height:"auto"}}>
            <Header/>
            
            <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-evenly"}}>
            <div className="homeText" style={style_home_text}>

                <h1 style={{fontSize:"80px", margin:"150px"}}>Helping you <Typewriter options={{loop:true,cursor:"|"}}  onInit={(typewriter)=>{
                    typewriter.typeString('<span style="color: #0085FF;"> prevent</span>').pauseFor(2000).deleteAll().typeString('<span style="color: #0085FF;"> fight</span>').pauseFor(2000).deleteAll().typeString('<span style="color: #0085FF;">overcome</span>').pauseFor(2000).start();
                }}/> Corona.</h1>
            </div>
            <img style={home__img1_style} className="home__img1" src='corona-animated.gif' alt=''/>
            </div>

            <a href="explore" style={style_home_button}>EXPLORE</a>
            
        </div>
    )
}

export default Home
