import {FETCH_POSTS_REQUEST,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE} from './fetchPostsTypes'

const initialState={
    loading: false,
    posts:[],
    error:''
}

const fetchPostsReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case FETCH_POSTS_REQUEST:
            return{
                ...state,
                loading: true
            }

        case FETCH_POSTS_SUCCESS:
            return{
                ...state,
                loading:false,
                posts:action.payload,
                error:''
            }

        case FETCH_POSTS_FAILURE:
            return{
                ...state,
                error: action.payload,
                posts:[]
            }

        default: return state
    }
}
export default fetchPostsReducer