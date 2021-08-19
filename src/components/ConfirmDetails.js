import React from 'react'
import {connect} from 'react-redux'
import './styles/confirmDetails.css'
import { postDonators} from '../redux/index'

function ConfirmDetails({userDetails,sendDataToServer}) {

    const postDataToServer=()=>{
        sendDataToServer(userDetails.userInfo)
    }
    return (
        <div className="userDetails__body">
            <div className="userDetails_fields">
            <div className="field name">
            <span className="field_text">NAME:</span>
                <p>{userDetails.userInfo.name}</p>
            </div>

            <div className="field email">
            <span className="field_text">EMAIL:</span>
                <span>{userDetails.userInfo.email}</span>
            </div>

            <div className="field phone">
            <span className="field_text">PHONE NO.:</span>
                <span>{userDetails.userInfo.contactno}</span>
            </div>

            <div className="field state">
                <span className="field_text">STATE:</span>
                <span>{userDetails.userInfo.state}</span>
            </div>

            <div className="field district">
            <span className="field_text">DISTRICT:</span>
                <span>{userDetails.userInfo.district}</span>
            </div>

            <div className="field address">
            <span className="field_text">ADDRESS:</span>
                <span>{userDetails.userInfo.address}</span>
            </div>
            </div>

        <div className="donation_fields">
            <div className="field donation_type">
            <span className="field_text">DONATION TYPE:</span>
            {console.log("USER DETAILS DONATION:",userDetails.userInfo.donation)}
                {userDetails.userInfo.donation.map((elem)=>{return(
                    <><span>{elem["type"]}</span>
                    <span> x{elem["quantity"]}</span></>)
                })}
                
            </div>

            

        </div>

        <button onClick={postDataToServer()}>SUBMIT</button>
            
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        userDetails: state.donatorData
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        sendDataToServer:(userDetails)=> dispatch(postDonators(userDetails))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ConfirmDetails)
