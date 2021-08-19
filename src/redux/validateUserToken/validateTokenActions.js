import axios from 'axios'
import {VALIDATE_TOKEN_REQUEST,VALIDATE_TOKEN_SUCCESS,VALIDATE_TOKEN_FAILURE} from './validateTokenTypes'

const validateTokenRequest=()=>{
    return{
        type: VALIDATE_TOKEN_REQUEST
    }
}

const validateTokenSuccess=(signedInState)=>{
    return{
        type:VALIDATE_TOKEN_SUCCESS,
        payload: signedInState
    }
}

const validateTokenFailure=(errMsg)=>{
    return{
        type:VALIDATE_TOKEN_FAILURE,
        payload: errMsg
    }
}

export const validateToken=(token,username)=>{
    return (dispatch)=>{
        console.log("TOKEN",token)
        dispatch(validateTokenRequest())
        axios.get('/api/validate-user',{
            params:{
                token: token,
                username: username
            }
        })
        .then((resp)=>{
            if(resp.data.error){console.log("validation error",resp.data.error)
                dispatch(validateTokenFailure(resp.data.error))
            }
            else{console.log("SUCCESS VALIDATION")
                dispatch(validateTokenSuccess(resp.data.userSignedIn))
            }
            
        }).catch((err)=>{
               dispatch(validateTokenFailure(err.message))
        })
    }
}