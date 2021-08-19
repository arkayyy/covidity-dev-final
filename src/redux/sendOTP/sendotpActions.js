import {SEND_OTP_REQUEST,SEND_OTP_SUCCESS,SEND_OTP_FAILURE} from './sendotpTypes'





const sendotpRequest=()=>{
    return{
        type: SEND_OTP_REQUEST
    }
}

const sendotpSuccess=(token)=>{
    return {
        type: SEND_OTP_SUCCESS,
        payload: token
    }
}

const sendotpFailure=(errMsg)=>{
    return {
        type: SEND_OTP_FAILURE,
        payload: errMsg
    }
}

export const sendotp=(userEmail)=>{
    return (dispatch)=>{
        dispatch(sendotpRequest())
        var nodemailer = require('nodemailer')
        var otpGenerator=require('otp-generator')
        const jwt=require('jsonwebtoken')
        var transporter= nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: 'covidityapp@gmail.com',
                pass: 'rkmania86'
            }
        })
        //let info={}
         
         //const otp=otpGenerator.generate(6,{upperCase: true,specialChars:false,digits:true,alphabets:true})

        const token=jwt.sign({otp: otpGenerator.generate(6,{upperCase: true,specialChars:false,digits:true,alphabets:true})},"ABCD")
        const mailOptions = {
            from: 'covidityapp@gmail.com',
            to: userEmail,
            subject: 'COVIDITY - Donation Verification Mail',
            text: `Your OTP is: ${(jwt.verify(token,"ABCD")).otp}`
        }

        transporter.sendMail(mailOptions, (err,info)=>{
            if(err){
                dispatch(sendotpFailure(err.message))
            }
            else{
                dispatch(sendotpSuccess(token))
            }
        })


    }
}