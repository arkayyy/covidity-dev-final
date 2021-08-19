import React, { useEffect, useState,useLayoutEffect } from 'react'
import Iframe from 'react-iframe'
import {connect} from 'react-redux'
import { useHistory } from 'react-router'

function MapComponent({coordinates}) {
    const [lat,setLat]=useState(0.00000)
    const [long,setLong]=useState(0.00000)
  

    useEffect(()=>{
        if(!coordinates.coords){
            window.location.replace('/vaccination')
        }
    },[])
    navigator.geolocation.getCurrentPosition((pos)=>{setLat(pos.coords.latitude); setLong(pos.coords.longitude)})
    return (<>
        {coordinates && coordinates.coords ?(
        <div style={{display:"flex",flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <h1 style={{fontFamily:"Krona One, sans-serif", margin:"20px"}}>DIRECTIONS TO VACCINATION CENTER</h1>
            {console.log("coords:",coordinates)}
            <p style={{fontFamily:"Krona One, sans-serif"}}>Enter A:{long.toFixed(5)},{lat.toFixed(5)} <button onClick={()=>{ var text=(long.toFixed(5)).toString()+","+(lat.toFixed(5)).toString();  navigator.clipboard.writeText(text); }}>COPY</button>     |    B:{coordinates.coords.longitude+0.87549},{coordinates.coords.latitude+0.54879} <button onClick={()=>{navigator.clipboard.writeText((coordinates.coords.longitude+0.87549).toString()+","+(coordinates.coords.latitude+0.54879).toString())}}>COPY</button>   </p>
            <Iframe url="https://covidity-map.vercel.app/" width="80%" height="700px" display="initial"/>
        </div>): (<></>)}
        </>
    )
}

const mapStateToProps=(state)=>{
    return{
        coordinates: state.coordinates
    }
}

export default connect(mapStateToProps)(MapComponent)
