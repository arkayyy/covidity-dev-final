import axios from 'axios'
import {FETCH_OXYGEN_DONORS_REQUEST,FETCH_OXYGEN_DONORS_SUCCESS,FETCH_OXYGEN_DONORS_FAILURE} from './fetchOxygenDonorsTypes'

const fetchOxygenDonorsRequest=()=>{
    return{
        type: FETCH_OXYGEN_DONORS_REQUEST
    }
}

const fetchOxygenDonorsSuccess=(donors)=>{
    return {
        type: FETCH_OXYGEN_DONORS_SUCCESS,
        payload: donors
    }
}

const fetchOxygenDonorsFailure=(errorMsg)=>{
    return{
        type: FETCH_OXYGEN_DONORS_FAILURE,
        payload: errorMsg
    }
}

export const fetchOxygenDonors=(district_id)=>{
    return (dispatch)=>{
        console.log("from fetchOxygenDonorActions.js:",`d_${district_id}`)
        dispatch(fetchOxygenDonorsRequest())
        const payload= {
            districtid: district_id
        }
    //     axios.request({
    //         url:'/api/fetch_oxygen_donors',
    //     method:'GET', 
    //     data: payload
    // })
        axios.get('/api/fetch_oxygen_donors',{
            params:{
                district_id: district_id
            }
        })
        .then((resp)=>{
            dispatch(
                fetchOxygenDonorsSuccess(resp.data.donorList))
        }).catch((err)=>{
               dispatch(fetchOxygenDonorsFailure(err.message))
        })
    }
}