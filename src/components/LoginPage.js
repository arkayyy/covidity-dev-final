import React,{useState} from 'react'

import Header from './Header';

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import './styles/LoginPage.css'
import { useEffect } from 'react';

function LoginPage() {
    const [usernameField, setUsernameField] = useState('');
    const [fullNameField, setFullNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');
    const [confirmPasswordField, setConfirmPasswordField] = useState('');

    const [loggedIn,setLoggedIn] = useState(false);




    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.displayName;
              setLoggedIn(true);

              window.location.replace('/');
              // ...
            } else {
              // User is signed out
              // ...
              setLoggedIn(false);
            }
          });
        
    },[])

    

    const googleSignInClick=()=>{
        
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // ...
            console.log(user)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    
    const signUpButtonClick=()=>{
        const signUpButton = document.getElementById('signUpp');
        const container = document.getElementById('container69');
       
        container.classList.add("right-panel-active");
       
    }
    
    const signInButtonClick=()=>{
        const signInButton = document.getElementById('signInn');
        const container = document.getElementById('container69');
       
            container.classList.remove("right-panel-active");
      
    }


    return (
        <div>
            <Header/>
            <div className="body1">

        
        <div className="container69" id="container69">
            <div className="form-container sign-up-container">
                <form action="#" className="formsss">
                    <h1 className="h1sss" style={{fontFamily:"Krona One,sans-serif"}}>Create Account</h1>
                    <div class="social-container">
                        <a href="#" className="social69"><img src="https://img.icons8.com/ios-filled/30/000000/google-logo.png"/></a>
                        <a href="#" className="social69" ><img src="https://img.icons8.com/ios-filled/30/000000/facebook-new.png"/></a>
                        <a href="#" className="social69"><img src="https://img.icons8.com/ios-filled/30/000000/microsoft.png"/></a>
                    </div>
                    <span className="spansss">or use your email for registration</span>
                    <div className="inputsss">
                        <input name="name" id="nameee" style={{backgroundColor:"#eee", border:"none",outline:"none",fontFamily:"Krona One,sans-serif"}} type="text" placeholder="Name" value={fullNameField} onChange={(e)=>{setFullNameField(e.target.value)}} /></div>
                    <div className="inputsss">
                    <input name="email" id="emailll"onChange={(e)=>{setEmailField(e.target.value)}} value={emailField} style={{backgroundColor:"#eee", border:"none",outline:"none",fontFamily:"Krona One,sans-serif"}} placeholder="Email ID" type="text" required/></div>
                    
                    
                    <div className="inputsss">
                    <input name="password" onChange={(e)=>{setPasswordField(e.target.value)}} style={{backgroundColor:"#eee", border:"none",outline:"none",fontFamily:"Krona One,sans-serif"}} value={passwordField} placeholder="Password" type="text" required/></div>
                    
                    <div className="inputsss">
                    <input name="password" onChange={(e)=>{setConfirmPasswordField(e.target.value)}} style={{backgroundColor:"#eee", border:"none",outline:"none",fontFamily:"Krona One,sans-serif"}} value={confirmPasswordField} placeholder="Confirm Password" type="text" required/></div>
                    
                    <button onClick={()=>{}} id="signupuserbtn" className="buttonsss" style={{fontFamily:"Krona One,sans-serif"}}>Sign Up for user</button>
                    <button onClick={()=>{}} id="signupdocbtn"className="buttonsss" style={{fontFamily:"Krona One,sans-serif"}} >Sign Up for doctor</button>
                    {/* {
                        this.state.signUpError?
                        <p className="errmsg" style={{color:"red"}}>{this.state.signUpError}</p>:
                        null
                    } */}
                </form>
            </div>
            <div className="form-container sign-in-container">

                <div style={{display:"flex", flexDirection:"row", justifyContent:"center",width:"100%" ,fontFamily: 'Krona One,sans-serif'}}>
                <form action="#" className="formsss" >
                    <h1 className="h1sss" style={{fontFamily:"Krona One,sans-serif"}}>Sign in</h1>
                    <div class="social-container">
                        <a href="#" className="social69" onClick={googleSignInClick}><img src="https://img.icons8.com/ios-filled/30/000000/google-logo.png"/></a>
                        <a href="#" className="social69" ><img src="https://img.icons8.com/ios-filled/30/000000/facebook-new.png"/></a>
                        <a href="#" className="social69"><img src="https://img.icons8.com/ios-filled/30/000000/microsoft.png"/></a>
                    </div>
                    <span className="spansss" style={{fontFamily:"Krona One,sans-serif"}}>or use your account</span>
                    <div className="inputsss">
                    <input name="email2" onChange={(e)=>{setEmailField(e.target.value)}} value={emailField} type="text" required style={{backgroundColor:"#eee", border:"none",outline:"none",fontFamily:"Krona One,sans-serif"}}/></div>
                    <div className="inputsss">
                    <input name="password2" onChange={(e)=>{setPasswordField(e.target.value)}} value={passwordField} type="text" required style={{backgroundColor:"#eee", border:"none",outline:"none",fontFamily:"Krona One,sans-serif"}}/></div>
                    <a href="#" className="forgotbtn1" style={{fontFamily:"Krona One,sans-serif"}}>Forgot your password?</a>
                    <button onClick={()=>{}} className="buttonsss" id="signinuserbtn" style={{fontFamily:"Krona One,sans-serif"}}>Sign In for User</button>
                    <button onClick={()=>{}} className="buttonsss" id="signindocbtn" style={{fontFamily:"Krona One,sans-serif"}}>Sign In for doctor</button>
                    {/* {
                        this.state.signInError?
                        <p className="errmsg" style={{color:"red"}}>{this.state.signInError}</p>:
                        null
                    } */}
                </form>
                </div>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1 className="h1sss" style={{fontFamily:"Krona One,sans-serif"}}>Welcome Back!</h1>
                        <p style={{fontFamily:"Krona One,sans-serif", marginTop:"10px"}}>To keep connected with us please login with your personal info</p>
                        <button className="ghosttt" id="signInn" style={{fontFamily:"Krona One,sans-serif",outline:"none"}} onClick={signInButtonClick} >SIGN IN</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1 className="h1sss" style={{fontFamily:"Krona One,sans-serif"}}>Hello, Friend!</h1>
                        <p className="psss" style={{fontFamily:"Krona One,sans-serif"}}>Enter your personal details and start journey with us</p>
                        <button className="ghosttt" id="signUpp" style={{fontFamily:"Krona One,sans-serif",outline:"none"}} onClick={signUpButtonClick}>SIGN UP</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        </div>
    )
}

export default LoginPage
