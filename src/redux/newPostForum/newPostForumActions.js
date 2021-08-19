import axios from 'axios'
import {NEW_POST_REQUEST,NEW_POST_SUCCESS,NEW_POST_FAILURE} from './newPostForumTypes'

const newPostRequest=()=>{
    return{
        type:NEW_POST_REQUEST
    }
}

const newPostSuccess=(insertionIds)=>{
    return{
        type: NEW_POST_SUCCESS,
        payload: insertionIds
    }
}

const newPostFailure=(errorMsg)=>{
    return{
        type: NEW_POST_FAILURE,
        payload: errorMsg
    }
}

export const newPost=(post)=>{
    return (dispatch)=>{
        dispatch(newPostRequest())
        axios.request({
            url:'/api/forum/new-post',
            method:'POST',
            data: post
        }).then((resp)=>{
            if(resp.data.error)
            {return dispatch(newPostFailure(resp.data.error))}
            dispatch(newPostSuccess(resp.data.insertionIds))
        }).catch((err)=>{
            dispatch(newPostFailure(err.message))
        })
    }
}