import axios from 'axios'
import {SIGN_UP_REQUEST,SIGN_UP_SUCCESS,SIGN_UP_FAILURE} from './SignUpTypes'

const signUpRequest=()=>{
    return{
        type: SIGN_UP_REQUEST
    }
}

const signUpSuccess=(token)=>{
    return{
        type: SIGN_UP_SUCCESS,
        payload: token
    }
}

const signUpFailure=(errMsg)=>{
    return{
        type: SIGN_UP_FAILURE,
        payload: errMsg
    }
}

export const signUp=(userLoginData)=>{
    
    return (dispatch)=>{
        dispatch(signUpRequest())
        axios.request({
        url:'/api/sign-up-user',
        method: 'POST',
        data: userLoginData
    }).then((resp)=>{
        if(resp.data.error){//console.log('ERROR from signUpAction.js:',resp.data.error)
            dispatch(signUpFailure(resp.data.error))
        }
        else{

            dispatch(signUpSuccess(resp.data.refNo))
        }
    }).catch((err)=>{
        dispatch(signUpFailure(err.message))
    })

}
}

export const signIn=(userLoginInfo)=>{
    return (dispatch)=>{
        dispatch(signUpRequest())
        axios.request({
            url: '/api/sign-in-user',
            method:'POST',
            data:userLoginInfo
        }).then((resp)=>{
            if(resp.data.error){dispatch(signUpFailure(resp.data.error))

            }
            else{
                dispatch(signUpSuccess(resp.data.token))
            }
        }).catch((err)=>{
            dispatch(signUpFailure(err.message))
        })
    }
}