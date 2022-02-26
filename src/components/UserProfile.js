import React from 'react'

import Header from './Header'

import firebaseApp from '../firebase/index'
import firebaseAuth from '../firebase/auth'

import { onAuthStateChanged, sendPasswordResetEmail } from 'firebase/auth'

import { useState } from 'react'

import Mbutton from './button/Mbutton'
import Sbutton from './button/Sbutton'

import {useAuth0} from '@auth0/auth0-react'
import { useEffect } from 'react'

function UserProfile() {

  const {loginWithPopup,loginWithRedirect,logout,user, isAuthenticated} = useAuth0()


    const [loggedIn, setLoggedIn] = useState(false);
    const [userDispName, setUserDispName] = useState('');
    const [userImgUrl, setUserImgUrl] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [passwordResetEmailMessage,setPasswordResetEmailMessage] = useState('')

    // onAuthStateChanged(firebaseAuth, (user) => {
    //     if (user) {
    //       // User is signed in, see docs for a list of available properties
    //       // https://firebase.google.com/docs/reference/js/firebase.User
    //       const uid = user.displayName;
    //       const uimg = user.photoURL;
    //       setLoggedIn(true);
    //       setUserDispName(uid);
    //       setUserImgUrl(uimg);
    //       setUserEmail(user.email);
    //       // ...
    //     } else {
    //       // User is signed out
    //       // ...
    //       setLoggedIn(false);
    //       window.location.replace('/signin');
    //     }
    //   });


    const passwordReset=()=>{
        sendPasswordResetEmail(firebaseAuth, userEmail)
        .then(() => {
          // Password reset email sent!
          // ..
          setPasswordResetEmailMessage("Successfully sent password reset email!");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setPasswordResetEmailMessage(error.message);
        });
    }



    const signOutUser=()=>{
        logout()
    }

    return (<>{user?(<div style={{fontFamily:"Krona One,sans-serif"}}>

    <div className='section1_header'><Header/></div>
    <div className='section1_title' style={{display:"flex", justifyContent:"center", marginTop:"2%"}}><h1>USER PROFILE</h1></div>


    <div className='section_2&3' style={{display:"flex", flexDirection:"column", marginTop:"40px", height:"70vh"}}>
        <div className='section2_body' style={{display:"flex", flexDirection:"row", flex:"0.7",marginTop:"40px"}}>
            <div className='left' style={{flex:"0.5",display:"flex", justifyContent:"center"}}>

                <div style={{display:"flex", flexDirection:"column"}}>
                    <h4 style={{margin:"10px"}}>Name: {user.given_name}</h4>
                    <h4 style={{margin:"10px"}}>Email: {user.email}</h4>
                
                    
                    <div style={{margin:"10px"}}><a onClick={passwordReset}><Sbutton text={"Reset password"}/></a></div>

                    <h6 style={{margin:"10px"}}>{passwordResetEmailMessage?passwordResetEmailMessage:''}</h6>
                </div>
            </div>

            <div className='right' style={{flex:"0.5",display:"flex", justifyContent:"center"}}>
                <img src={user.picture} style={{borderRadius:"50%",width:"200px",height:"200px"}} alt="profile photo"/>
            </div>
        </div>

        <div className='section3_' style={{display:"flex",flexDirection:"column", flex:"0.3", justifyContent:"center"}}>
            <div style={{display:"flex", justifyContent:"center"}}><div style={{margin:"10px"}}><a onClick={signOutUser}><Sbutton text={"SIGN OUT"}/></a></div></div>
        </div>
    </div>
</div>):(<>LOADING...</>)}</>
        
    )
}

export default UserProfile
