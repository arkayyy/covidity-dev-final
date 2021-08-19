import {FETCH_COUNTRY_STATES_REQUEST,FETCH_COUNTRY_STATES_SUCCESS,FETCH_COUNTRY_STATES_FAILURE} from './countryStatesTypes'

const initialState = {
    loading: false,
    countryStates: [],
    error: ""
}

const countryStatesReducer = (state=initialState, action)=>{
    switch(action.type)
    {
        case FETCH_COUNTRY_STATES_REQUEST:
            return {...state,
                loading: true

            }

        case FETCH_COUNTRY_STATES_SUCCESS:
            return{
                ...state,
                loading: false,
                countryStates: action.payload,
                error:""
            }
        case FETCH_COUNTRY_STATES_FAILURE:
            return {
                ...state,
                loading: false,
                countryStates: [],
                error: action.payload
            }

        default: return state
    }
}

export default countryStatesReducer