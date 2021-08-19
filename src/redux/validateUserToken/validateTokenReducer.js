import {VALIDATE_TOKEN_REQUEST,VALIDATE_TOKEN_SUCCESS,VALIDATE_TOKEN_FAILURE} from './validateTokenTypes'

const initialState={
    loading: false,
    userSignedIn: false,
    error:''
}

const validateTokenReducer=(state=initialState,action)=>{
    switch(action.payload)
    {
        case VALIDATE_TOKEN_REQUEST:
            return{
                ...state,
                loading: true
            }

        case VALIDATE_TOKEN_SUCCESS:
            return{
                ...state,
                loading: false,
                userSignedIn:action.payload,
                error:''
            }

        case VALIDATE_TOKEN_FAILURE:
            return{
                ...state,
                loading:false,
                userSignedIn:false,
                error: action.payload

            }

        default: return state
    }
}

export default validateTokenReducer