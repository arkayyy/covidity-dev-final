import {FETCH_OXYGEN_DONORS_REQUEST,FETCH_OXYGEN_DONORS_SUCCESS,FETCH_OXYGEN_DONORS_FAILURE} from './fetchOxygenDonorsTypes'

const initialState={
    loading: false,
    oxygenDonors: [],
    error: ''
}

const fetchOxygenDonorsReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case FETCH_OXYGEN_DONORS_REQUEST:
            return{
                ...state,
                loading: true
            }
        case FETCH_OXYGEN_DONORS_SUCCESS:
            return{
                    ...state,
                    loading: false,
                    oxygenDonors: action.payload,
                    error: ''
                }
        case FETCH_OXYGEN_DONORS_FAILURE:
            return{
                ...state,
                loading: false,
                oxygenDonors: [],
                error: action.payload
                
            }
        default: return state
    }
}

export default fetchOxygenDonorsReducer