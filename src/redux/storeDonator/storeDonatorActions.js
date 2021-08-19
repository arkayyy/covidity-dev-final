export const storeDonator=(userInfo)=>{
    return{type: 'STORE_DONATOR_SUCCESS',
        payload: userInfo
    }
}