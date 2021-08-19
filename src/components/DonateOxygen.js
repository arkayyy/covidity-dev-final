import React, { useState,useEffect } from 'react'
import ReactDOM from 'react-dom';
import 'react-nice-dates/src/style.scss';
import Header from './Header'
import './styles/DonateOxygen.css'
import BackdropFilter from 'react-backdrop-filter'
import GlassCard from './glasscard';
import { Button } from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';
import { DatePicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'
import { enGB } from 'date-fns/locale'
import Modal from 'react-modal'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {connect} from 'react-redux'
import {postDonators} from '../redux/index'
import {fetchCountryStates} from '../redux/index'
import {fetchDistricts,storeDonator} from '../redux/index'
import VerifyDonation from './VerifyDonation'
import ConfirmDetails from './ConfirmDetails'


//import MongoClient from 'mongodb'

// const express=require('express')
// const app = express();

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));




function DonateOxygen({countryStates,districts,getCountryStates,getDistricts,submitDonator,donatorRefNo,keepDonatorDataLocally,userDetails}) {

    const [droprdownOpen, setDropdownOpen]=useState(false)
    const [optvalue,set_optvalue]=useState(null)
    const [selectedState,setSelectedState]=useState("none")
    const [state_id,setState_id]=useState(null)
    const [selectedDistrict,setSelectedDistrict]=useState("none")
    const [dist_id,setDist_id]=useState(null)
    const [calDate, setCalDate] = useState(new Date())
    const [date, setDate] = useState()
    const [exaddress,setAddress]=useState("")
    const [noOfOxyCyli, setNoOfOxyCyli]=useState(1)
    const [fullName,setName]=useState("")
    const [phno,setPhno]=useState(null)
    const [useremail,setEmail]=useState("")
    const [otpModalOpen,setOtpModalOpen]=useState(false)
    const [confirmDetailsModalOpen,setConfirmDetailsModalOpen]=useState(false)

    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };


    const uploadUserData=()=>{


      const userData={
          name: fullName,
          email: useremail,
          state: selectedState,
          state_id: state_id,
          district: selectedDistrict,
          district_id: dist_id,
          contactno: phno,
          address: exaddress,
         donation: [{type:"Oxygen Cylinder",
         quantity: noOfOxyCyli}]
          

      }
        keepDonatorDataLocally(userData)
    }
    
    function DatePickerExample() {
      const [date, setDate] = useState()
    }

    const occupations_list=[{key:'health',occus:["asdasd","wdfwfwe"]},{key:'health',occus:["asdasd","wdfwfwe"]},]
    const style_survey_text={ color:"#0085FF", fontFamily:"Krona One, sans-serif"}

    useEffect(()=>{
        getCountryStates()
    },[])
    
    return (
        <div>
            <Header/>
          <div style={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
            <div className="donate__form" style={{display:"flex",flexDirection:"column"}}>
                
                <div className="ques_wrapper 1" style={{margin:"10px"}}>
                <div className="ques 1" style={{margin:"20px", flexDirection:"column", display:"flex", color: "#0085FF"}}>
                    <span style={style_survey_text}>Your Name:</span>
                    <input type="text" value={fullName} onChange={(event)=>{event.preventDefault(); setName(event.target.value)}} style={{borderRadius: "0.5rem", fontFamily:"Krona One, sans-serif"}}/>
                </div>

                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Contact Number:</span>
                    <input type="tel" name="phone_number" value={phno} onChange={(event)=>{event.preventDefault(); setPhno(event.target.value)}} required="required" id="phone_number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" style={{fontFamily:"Krona One, sans-serif"}}/>
                </div>

                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Email:</span>
                    <input value={useremail} onChange={(event)=>{event.preventDefault(); setEmail(event.target.value)}} style={{fontFamily:"Krona One, sans-serif"}}/>
                </div>


                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>How many oxygen cylinders can you donate?:</span>
                    <input type="number" onChange={(event)=>{ 
                      setNoOfOxyCyli(event.target.value > 1 ? event.target.value : 1)
                    }} value={noOfOxyCyli} value={noOfOxyCyli} onChange={(event)=>{event.preventDefault(); setNoOfOxyCyli(event.target.value)}} style={{fontFamily:"Krona One, sans-serif"}}/>
                </div>

                
                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Select your location:</span>
                    <Dropdown>
                    <Dropdown.Toggle className="btn2" variant="success" id="dropdown-basic">
                        {selectedState=="none"? (<>Select State</>): (<>{selectedState}</>)} 
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                         {countryStates && countryStates.countryStates && countryStates.countryStates.map((elem)=> <Dropdown.Item onClick={()=>{setSelectedState(elem["state_name"]); setState_id(elem["state_id"]); getDistricts(elem["state_id"])}}>{elem["state_name"]}</Dropdown.Item>)}
                      </Dropdown.Menu>
                    </Dropdown>


                    {selectedState=="none" ? (<></>) : (
                      <Dropdown>
                        <Dropdown.Toggle className="btn2" variant="success" id="dropdown-basic">
                         {selectedDistrict=="none"?(<>Select District</>) : ( <>{selectedDistrict}</>)}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {districts && districts.districts && districts.districts.map((elem)=> <Dropdown.Item onClick={()=>{setDist_id(elem["district_id"]); setSelectedDistrict(elem["district_name"])}}>{elem["district_name"]}</Dropdown.Item>)}
                        </Dropdown.Menu>
                      </Dropdown>
                    )}

                </div>

                {selectedDistrict=="none"?(<></>):(<div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                <span style={style_survey_text}>Enter address:</span>
                  <input style={{fontFamily:"Krona One, sans-serif"}} type="text" onChange={(event)=>{setAddress(event.target.value)}}/>
                </div>)}

             {/* <div className="ques 2" style={{margin:"20px"}}>
                  <span style={style_survey_text}>Pick-up Time:</span>
                    <input style={{}}/>
               </div> */}



                {/* <div className="ques 2" style={{margin:"20px"}}>
                    <span style={style_survey_text}>Pick-up Date:</span>
                    
                    <DatePicker className="calendar" date={date} onDateChange={setDate} locale={enGB}>
      {({ inputProps, focused }) => (
        <input
          className={'input' + (focused ? ' -focused' : '')}
          {...inputProps}
        />
      )}
    </DatePicker>
    
                </div> */}

                

                
                
        {exaddress==""?(<></>):(<div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center"}}>
                <button className="buttn1" style={{margin:"20px", cursor:"pointer", width: "50%"}} onClick={()=>{uploadUserData(); setConfirmDetailsModalOpen(true)}}variant="outline-success" >Donate Now</button>
                </div>  )}

                {/* <Modal isOpen={otpModalOpen} contentLabel="EXAMPLE MODAL">
                  <div className="otp_modal" >
                  <div className="otp_modal_header">
                    <div className="otp_modal_header_text">
                    <h1  style={{fontFamily:"Krona One, sans-serif",justifyContent:"center"}}>OTP VERIFICATION</h1>
                    </div>
                    <img className="otp_modal_close_icon" src='close-icon.png' alt="" onClick={()=>{setOtpModalOpen(false)}}/>
                  </div>
                  <div>
                  <VerifyDonation />
                  </div>
                  </div>
                </Modal> */}
                <Modal isOpen={confirmDetailsModalOpen} contentLabel="EXAMPLE MODAL">
                  <div className="otp_modal">
                    <div className="otp_modal_header">
                    <div className="otp_modal_header_text">
                    <h1  style={{fontFamily:"Krona One, sans-serif",justifyContent:"center"}}>CONFIRM DONATION DETAILS</h1>
                    </div>
                    <img className="otp_modal_close_icon" src='close-icon.png' alt="" onClick={()=>{setConfirmDetailsModalOpen(false)}}/>
                    </div>

                    <div className="confirmDetails_modal_body">
                        <ConfirmDetails />
                    </div>
                    
                  </div>
                </Modal>



                </div>

            </div>
            
            
            <div className="search">
            <span style={{fontFamily:"Krona One, sans-serif",margin:"20px"}}>Search by location</span>
            <Dropdown>
  <Dropdown.Toggle className="btn2" variant="success" id="dropdown-basic">
    Search Here
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

            </div>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
  return{
      donatorRefNo: state.donatorRefNo,
      countryStates: state.countryStates,
      districts: state.districts,
      userDetails: state.donatorData
  }
  
}

const mapDispatchToProps=(dispatch)=>{
  return {
      submitDonator: (payload)=>dispatch(postDonators(payload)),
      getCountryStates: ()=>dispatch(fetchCountryStates()),
      getDistricts: (state_id)=>dispatch(fetchDistricts(state_id)),
      keepDonatorDataLocally: (userInfo)=>dispatch(storeDonator(userInfo))

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(DonateOxygen)


