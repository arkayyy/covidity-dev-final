import {SEND_OTP_REQUEST,SEND_OTP_SUCCESS,SEND_OTP_FAILURE} from './sendotpTypes'

const initialState={
    loading: false,
    token: "",
    error: ''
}

const sendotpReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case SEND_OTP_REQUEST:
            return {...state,
                loading:true
            }

        case SEND_OTP_SUCCESS:
            return {
                ...state,
                loading: false,
                token: action.payload
            }

        case SEND_OTP_FAILURE:
            return {
                ...state,
                loading:false,
                error: action.payload
            }

        default: return state
    }
}

export default sendotpReducer