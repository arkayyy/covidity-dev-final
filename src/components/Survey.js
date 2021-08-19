import React, { useState } from 'react'
import Header from './Header'
import './styles/survey.css'
import BackdropFilter from 'react-backdrop-filter'
import GlassCard from './glasscard';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Iframe from 'react-iframe'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

function Survey() {

    const [droprdownOpen, setDropdownOpen]=useState(false)
    const [optvalue,set_optvalue]=useState(null)

    const classes = useStyles();
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const occupations_list=[{key:'health',occus:["asdasd","wdfwfwe"]},{key:'health',occus:["asdasd","wdfwfwe"]},]
    const style_survey_text={ color:"white", fontFamily:"Krona One, sans-serif"}
    return (
        <div style={{height:"100vh",overflowY:"hidden"}}>
            <Header/>
            
            <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSe3yzR76qhfOZxAD6ny9u6Spaa_mFcwKCbXVRVSOqOmxNtGaw/viewform?usp=sf_link" width="100%" height="100%" display="initial"/>
            {/* <div className="survey__form" style={{display:"flex",flexDirection:"column"}}>
                
                <div className="ques_wrapper 1" style={{margin:"10px"}}>
                <div className="ques 1" style={{margin:"20px"}}>
                    <span style={style_survey_text}>Your Name:</span>
                    <input style={{}}/>
                </div>

                <div className="ques 2" style={{margin:"20px"}}>
                    <span style={style_survey_text}>Your Age:</span>
                    <input style={{}}/>
                </div>

                <div className="ques 3" style={{margin:"20px", display:"flex", flexDirection:"column"}}>
                    <span style={style_survey_text}>Are you currently employed?</span>
                    <div style={{marginTop:"10px"}}><input type="radio" id="male" name="gender" value="male"/><label for="male" style={{marginRight:"10px"}}><span style={style_survey_text}>YES</span></label>
                    <input type="radio" id="male" name="gender" value="male"/><label for="male" style={{}}><span style={style_survey_text}>NO</span></label></div>
                    
                </div>

                <div className="ques 4" style={{margin:"20px", display:"flex", flexDirection:"column"}}>
                    <span style={style_survey_text}>Have you had Corona in the past?</span>
                    <div style={{marginTop:"10px"}}><input type="radio" id="male" name="gender" value="male"/><label for="male" style={{marginRight:"10px"}}><span style={style_survey_text}>YES</span></label>
                    <input type="radio" id="male" name="gender" value="male"/><label for="male" style={{}}><span style={style_survey_text}>NO</span></label></div>
                    
                </div>

                <div className="ques 2" style={{margin:"20px", display:"flex", flexDirection:"column"}}>
                    <span style={style_survey_text}>Feedback:</span>
                    <input style={{}}/>
                </div>
                

                <div className="ques 5" style={{margin:"20px", display:"flex", flexDirection:"column", position:"relative"}}>
                <span style={style_survey_text}>Occupation</span>
                <div className="occupations__title" onClick={()=>{setDropdownOpen(!droprdownOpen)}}>
                        
                        <FormControl className={classes.formControl} style={{marginTop:"-4%"}}>
                                    <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                   
                                    <a style={{ fontFamily:"Krona One, sans-serif",marginLeft:"10px"}} onClick={()=>{setAge("aa")}} >HEALTHCARE</a>
                                    <MenuItem value="chiropractor"><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>Chiropractor</span></MenuItem>
                                    <MenuItem value="dentist"><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>Dentist</span></MenuItem>
                                    <MenuItem value="dietitian"><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>Dietitian or Nutritionist</span></MenuItem>
                                    <MenuItem value="optometrist"><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>Optometrist</span></MenuItem>
                                    <MenuItem value="pharmacist"><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>Pharmacist</span></MenuItem>
                                    <MenuItem value="physician"><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>Physician</span></MenuItem>
                                    <MenuItem value="pediatrist"><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>Pediatrist</span></MenuItem>
                                    <MenuItem value="nurse"><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>Registered Nurse</span></MenuItem>
                                    <MenuItem value="therapist"><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>Therapist</span></MenuItem>
                                    <MenuItem value="veterinarian"><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>Veterinarian</span></MenuItem>
                                    <MenuItem value="technologist"><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>Health Technologist or Technician</span></MenuItem>
                                    <MenuItem value="others"><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>Other Healthcare Practitioners and Technical Occupation</span></MenuItem>

                                    <span style={{ fontFamily:"Krona One, sans-serif",marginLeft:"10px"}}>HEALTHCARE</span>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>
                                    <MenuItem value=""><span style={{fontFamily:"Krona One, sans-serif",fontSize:"11px"}}>CardioLogist</span></MenuItem>

                                    </Select>
                                    <FormHelperText></FormHelperText>
                                </FormControl>
                </div>

                </div>

                

        <div style={{display:"flex", flexDirection:"column", width:"30%", marginLeft:"20px"}}>
                
  <select className="form-control dropdown" id="occupation" name="occupation" style={{marginTop:"10px"}}>
    <option value="" selected="selected" disabled="disabled">-- select one --</option>
    <optgroup label="Healthcare Practitioners and Technical Occupations:">
      <option value="Chi" onClick={(opt)=>{console.log(opt)}}>Chiropractor</option>
      <option value="2">Dentist</option>
      <option value="3">Dietitian or Nutritionist</option>
      <option value="4">Optometrist</option>
      <option value="5">Pharmacist</option>
      <option value="6">Physician</option>
      <option value="7">Physician Assistant</option>
      <option value="8">Podiatrist</option>
      <option value="9">Registered Nurse</option>
      <option value="10">Therapist</option>
      <option value="11">Veterinarian</option>
      <option value="12">Health Technologist or Technician</option>
      <option value="13">Other Healthcare Practitioners and Technical Occupation</option>
    </optgroup>
    <optgroup label="Healthcare Support Occupations:">
      <option value="14">-  Nursing, Psychiatric, or Home Health Aide</option>
      <option value="15">-  Occupational and Physical Therapist Assistant or Aide</option>
      <option value="16">-  Other Healthcare Support Occupation</option>
    </optgroup>
    <optgroup label="Business, Executive, Management, and Financial Occupations:">
      <option value="17">-  Chief Executive</option>
      <option value="18">-  General and Operations Manager</option>
      <option value="19">-  Advertising, Marketing, Promotions, Public Relations, and Sales Manager</option>
      <option value="20">-  Operations Specialties Manager (e.g., IT or HR Manager)</option>
      <option value="21">-  Construction Manager</option>
      <option value="22">-  Engineering Manager</option>
      <option value="23">-  Accountant, Auditor</option>
      <option value="24">-  Business Operations or Financial Specialist</option>
      <option value="25">-  Business Owner</option>
      <option value="26">-  Other Business, Executive, Management, Financial Occupation</option>
    </optgroup>
    <optgroup label="Architecture and Engineering Occupations:">
      <option value="27">-  Architect, Surveyor, or Cartographer</option>
      <option value="28">-  Engineer</option>
      <option value="29">-  Other Architecture and Engineering Occupation</option>
    </optgroup>
    <optgroup label="Education, Training, and Library Occupations:">
      <option value="30">-  Postsecondary Teacher (e.g., College Professor)</option>
      <option value="31">-  Primary, Secondary, or Special Education School Teacher</option>
      <option value="32">-  Other Teacher or Instructor</option>
      <option value="33">-  Other Education, Training, and Library Occupation</option>
    </optgroup>
    <optgroup label="Other Professional Occupations:">
      <option value="34">-  Arts, Design, Entertainment, Sports, and Media Occupations</option>
      <option value="35">-  Computer Specialist, Mathematical Science</option>
      <option value="36">-  Counselor, Social Worker, or Other Community and Social Service Specialist</option>
      <option value="37">-  Lawyer, Judge</option>
      <option value="38">-  Life Scientist (e.g., Animal, Food, Soil, or Biological Scientist, Zoologist)</option>
      <option value="39">-  Physical Scientist (e.g., Astronomer, Physicist, Chemist, Hydrologist)</option>
      <option value="40">-  Religious Worker (e.g., Clergy, Director of Religious Activities or Education)</option>
      <option value="41">-  Social Scientist and Related Worker</option>
      <option value="42">-  Other Professional Occupation</option>
    </optgroup>
    <optgroup label="Office and Administrative Support Occupations:">
      <option value="43">-  Supervisor of Administrative Support Workers</option>
      <option value="44">-  Financial Clerk</option>
      <option value="45">-  Secretary or Administrative Assistant</option>
      <option value="46">-  Material Recording, Scheduling, and Dispatching Worker</option>
      <option value="47">-  Other Office and Administrative Support Occupation</option>
    </optgroup>
    <optgroup label="Services Occupations:">
      <option value="48">-  Protective Service (e.g., Fire Fighting, Police Officer, Correctional Officer)</option>
      <option value="49">-  Chef or Head Cook</option>
      <option value="50">-  Cook or Food Preparation Worker</option>
      <option value="51">-  Food and Beverage Serving Worker (e.g., Bartender, Waiter, Waitress)</option>
      <option value="52">-  Building and Grounds Cleaning and Maintenance</option>
      <option value="53">-  Personal Care and Service (e.g., Hairdresser, Flight Attendant, Concierge)</option>
      <option value="54">-  Sales Supervisor, Retail Sales</option>
      <option value="55">-  Retail Sales Worker</option>
      <option value="56">-  Insurance Sales Agent</option>
      <option value="57">-  Sales Representative</option>
      <option value="58">-  Real Estate Sales Agent</option>
      <option value="59">-  Other Services Occupation</option>
    </optgroup>
    <optgroup label="Agriculture, Maintenance, Repair, and Skilled Crafts Occupations:">
      <option value="60">-  Construction and Extraction (e.g., Construction Laborer, Electrician)</option>
      <option value="61">-  Farming, Fishing, and Forestry</option>
      <option value="62">-  Installation, Maintenance, and Repair</option>
      <option value="63">-  Production Occupations</option>
      <option value="64">-  Other Agriculture, Maintenance, Repair, and Skilled Crafts Occupation</option>
    </optgroup>
    <optgroup label="Transportation Occupations:">
      <option value="65">-  Aircraft Pilot or Flight Engineer</option>
      <option value="66">-  Motor Vehicle Operator (e.g., Ambulance, Bus, Taxi, or Truck Driver)</option>
      <option value="67">-  Other Transportation Occupation</option>
    </optgroup>
    <optgroup label="Other Occupations:">
      <option value="68">-  Military</option>
      <option value="69">-  Homemaker</option>
      <option value="70">-  Other Occupation</option>
      <option value="71">-  Don't Know</option>
      <option value="72">-  Not Applicable</option>
    </optgroup>
  </select>
  </div>

                </div>

            </div> */}
            
            
        </div>
    )
}

export default Survey
