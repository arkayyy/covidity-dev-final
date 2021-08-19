import {GET_LOCAL_USER_REQUEST,GET_LOCAL_USER_SUCCESS,GET_LOCAL_USER_FAILURE} from './getLocalUserTypes'

const initialState={
    loading:false,
    userDetails: null,
    error: ''
}

const getLocalUserReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case GET_LOCAL_USER_REQUEST:
            return{
                ...state,
                loading:true
            }

        case GET_LOCAL_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                userDetails: action.payload,
                error:''
            }

        case GET_LOCAL_USER_FAILURE:
            return{
                ...state,
                loading:false,
                userDetails: null,
                error: action.payload

            }

        default: return state
    }
}

export default getLocalUserReducer