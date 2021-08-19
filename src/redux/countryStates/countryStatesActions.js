import {FETCH_COUNTRY_STATES_REQUEST,FETCH_COUNTRY_STATES_SUCCESS,FETCH_COUNTRY_STATES_FAILURE} from './countryStatesTypes'
import axios from 'axios'


const fetchCountryStatesRequest = ()=>{
    return {
        type: FETCH_COUNTRY_STATES_REQUEST
    }
}

const fetchCountryStatesSuccess=(countryStates)=>{
    return{
        type: FETCH_COUNTRY_STATES_SUCCESS,
        payload: countryStates
    }
}

const fetchCountryStatesFailure=(errorMsg)=>{
    return{
        type:FETCH_COUNTRY_STATES_FAILURE,
        payload: errorMsg
    }
}

export const fetchCountryStates=()=>{
    return (dispatch)=>{
        dispatch(fetchCountryStatesRequest)
        axios.get("https://cdn-api.co-vin.in/api/v2/admin/location/states")
        .then((resp)=>{
            const countryStates=(resp.data)["states"]
        
            dispatch(fetchCountryStatesSuccess(countryStates))
        }).catch((err)=>{
            dispatch(fetchCountryStatesFailure(err.message))

        })
    }
}
