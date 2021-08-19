import {FETCH_DISTRICTS_REQUEST, FETCH_DISTRICTS_SUCCESS, FETCH_DISTRICTS_FAILURE} from './districtsTypes'

const initialState={
    loading: false, 
    districts: [],
    error: ''
}

const districtsReducer=(state=initialState, action)=>{
    switch(action.type)
    {
        case FETCH_DISTRICTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_DISTRICTS_SUCCESS:
            return{
                ...state,
                loading:false,
                districts: action.payload,
                error:''
            }

        case FETCH_DISTRICTS_FAILURE:
            return{
                ...state,
                loading:false,
                districts: [],
                error:action.payload
            }

        default: return state
    }
}


export default districtsReducer

