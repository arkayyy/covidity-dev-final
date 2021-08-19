const setCoordsSuccess=(coords)=>{
    return{
        type: 'SUCCESS',
        payload: coords
    }
}

export const setCoords=(lat,long)=>{
    return setCoordsSuccess({latitude:lat,longitude:long})
}