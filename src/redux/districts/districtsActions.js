import {FETCH_DISTRICTS_REQUEST, FETCH_DISTRICTS_SUCCESS, FETCH_DISTRICTS_FAILURE} from './districtsTypes'
import axios from 'axios'

const fetchDistrictsRequest=()=>{
    return{
        type: FETCH_DISTRICTS_REQUEST
    }
}

const fetchDistrictsSuccess=(districts)=>{
    return{
        type: FETCH_DISTRICTS_SUCCESS,
        payload: districts
    }
}

const fetchDistrictsFailure=(errorMessage)=>{
    return {
        type: FETCH_DISTRICTS_FAILURE,
        payload: errorMessage
    }
}

export const fetchDistricts=(state_id)=>{
    console.log(`FROM districtsActions.js :${state_id} `)
    return (dispatch)=>{
        dispatch(fetchDistrictsRequest())
        axios.get('https://cdn-api.co-vin.in/api/v2/admin/location/districts/'+state_id.toString())
        .then((resp)=>{
            console.log("From fetchDistricts.js",(resp.data)["districts"])
            const districts=(resp.data)["districts"]
            dispatch(fetchDistrictsSuccess((resp.data)["districts"]))
        }).catch((error)=>{
            dispatch(fetchDistrictsFailure(error.message))
        })
    }
}