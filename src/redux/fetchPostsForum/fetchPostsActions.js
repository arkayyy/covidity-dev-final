import axios from 'axios'
import {FETCH_POSTS_REQUEST,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE} from './fetchPostsTypes'

const fetchPostsRequest=()=>{
    return{
        type: FETCH_POSTS_REQUEST
    }
}

const fetchPostsSuccess=(posts)=>{
    return{
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

const fetchPostsFailure=(errMsg)=>{
    return{
        type: FETCH_POSTS_FAILURE,
        payload: errMsg
    }
}

export const fetchPosts=()=>{
    return (dispatch)=>{
        dispatch(fetchPostsRequest())
        axios.get('/api/forum/get-posts').then((resp)=>{
            if(resp.data.error)
            {return dispatch(fetchPostsFailure(resp.data.error))}
            dispatch(fetchPostsSuccess(resp.data.posts))
        }).catch((err)=>{
            dispatch(fetchPostsFailure(err.message))
        })
    }
}