import React,{useState,useEffect} from 'react'
import {Dropdown} from 'react-bootstrap'
import Header from './Header'
import {connect} from 'react-redux'
import {fetchCountryStates,fetchDistricts, fetchOxygenDonors} from '../redux/index'
import Footer from './Footer'
import './styles/supportOxygen.css'
import FileUpload from './fileUpload'
import ResultsComponent from './ResultsComponent'
import Lottie from 'react-lottie'
import loadingAnimation from '../images/loadingAnimation.json'
import errorAnimation from '../images/errorAnimation.json'
import Modal from 'react-modal'


var validator=require('email-validator')
const IPFS=require('ipfs-mini')

//const ipfs=new IPFS({host: 'ipfs.infura.io',port: '5001', protocol:'https'})
var ipfsAPI=require('ipfs-api')
var ipfs=ipfsAPI('ipfs.infura.io','5001',{protocol:'https'})

const visible="visible"

function SupportOxygen1({countryStates,districts,getCountryStates,getDistricts,getOxygenDonors,oxygenDonors}) {
    const style_survey_text={ color:"#23374D", fontFamily:"Krona One, sans-serif"}
    const [droprdownOpen, setDropdownOpen]=useState(false)
    const [optvalue,set_optvalue]=useState(null)
    const [selectedState,setSelectedState]=useState('none')
    const [state_id,setState_id]=useState(null)
    const [selectedDistrict,setSelectedDistrict]=useState("none")
    const [dist_id,setDist_id]=useState(null)
    const [calDate, setCalDate] = useState(new Date())
    const [date, setDate] = useState()
    const [exaddress,setAddress]=useState("")
    const [noOfOxyCyli, setNoOfOxyCyli]=useState(1)
    const [fullName,setName]=useState("")
    const [phno,setPhno]=useState("")
    const [useremail,setEmail]=useState("")
    const [otpModalOpen,setOtpModalOpen]=useState(false)
    const [confirmDetailsModalOpen,setConfirmDetailsModalOpen]=useState(false)
    const [userAge,setUserAge]=useState(null)
    const [patientSpo2,setPatientSpo2]=useState(null)
    const [pic, setPic]=useState()
    const [dispResultCompOpen,setDispCompOpen]=useState("none")
    const [medReportUrl,setMedReportUrl]=useState("")

    var fileBuffer
    useEffect(()=>{
        getCountryStates()
    },[])

    const animOptions={
        loop: true,
        autoplay: true,
      animationData: loadingAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }

    const errAnimOptions={
        loop: true,
        autoplay: true,
      animationData: errorAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }

    const ipfsUpload=()=>{//console.log(fileBuffer)
        ipfs.files.add(Buffer.from(fileBuffer),(err,result)=>{
            console.log("https://ipfs.infura.io/ipfs/"+result[0].path)
            setMedReportUrl("https://ipfs.infura.io/ipfs/"+result[0].path)
            
        })
    }
    
    const fileUpload=()=>{
        var data=null
        var reader=new FileReader()
        reader.readAsArrayBuffer(pic)
        reader.onload=function(){
            
            var buffer=reader.result
            fileBuffer=new Uint8Array(buffer)
            console.log("buffer:",fileBuffer)
           // console.log("enc array:",array)
            // ipfs.files.add(Buffer.from(fileBuffer),(err,hash)=>{
            //     if(err){
            //         return console.log("ERRORORORO",err.message)
            //     }
                
            //     console.log('https://ipfs.infura.io/ipfs/'+hash)
            // })
            ipfsUpload()
            
        }
        // reader.onerror=(err)=>{
        //     console.log("error in encoding:", err)
        // }
        //var buf = Buffer.from(data, 'base64');
       
        
    }

    return (
        <div >
            <Header/>
          <div className="supportOxygen__body" style={{display:"flex", justifyContent:"space-evenly", flexWrap:"wrap"}}>
            <div className="donate__form" style={{display:"flex",flexDirection:"column"}}>
                
            <div className="ques_wrapper_1" style={{margin:"10px"}}>
                <div className="ques 1" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Your Name:</span>
                    <input pattern="[a-zA-Z]" title="Name should contain only alhabets!"  type="text" value={fullName} onChange={(event)=>{event.preventDefault(); setName((event.target.value).replace(/[^A-Z a-z]/ig,''))}} style={{borderRadius: "0.5rem", outline:"none", fontFamily:"Krona One, sans-serif"}}/>
                    {!fullName?(<span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D", paddingTop:"5px"}}>*Required</span>):(<></>)}
                </div>

                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Age:</span>
                    <input type="number" name="age" value={userAge} onChange={(event)=>{event.preventDefault(); setUserAge(event.target.value)}} required="required" id="phone_number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" style={{borderRadius: "0.5rem", outline:"none", fontFamily:"Krona One, sans-serif"}}/>
                    {!userAge?(<span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D", paddingTop:"5px"}}>*Required</span>):(<></>)}
                    {(userAge<0 || userAge>120)?(<span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D", paddingTop:"5px"}}>Enter a valid age!</span>):(<></>)}
                </div>
                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Contact no.: (+91-)</span>
                     <input style={{}} type="tel" maxLength="10" name="age" value={phno} onChange={(event)=>{event.preventDefault(); setPhno((event.target.value).toString())}} required="required" id="phone_number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" style={{borderRadius: "0.5rem", outline:"none", fontFamily:"Krona One, sans-serif"}}/>
                     {!phno?(<span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D", paddingTop:"5px"}}>*Required</span>):(<></>)}
                     {(phno.length>0 && phno.length<10)?(<span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D", paddingTop:"5px"}}>Enter a valid 10-digit mobile number!</span>):(<></>)}
                </div>

                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Email:</span>
                    <input value={useremail} onChange={(event)=>{event.preventDefault(); setEmail(event.target.value)}} style={{borderRadius: "0.5rem",outline:"none", fontFamily:"Krona One, sans-serif"}}/>
                    {/* {!useremail?(<span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D", paddingTop:"5px"}}>*Required</span>):(<></>)} */}
                    {( useremail.length>0 && !validator.validate(useremail))?(<span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D", paddingTop:"5px"}}>Enter a valid email!</span>):(<></>)}
                </div>

                

                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>What is the current SpO2 level of the patient?:</span>
                    <input type="number" onChange={(event)=>{ 
                      setPatientSpo2(event.target.value)
                    }} value={patientSpo2}  onChange={(event)=>{event.preventDefault(); setPatientSpo2(event.target.value)}} style={{borderRadius: "0.5rem", outLine:"none", fontFamily:"Krona One, sans-serif"}}/>
                    {patientSpo2<0 || patientSpo2>100?(<span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D", paddingTop:"10px"}}>Enter valid SpO2 level!</span>):(<></>)}
                </div>

                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Patient's medical reports:</span>
                    <input type="file" onChange={(event)=>{setPic(event.target.files[0]); }} style={{borderRadius: "0.5rem", outLine:"none", fontFamily:"Krona One, sans-serif", marginTop:"10px"}} placeholder="Select a file"/>
                    <button onClick={()=>{fileUpload()}}> UPLOAD </button>
                    {patientSpo2<0 || patientSpo2>100?(<span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D", paddingTop:"10px"}}>Enter valid SpO2 level!</span>):(<></>)}
                    
                </div>
                    {console.log("HURRAA",medReportUrl)}
                
                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Select your location:</span>
                    {selectedDistrict=="none" ?(<span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"#23374D", paddingTop:"5px"}}>*Required</span>):(<></>)}
                    <Dropdown>
                    <Dropdown.Toggle className="btn2" variant="success" id="dropdown-basic">
                        {selectedState=="none"? (<>Select State</>): (<>{selectedState}</>)} 
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                         {countryStates && countryStates.countryStates && countryStates.countryStates.map((elem)=> <Dropdown.Item onClick={()=>{setSelectedState(elem["state_name"]); setState_id(elem["state_id"]); getDistricts(elem["state_id"])}}>{elem["state_name"]}</Dropdown.Item>)}
                      </Dropdown.Menu>
                    </Dropdown>


                    {selectedState=='none' ? (<></>) : (
                      <Dropdown>
                        <Dropdown.Toggle className="btn2" variant="success" id="dropdown-basic">
                         {selectedDistrict=="none"?(<>Select District</>) : ( <>{selectedDistrict}</>)}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {districts && districts.districts && districts.districts.map((elem)=> <Dropdown.Item onClick={()=>{setDist_id(elem["district_id"]); setSelectedDistrict(elem["district_name"]); }}>{elem["district_name"]}</Dropdown.Item>)}
                        </Dropdown.Menu>
                      </Dropdown>
                    )}

                </div>

                {selectedDistrict=="none"?(<></>):(<div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                <span style={style_survey_text}>Enter address:</span>
                  <input style={{fontFamily:"Krona One, sans-serif"}} type="text" onChange={(event)=>{setAddress(event.target.value)}}/>
                  {!exaddress?(<span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"white", paddingTop:"5px"}}>*Required</span>):(<></>)}
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

                

                
                
        {( useremail.length>0 && !validator.validate(useremail)) || !phno|| phno.length<10 ||(!userAge || userAge<0 || userAge>120) ||!fullName || (exaddress=="" || (patientSpo2>100||patientSpo2<0))?(<><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px", color:"white", paddingTop:"10px", marginLeft:"30%"}}>* Fill all the required fields</span></>):(<div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center"}}>
                <button className="buttn1" style={{margin:"20px"}} onClick={()=>{setConfirmDetailsModalOpen(true)}}variant="outline-success" >Donate Now</button>
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
          



                </div>

            </div>
            
            
            <div className="search" >
            <span style={{fontFamily:"Krona One, sans-serif",margin:"20px"}}>Search by location</span>
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
                            {districts && districts.districts && districts.districts.map((elem)=> <Dropdown.Item onClick={()=>{setDist_id(elem["district_id"]); setSelectedDistrict(elem["district_name"]);  getOxygenDonors(elem["district_id"]); setDispCompOpen(!oxygenDonors?"none":"flex");}}>{elem["district_name"]}</Dropdown.Item>)}
                        </Dropdown.Menu>
                      </Dropdown>
                    )}
                    {oxygenDonors.loading ||(!oxygenDonors && !oxygenDonors.oxygenDonors) ?(<Lottie 
                            options={animOptions}
                            height={400}
                            width={400}
                        />):(<div>{oxygenDonors.error?(<Lottie options={errAnimOptions} height={400} width={400}/>):(<><ResultsComponent inputList={oxygenDonors.oxygenDonors} visibleResultComp={dispResultCompOpen}/></>)}</div>)}
                   {/* {!oxygenDonors && !oxygenDonors.oxygenDonors ? (<></>):(<div><ResultsComponent inputList={oxygenDonors.oxygenDonors} visibleResultComp={dispResultCompOpen}/></div>)} */}
                        
            </div>
        </div>

        <Modal isOpen={confirmDetailsModalOpen} contentLabel="EXAMPLE MODAL">
                  <div className="otp_modal">
                    <div className="otp_modal_header">
                    <div className="otp_modal_header_text">
                    <h1  style={{fontFamily:"Krona One, sans-serif",justifyContent:"center"}}>CONFIRM REQUEST DETAILS</h1>
                    </div>
                    <img className="otp_modal_close_icon" src='close-icon.png' alt="" onClick={()=>{setConfirmDetailsModalOpen(false)}}/>
                    </div>

                    <div className="confirmDetails_modal_body">
                       <div className="dispField name">Name: {fullName}</div>
                       <div className="dispField name">Phone: {phno}</div>
                       <div className="dispField name">Address: {exaddress},{selectedDistrict},{selectedState}</div>
                       <div className="dispField name">Type of donation: Oxygen Cylinder</div>
                    </div>
                    
                  </div>
                </Modal>

            <Footer/>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        donatorRefNo: state.donatorRefNo,
        countryStates: state.countryStates,
        districts: state.districts,
        userDetails: state.donatorData,
        oxygenDonors: state.oxygenDonors
    }
    
  }
  
  const mapDispatchToProps=(dispatch)=>{
    return {
        
        getCountryStates: ()=>dispatch(fetchCountryStates()),
        getDistricts: (state_id)=>dispatch(fetchDistricts(state_id)),
        getOxygenDonors: (district_id)=>dispatch(fetchOxygenDonors(district_id))
  
    }
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(SupportOxygen1)
