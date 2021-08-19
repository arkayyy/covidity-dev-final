import React, { useEffect, useLayoutEffect, useState } from 'react'
import Header from './Header'
import {signUp,signIn, validateToken} from '../redux/index'
import './styles/signInSignUp.css'
import {connect} from 'react-redux'
import { useCookies } from 'react-cookie'
import Home from './Home'
var validator=require('email-validator')

function SignInSignUpComponent({doSignUp,signedUpToken,doSignIn,doValidateToken,signedInUserDetails}) {
    const [signInOpen,setSignInOpen]=useState(true)
    const [userAlreadyExistsErr,setAlreadyExistsError]=useState(true)
    const [fullName,setFullName]=useState('')
    const [signUpUseremail,setSignUpUserEmail]=useState('')
    const [signUpUsername,setSignUpUsername]=useState('')
    const [signUpPassword,setSignUpPassword]=useState('')
    const [signUpCpassword,setSignUpCpassword]=useState('')
    const [signInUsername,setSignInUsername]=useState('')
    const [signInEmail,setSignInEmail]=useState('')
    const [signInPassword,setSignInPassword]=useState('')
    const [cookies,setCookies,removeCookies]=useCookies(['user'])
    // const [loggenIn,setLoggedIn]=useState(()=>{
    //     doValidateToken(cookies.tokenCovidity,cookies.usernameCovidity)
    //     console.log("useState return:",signedInUserDetails.userSignedIn)
    // })
    // async function signInValidate(){
    //     await doValidateToken(cookies.tokenCovidity,cookies.usernameCovidity)
        
    // }
    useEffect(()=>{
        
        console.log("signinatate",signedInUserDetails.userSignedIn)
        // signInValidate()
        if(signedUpToken.token)
        {
        setCookies('usernameCovidity',signUpUsername || signInUsername,{path:'/'})
        setCookies('emailCovidity',signUpUseremail || signInEmail,{path:'/'})
        setCookies('tokenCovidity',signedUpToken.token,{path:'/'})
        }
        //doValidateToken(cookies.tokenCovidity,cookies.usernameCovidity)
    })

    // useLayoutEffect(()=>{
    //    doValidateToken(cookies.tokenCovidity,cookies.usernameCovidity)
    // },[])
    
    const handleChangeEmailOrUsername=(value)=>{
        if(validator.validate(value)){
            setSignInEmail(value)
        }
        else{
            setSignInUsername(value)
        }
    }

  
    

    const submitForSignUp=()=>{
        const payload={
            name: fullName,
            email: signUpUseremail,
            username: signUpUsername,
            password: signUpPassword
        }
        
        doSignUp(payload)
        const cookieData={
            email: signUpUseremail,
            username: signUpUsername
        }
        
    }

    const submitForSignIn=()=>{
        const payload={
            username: signInUsername,
            email: signInEmail,
            password: signInPassword
        }
        doSignIn(payload)
    }

    return (<>
    <Header/>
    <div style={{height:""}}>
            

            

          {signInOpen? (<div className="signin__body" style={{}}>
            <div style={{marginTop:"30px", display:"flex", alignItems:"center", justifyContent:"center",overflow: "hidden", color:"#23374D"}}><span style={{fontFamily:"Krona One, sans-serif", fontSize:"50px", fontWeight:"900"}}>SIGN IN</span></div>
                <div className="signin__form">
                    

                    <div className="signInField emailOrUsername">
                        
                        <input placeholder="Your Email" style={{display:"flex",alignItems:"center",justifyContent:"center"}} onChange={(e)=>{handleChangeEmailOrUsername(e.target.value)}} className="signInField emailOrUsername inputField" type="text"/>
                    </div>

                    

                    <div className="signInField password">
                       
                        <input placeholder="Password" style={{display:"flex",alignItems:"center",justifyContent:"center"}} onChange={(e)=>{setSignInPassword(e.target.value)}} className="signInField password inputField" type="text"/>
                    </div>

                    

                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        {signedUpToken.loading?(<p>LOADING...</p>):(<>{signedUpToken.error?(<p>{signedUpToken.error}</p>):(<>{signedUpToken.token?(<p>YOU ARE SIGNED IN!</p>):(<></>)}</>)}</>)}
                        <button className="signInButton" onClick={()=>{submitForSignIn()}}>SIGN IN</button>
                    </div>

                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <span style={{cursor:"pointer"}}onClick={()=>{setSignInOpen(false)}} className="signInAlternate">Sign up instead</span>
                    </div>


                </div>
            </div>) :( <div className="signup__body">
            <div style={{marginTop:"30px", display:"flex", alignItems:"center", justifyContent:"center",overflow: "hidden", color:"#23374D"}}><span style={{fontFamily:"Krona One, sans-serif", fontSize:"50px", fontWeight:"900"}}>SIGN UP</span></div>
                <div className="signup__form">
                    <div className="signUpField name">
                       
                        <input placeholder="Your Name*" value={fullName} onChange={(event)=>{event.preventDefault(); setFullName((event.target.value).replace(/[^A-Za-z]/ig,''))}} style={{display:"flex",alignItems:"center",justifyContent:"center"}}className="signUpField name inputField" type="text"/>
                    </div>

                    <div className="signUpField email">
                        
                        
                        <input placeholder="Your Email*" value={signUpUseremail} onChange={(event)=>{event.preventDefault(); setSignUpUserEmail(event.target.value); setAlreadyExistsError(false)}} style={{display:"flex",alignItems:"center",justifyContent:"center"}}className="signUpField name inputField" type="text"/>
                        {!signUpUseremail || validator.validate(signUpUseremail)?(<></>):(<div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"-15px"}}><p style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D"}}>Enter a valid email!</p></div>)}
                    </div>

                    <div className="signUpField username">
                       
                        <input placeholder="Username*" value={signUpUsername} onChange={(event)=>{event.preventDefault(); setSignUpUsername(event.target.value); setAlreadyExistsError(false)}}  style={{display:"flex",alignItems:"center",justifyContent:"center"}}className="signUpField name inputField" type="text"/>
                    </div>

                    <div className="signUpField password">
                       
                        <input placeholder="Password*" value={signUpPassword} onChange={(event)=>{event.preventDefault(); setSignUpPassword(event.target.value)}}  style={{display:"flex",alignItems:"center",justifyContent:"center"}}className="signUpField name inputField" type="text"/>
                    </div>

                    <div className="signUpField confirmPassword">
                       
                        <input minLength="5" placeholder="Confirm Password*" value={signUpCpassword} onChange={(event)=>{event.preventDefault(); setSignUpCpassword(event.target.value)}}  style={{display:"flex",alignItems:"center",justifyContent:"center"}}className="signUpField name inputField" type="text"/>
                        {!signUpPassword || signUpPassword.length>4?(<></>):(<div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}><p style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D", marginBottom:"2px"}}>Password must be atleat 5 letters!</p></div>)}
                        {signUpPassword==signUpCpassword?(<></>):(<div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}><p style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D", marginBottom:"-5px"}}>Passwords do not match!</p></div>)}
                        {signedUpToken.loading &&!signedUpToken.token?(<div style={{display:"flex",width:"200px",alignItems:"center",justifyContent:"center",flexWrap:"wrap",marginLeft:"15%",marginBottom:"-15px"}}><p style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D", paddingTop:"5px"}}>LOADING...</p></div>) : (<>{!signedUpToken.error?(<></>):(<div style={{display:"flex",width:"150px",alignItems:"center",justifyContent:"center",flexWrap:"wrap",marginLeft:"15%",marginBottom:"-15px"}}><p style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D", paddingTop:"5px"}}>{signedUpToken.error}</p></div>)}</>)}

                    </div>

                    {(validator.validate(signUpUseremail)) && ( signUpPassword.length>4)&&(signUpPassword==signUpCpassword)?(<div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <button className="signUpButton" href="/" onClick={()=>{submitForSignUp()}}>SIGN UP</button>
                    </div>):(<></>)}

                    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <span style={{cursor:"pointer"}} onClick={()=>{setSignInOpen(true)}} className="signInAlternate">SIGN IN INSTEAD</span>
                    </div>


                </div>
            </div>)}
        
        
        
        
        
        </div>
        </>
    )
}

const mapStateToProps=(state)=>{
    return{
        signedUpToken: state.signUpSuccessToken,
        signedInUserDetails: state.userSignedInDetails
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        doSignUp:(userLoginInfo)=>dispatch(signUp(userLoginInfo)),
        doSignIn:(userLoginInfo)=>dispatch(signIn(userLoginInfo)),
        doValidateToken: (token,username)=>dispatch(validateToken(token,username))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignInSignUpComponent)
