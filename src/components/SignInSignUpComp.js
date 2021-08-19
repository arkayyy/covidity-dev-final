import React from 'react'
import {connect} from 'react-redux'

import {validateToken} from '../redux/index'


function SignInSignUpComp() {
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        userSignedInDetails: state.userSignedInDetails,
        
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        doValidateToken: (token,username)=>dispatch(validateToken(token,username))
       
    }
}





export default SignInSignUpComp
