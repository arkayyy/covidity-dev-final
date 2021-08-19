import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Header from './Header'
import './styles/DonateFood.css'
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




function DonateFood() {

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
        <div>
            <Header/>
            
            <div className="food__form" style={{display:"flex",flexDirection:"column"}}>
                
                <div className="ques_wrapper 1" style={{margin:"10px"}}>
                <div className="ques 1" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Your Name:</span>
                    <input style={{}}/>
                </div>

                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Contact Number:</span>
                    <input style={{}}/>
                </div>

                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Email:</span>
                    <input style={{}}/>
                </div>

                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>Address:</span>
                    <input style={{}}/>
                </div>

                <div className="ques 2" style={{margin:"20px", flexDirection:"column", display:"flex"}}>
                    <span style={style_survey_text}>List down the items(with quantity) you wish to donate:</span>
                    <input style={{}}/>
                </div>

                <div className="ques 2" style={{margin:"20px"}}>
                    <span style={style_survey_text}>Pick-up Time:</span>
                    <input style={{}}/>
                </div>



                <div className="ques 2" style={{margin:"20px"}}>
                    <span style={style_survey_text}>Pick-up Date:</span>
                    <input style={{}}/>
                </div>

                

                
                

                <button className="buttn1" style={{margin:"20px", flexDirection:"column", display:"flex", marginLeft:"240px"}} variant="outline-success" >Donate Now</button>{' '}
                

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
    )
}

export default DonateFood;

