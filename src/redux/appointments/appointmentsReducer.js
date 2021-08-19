import {FETCH_APPOINTMENTS_REQUEST,FETCH_APPOINTMENTS_SUCCESS, FETCH_APPOINTMENTS_FAILURE} from './appointmentsTypes'

const initialState={
    loading: false,
    appointments: [],
    error:''
}

const appointmentsReducer=(state=initialState, action)=>{
    switch(action.type)
    {
        case FETCH_APPOINTMENTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_APPOINTMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                appointments: action.payload,
                error:''
            }
        case FETCH_APPOINTMENTS_FAILURE:
            return {
                ...state,
                loading: false,
                appointments:[],
                error: action.payload
            }

        default: return state
    }
}

export default appointmentsReducer