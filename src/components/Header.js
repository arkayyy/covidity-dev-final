import React, { useEffect, useLayoutEffect, useState } from 'react'
import './styles/Header.css'
import './styles/fonts.css'
import Home from './Home'
import { useCookies } from 'react-cookie'
import Modal from 'react-modal'
import {validateToken} from '../redux/index'
import {connect} from 'react-redux'

function Header({doValidateToken}) {
    const [cookies, setCookie,removeCookie] = useCookies(['user']);
    const [logOutConfirm,setLogOutConfirm]=useState(false)
    const [usernameCurrent,setUsernameCurrent]=useState('')
    const style_header_link={textDecoration:"none",color:"white", marginRight:"40px", fontFamily:"Krona One, sans-serif", fontSize:"14px",cursor:"pointer"}
    
    useEffect(()=>{
       
        setUsernameCurrent(cookies.usernameCovidity)
    })
    useLayoutEffect(()=>{
        //doValidateToken(cookies.tokenCovidity,cookies.usernameCovidity)
    })
    
    return (
        <div className="header__body" style={{display:"flex",flexDirection:"row", justifyContent:"space-evenly"}}>
            <a href="/"><img src="logo.png"  alt='' style={{width:"230px", margin:"10px"}}/></a>

            <div className="header__navbar" style={{display:"flex",flexDirection:"row",margin:"30px"}}>
            <a href="vaccination" style={style_header_link}>VACCINATION</a>
                <a href="support" style={style_header_link}>GET SUPPORT</a>
                <a href="survey" style={style_header_link}>FILL SURVEY</a>
                <a href="donate" style={style_header_link}>DONATE</a>
                <a href="tracker" style={style_header_link}>TRACKER</a>
                <a href="forum" style={style_header_link}>FORUMS</a>
                <a href="resources" style={style_header_link}>RESOURCES</a>
                {usernameCurrent?(<a style={style_header_link} onClick={()=>{setLogOutConfirm(true)}}>{usernameCurrent}</a>):(<a href="signin" style={style_header_link}>SIGN IN</a>)}
            </div>


            <Modal isOpen={logOutConfirm} contentLabel="EXAMPLE MODAL">
                  <div className="otp_modal">
                    <div className="otp_modal_header">
                    <div className="otp_modal_header_text">
                    <h1  style={{fontFamily:"Krona One, sans-serif",justifyContent:"center"}}>Logged in as: {cookies.usernameCovidity}</h1>
                    </div>
                    <img className="modal_close_icon" src='close-icon.png' alt="" onClick={()=>{setLogOutConfirm(false)}}/>
                    </div>

                    <div className="confirmDetails_modal_body">
                       <a href="/"><button onClick={()=>{removeCookie("emailCovidity"); removeCookie("usernameCovidity"); removeCookie("tokenCovidity")}}>LOGOUT</button></a>
                    </div>
                    
                  </div>
                </Modal>
        </div>
    )
}


const mapStateToProps=(state)=>{
    return{
        signedInUserDetails: state.userSignedInDetails
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        doValidateToken: (token,username)=>dispatch(validateToken(token,username))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
