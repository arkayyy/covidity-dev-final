import {SIGN_UP_REQUEST,SIGN_UP_SUCCESS,SIGN_UP_FAILURE} from './SignUpTypes'

const initialState={
    loading: false,
    token: '',
    error: ''
}

const SignUpReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case SIGN_UP_REQUEST:
            return{
                ...state,
                loading: true
            }

        case SIGN_UP_SUCCESS:
            return{
                ...state,
                loading:false,
                token: action.payload,
                error: ''
            }
        case SIGN_UP_FAILURE:
            return{
                ...state,
                loading:false,
                token: '',
                error: action.payload
            }

        default: return state
    }
}

export default SignUpReducer