import React, { useEffect } from 'react'
import {validateToken} from '../redux/index'
import {connect} from 'react-redux'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import Home from './Home'
import SignInSignUpComponent from './SignInSignUpComponent'
import SignInSignUpComp from './SignInSignUpComp'
import { useState } from 'react'

function SignInOrHome({doValidateToken,userSignedInDetails}) {

    const [cookies,setCookies,removeCookies]=useCookies(["user"])
    const [loggedIn,setLoggedIn]=useState(false)
    const [loading,setLoading]=useState(true)
    const [validateError,setValidateError]=useState('')

    const promiseOfValidate=axios.get('/api/validate-user',{params:{token:cookies.tokenCovidity,username:cookies.usernameCovidity,email:cookies.emailCovidity}}).then((resp)=>{
        if(resp.data.error){console.log("validation error",resp.data.error)
            return {loading:false,userSignedIn:false,error:resp.data.error}
        }
        else{console.log("SUCCESS VALIDATION")
            return {loading:false,userSignedIn:true,error:''}
        }
        
    }).catch((err)=>{return {loading:false,userSignedIn:false, error: err.message}})

    window.onload=async()=>{
        let result=await promiseOfValidate
        setLoading(result.loading)
        setLoggedIn(result.userSignedIn)
    }



    

    useEffect(()=>{
        //doValidateToken(cookies.tokenCovidity,cookies.usernameCovidity)
    })
    return (
        <div>
        { !cookies.usernameCovidity && !cookies.tokenCovidity ?(<SignInSignUpComponent/>):(<>{loading ?(<h1>LOADING...</h1>):(<>{validateError?(<h1>{validateError}</h1>):(<>{loggedIn?(<Home/>):(<SignInSignUpComponent/>)}</>)}</>)}</>)}
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        userSignedInDetails: state.userSignedInDetails
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        doValidateToken:(token,username)=>dispatch(validateToken(token,username))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInOrHome)
