import {POST_DONATORS_REQUEST,POST_DONATORS_SUCCESS,POST_DONATORS_FAILURE} from './donatorsTypes'

const initialState={
    loading: false,
    refno: 0,
    error: ''
}

const donatorsReducer=(state=initialState, action)=>{
    switch(action.type)
    {
        case POST_DONATORS_REQUEST:
            return{...state,
                loading: true
            }
        case POST_DONATORS_SUCCESS:
            return {
                ...state,
                loading:false,
                refno: action.payload
            }
        case POST_DONATORS_FAILURE:
            return{...state,
                loading: false,
                error: action.payload
            }
        default: return state
    }
}

export default donatorsReducer