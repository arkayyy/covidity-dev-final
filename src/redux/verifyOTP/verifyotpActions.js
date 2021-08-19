const verifyotpSuccess=(refno)=>{
    return {
        type: 'VERIFY_OTP_SUCCESS',
        payload: refno
    }
}

const verifyotpFailure=(errMsg)=>{
    return {
        type:  'VERIFY_OTP_FAILURE',
        payload: errMsg
    }
}

export const verifyotpReset=()=>{



}

export const verifyOtp=(token,entered_otp)=>{
    const jwt=require('jsonwebtoken')
    let decoded=jwt.verify(token,"ABCD")
    let otp= decoded.otp
    if(otp===entered_otp)
    {
        
    }

}