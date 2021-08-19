const initialState={
    login_status: false,
    login_refno: null,
    error: ''
}

const verifyotpReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'VERIFY_OTP_SUCCESS':
            return {
                ...state,
                login_status:true,
                login_refno: action.payload
            }
        case 'VERIFY_OTP_FAILURE':
            return {
                ...state,
                login_status: false,
                error: action.payload
            }
        case 'VERIFY_OTP_RESET':
            return {
                ...state,
                login_status: false,
                login_refno: null,
                error:''
            }
        default: return state
    }
}

export default verifyotpReducer