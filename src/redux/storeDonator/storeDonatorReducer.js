const initialState={
    userInfo: {}
}

const storeDonatorReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'STORE_DONATOR_SUCCESS':
            return {
                ...state,
                userInfo: action.payload
            }
        
        default: return state
    }
    
}

export default storeDonatorReducer