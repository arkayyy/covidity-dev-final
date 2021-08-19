import {GET_LOCAL_USER_REQUEST,GET_LOCAL_USER_SUCCESS,GET_LOCAL_USER_FAILURE} from './getLocalUserTypes'

const getLocalUserRequest=()=>{
    return{
        type: GET_LOCAL_USER_REQUEST
    }
}

const getLocalUserSuccess=(userDetails)=>{
    return{
        type:GET_LOCAL_USER_SUCCESS,
        payload: userDetails
    }
}

const getLocalUserFailure=(errMsg)=>{
    return{
        type: GET_LOCAL_USER_FAILURE,
        payload: errMsg
    }
}

export const getLocalUser=()=>{
    return (dispatch)=>{
        dispatch(getLocalUserRequest())
    }
}