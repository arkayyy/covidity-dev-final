import {POST_DONATORS_REQUEST,POST_DONATORS_SUCCESS,POST_DONATORS_FAILURE} from './donatorsTypes'
import axios from 'axios'
import Axios from 'axios-observable'
// const { MongoClient } = require("mongodb");
// const client = new MongoClient(process.env.MONGO_CLUSTER_URI,{useUnifiedTopology:true});

const postDonatorsRequest=()=>{
    return{
        type: POST_DONATORS_REQUEST
    }
}

const postDonatorsSuccess=(insert_id)=>{
    return {
        type: POST_DONATORS_SUCCESS,
        payload: insert_id
    }
}

const postDonatorsFailure=(errorMsg)=>{
    return {
        type: POST_DONATORS_FAILURE,
        payload: errorMsg
    }
}



export const postDonators=(userData)=>{
    return (dispatch)=>{
        
        dispatch(postDonatorsRequest())

        axios.request({
            url:'/api/save',
            method: 'POST',
            data: userData
        }).then((resp)=>{
            const refNo=resp.data.refNo
            console.log("FROM postDonatorActions.js: ",refNo)
            dispatch(postDonatorsSuccess(refNo))
        }).catch((err)=>{
            dispatch(postDonatorsFailure(err.message))
        })



        

        

        
    }
}