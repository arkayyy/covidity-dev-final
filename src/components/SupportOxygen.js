
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import Header from './Header'
import './styles/DonateOxygen.css'
import BackdropFilter from 'react-backdrop-filter'
import GlassCard from './glasscard';
import { Button } from 'react-bootstrap';
import {Dropdown} from 'react-bootstrap';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {fetchCountryStates,fetchDistricts} from '../redux/index'
import {connect} from 'react-redux'
import {fetchOxygenDonors} from '../redux/index'

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




function DonateOxygen({countryStates,fetchCountryStates, districts, fetchDistricts,getOxygenDonors,oxygenDonors}) {


    const [droprdownOpen, setDropdownOpen]=useState(false)
    const [optvalue,set_optvalue]=useState(null)

    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [state_id,setState_id]=useState(0)
    const [selectedState, setSelectedState]=useState("none")
    const [selectedDistrict,setSelectedDistrict]=useState("none")
    const [donorListOpen,setDonorListOpen]=useState(false)
  
    

    const occupations_list=[{key:'health',occus:["asdasd","wdfwfwe"]},{key:'health',occus:["asdasd","wdfwfwe"]},]
    const style_survey_text={ color:"white", fontFamily:"Krona One, sans-serif"}

    useEffect(()=>{
        fetchCountryStates()
    },[])
    
    return (
        <div>
            <Header/>
            
            <div className="donate__form" style={{display:"flex",flexDirection:"column"}}>
                
                <div className="ques_wrapper 1" style={{margin:"10px"}}>
                <div className="ques 1" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Name of the patient:</span>
                    <input style={{}}/>
                </div>

                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Age:</span>
                    <input style={{}}/>
                </div>

                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Contact Number:</span>
                    <input style={{}}/>
                </div>

                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Address:</span>
                    <input style={{}}/>
                </div>

                

                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Patient's SpO2 level:</span>
                    <input style={{}}/>
                </div>

                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Patient's medical reports:</span>
                    <input type="file" style={{}}/>
                </div>
                

                
                

                <button className="buttn1" style={{margin:"20px", flexDirection:"column", display:"flex", marginLeft:"100px"}} variant="outline-success" >Get Support</button>{' '}
                

                </div>

            </div>
            
            
            <div className="search">
            <span style={{fontFamily:"Krona One, sans-serif",margin:"20px"}}>Search by location</span>
             
             
             
             
            <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic" style={{fontFamily:"Krona One,sans-serif"}}>
                    {selectedState == "none" ? (
                      <>Select State</>
                    ) : (
                      <>{selectedState}</>
                    )}
                  </Dropdown.Toggle>

                  <Dropdown.Menu id="states_dropdown" style={{fontFamily:"Krona One,sans-serif"}}>
                    {countryStates &&
                      countryStates.countryStates &&
                      countryStates.countryStates.map((stateName) => (
                        <Dropdown.Item
                         
                          onClick={() => {
                            setState_id(stateName["state_id"]);
                            setSelectedState(stateName["state_name"]);
                            fetchDistricts(stateName["state_id"]);
                            setSelectedDistrict("none")
                          }}
                        >
                          {stateName["state_name"]}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>

                {selectedState=="none"?(<></>):(
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{fontFamily:"Krona One,sans-serif"}}>
                        {selectedDistrict=="none"?(<span className="dropdown_text">Select District</span>):(<span style={{fontFamily:"Krona One,sans-serif"}}>{selectedDistrict}</span>)}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{fontFamily:"Krona One,sans-serif"}}>
                      {districts && districts.districts && districts.districts.map((elem)=><Dropdown.Item onClick={()=>{setSelectedDistrict(elem["district_name"]); setDonorListOpen(true); getOxygenDonors(elem["district_id"]);}}>{elem["district_name"]}</Dropdown.Item>)}
                    </Dropdown.Menu>
                  </Dropdown>
                )}

                {oxygenDonors && oxygenDonors.oxygenDonors && oxygenDonors.oxygenDonors.map((elem)=><h1 style={{margin:"20px", flexDirection:"column", display:"flex"}}>{elem.name},{elem.contactno}</h1>)}

                




            </div>

        </div>
    )
}


const mapStateToProps=(state)=>{
  return {
  countryStates: state.countryStates,
  districts: state.districts,
  oxygenDonors: state.oxygenDonors
}
}

const mapDispatchToProps=(dispatch)=>{
  return{
    fetchCountryStates: ()=>dispatch(fetchCountryStates()),
    fetchDistricts: (state_id)=>dispatch(fetchDistricts(state_id)),
    getOxygenDonors:(dist_id)=>dispatch(fetchOxygenDonors(dist_id))
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(DonateOxygen)


