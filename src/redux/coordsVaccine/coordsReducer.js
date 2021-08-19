const initialState={
    coords: {}
}

const coordsReducer=(state=initialState,action)=>{
    return {
        ...state,
        coords:action.payload
    }
}

export default coordsReducer