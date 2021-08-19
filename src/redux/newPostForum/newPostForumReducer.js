import {NEW_POST_REQUEST,NEW_POST_SUCCESS,NEW_POST_FAILURE} from './newPostForumTypes'

const initialState={
    loading: false,
    insertionIds: [],
    error:''
}

const newPostForumReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case NEW_POST_REQUEST:
            return{
                ...state,
                loading: true
            }

        case NEW_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                insertionIds: action.payload,
                error: ''
            }

        case NEW_POST_FAILURE:
            return{
                ...state,
                loading: false,
                insertionIds: [],
                error: action.payload
            }

        default: return state
    }
}

export default newPostForumReducer