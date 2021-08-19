import {FETCH_APPOINTMENTS_REQUEST,FETCH_APPOINTMENTS_SUCCESS, FETCH_APPOINTMENTS_FAILURE} from './appointmentsTypes'
import axios from 'axios'
const fetchAppointmentsRequest=(pinCode, district_id,date)=>{
    return{
        type: FETCH_APPOINTMENTS_REQUEST
    }
}

const fetchAppointmentsSuccess=(appointments)=>{
    return {
        type: FETCH_APPOINTMENTS_SUCCESS,
        payload: appointments
    }
}

const fetchAppointmentsFailure=(errorMessage)=>{
    return{
        type: FETCH_APPOINTMENTS_FAILURE,
        payload: errorMessage
    }
}

export const fetchAppointmentsByPin=(pinNumber,date)=>{
    return (dispatch)=>{
        //console.log('DATE:',date)
        dispatch(fetchAppointmentsRequest)
        axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+(pinNumber).toString()+'&date='+date)
        .then((resp)=>{
            const appointments=(resp.data)["sessions"]
            dispatch(fetchAppointmentsSuccess(appointments))

        })
        .catch((err)=>{
            dispatch(fetchAppointmentsFailure(err.message))
        })
    }
}

export const fetchAppointmentsByDistrict=(district_id, date)=>{
    return (dispatch)=>{
        dispatch(fetchAppointmentsRequest)
        axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id='+district_id.toString()+'&date='+date)
        .then((resp)=>{
            const appointments=(resp.data)["sessions"]
            dispatch(fetchAppointmentsSuccess(appointments))
        })
        .catch((err)=>{
            dispatch(fetchAppointmentsFailure(err.message))
        })
    }
}

export const fetchAppointmentsByPin7Days=()=>{
    return (dispatch)=>{

    }
}