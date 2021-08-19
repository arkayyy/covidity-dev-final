import React, { useState, useEffect } from "react";
import Header from "./Header";
import { ButtonGroup,Dropdown,ToggleButton } from "react-bootstrap";
import axios from "axios";
import APIData from "./APIData";
import {
  fetchCountryStates,
  fetchDistricts,
  fetchAppointmentsByPin,
  fetchAppointmentsByDistrict,
  fetchAppointmentsByPin7Days,
} from "../redux/index";
import SessionsList from './SessionsList'


import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useSelector, connect } from "react-redux";

import "./styles/vaccination.css";
import countryStatesReducer from "../redux/countryStates/countryStatesReducer";

var states = [];

const Vaccination = ({
  countryStates,
  fetchCountryStates,
  districts,
  fetchDistricts,
  appointments,
  fetchAppointmentsByPin,
  fetchAppointmentsByDistrict,
  fetchAppointmentsByPin7Days
}) => {
  const [selectedState, setSelectedState] = useState("none");
  const [selectedDistrict, setSelectedDistrict] = useState("none");
  const [district_id,setDistrict_id]=useState(null)
  const [districtSet, setDistrictSet]=useState("no")

  const [appointmentsByPin, setAppointmentsByPin] = useState(true);
  
  const [state_id, setState_id] = useState(null);
  const [pinCode, setPinCode] = useState(null);
  const [date, setDate] = useState(new Date());
  const [dispState,setDispState]=useState('none')
  const [disabled,setDisabled]=useState(true)

  const handleChange = (selectState) => {
    setSelectedState(selectState);
  };
  const getDistricts = (stateIdNo) => {
    fetchDistricts(stateIdNo);
  };

  const handleButton=(pin)=>{
    var btnWork=document.getElementById("submit_btn_pin")
    if(pin.length>0){
      btnWork.disabled=false;

    }
    else{
      btnWork.disabled=true;
    }
  }

  const getAppointmentsByPin = (selectedDate) => {
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth()+1;
    const year=selectedDate.getFullYear();
    const dateString = day.toString()+'-'+month.toString()+'-'+year.toString()
    fetchAppointmentsByPin(pinCode,dateString)
  };

  const getAppointmentsByDistrict=(selectedDate)=>{
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth()+1;
    const year=selectedDate.getFullYear();
    const dateString = day.toString()+'-'+month.toString()+'-'+year.toString()
    fetchAppointmentsByDistrict(district_id,dateString)
  }


  const radios = [
    { name: 'Search by District', value: '1' },
    { name: 'Search by Pincode', value: '2' }
  ];
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('2');
  useEffect(() => {
    fetchCountryStates();
  }, []);

  return (
    <div className="vaccination">
      <Header />

      <div className="vaccination__header">
        <span className="vaccination__header__text">COVID-19 VACCINATION</span>
      </div>

      <div className="vaccination__body">
        <div className="vaccination__body__left">
          {/* <div className="appointment_choice_slider">
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                className="selectRadio"
                onClick={() => {
                  setAppointmentsByPin(true);
                }}
              >
                <div className="selectRadio_selector"></div>
              </div>
              <span style={{ margin: "7px" }}>Search by PINCODE</span>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                className="selectRadio"
                onClick={() => {
                  setAppointmentsByPin(false);
                }}
              ></div>
              <span style={{ margin: "7px" }}>Search by DISTRICT</span>
            </div>
          </div> */}
          <ButtonGroup toggle>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value); 
              if(radioValue==='1'){ 
                setDispState('none')
                return setAppointmentsByPin(true)
              }
              else if(radioValue==='2'){
                setDispState('none')
                return setAppointmentsByPin(false)
              }
          }}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

          <div className="appointment_input">
            {appointmentsByPin ? (
              <div className="pincode_entering_field" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                <input
                id="pin_input"
                  type="text"
                  placeholder="Enter Pincode"
                  onChange={(event) => {
                    setPinCode(event.target.value);
                    setDisabled((event.target.value).length>0?false:true)
                    
                  }}
                  style={{margin:"20px"}}
                 
                />

                {pinCode?(<Calendar onChange={setDate} value={date} />):(<></>)}

                {pinCode?(<button id="submit_btn_pin"
                disabled={disabled}
                  onClick={() => {
                    setDispState('flex');
                    getAppointmentsByPin(date);
                  }}
                  
                  style={{margin:"20px",backgroundColor:"#23374D",color:"white",fontFamily:"Krona One, sans-serif"}}
                >
                  GET APPOINTMENTS
                </button>
                ):(<></>)}
                

                {console.log("jbjb",appointments)}
              </div>
            ) : (
              <div style={{margin:"20px", display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center"}}>
               
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selectedState == "none" ? (
                      <>Select State</>
                    ) : (
                      <>{selectedState}</>
                    )}
                  </Dropdown.Toggle>

                  <Dropdown.Menu id="states_dropdown">
                    {countryStates &&
                      countryStates.countryStates &&
                      countryStates.countryStates.map((stateName) => (
                        <Dropdown.Item
                      
                          onClick={() => {
                            setState_id(stateName["state_id"]);
                            handleChange(stateName["state_name"]);
                            fetchDistricts(stateName["state_id"]);
                          }}
                        >
                          {stateName["state_name"]}
                        </Dropdown.Item>
                      ))}
                  </Dropdown.Menu>
                </Dropdown>
                {selectedState == "none" ? (
                  <></>
                ) : (
                  <div style={{margin:"20px",display:"flex", flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    {/* {()=>getDistricts(state_id)} */}
                    {console.log(`FROM vaccination.js: ${districts}`)}
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {selectedDistrict == "none" ? (
                          <>Select District</>
                        ) : (
                          <>{selectedDistrict}</>
                        )}
                      </Dropdown.Toggle>
                      <Dropdown.Menu id="districts_dropdown">
                        {districts &&
                          districts.districts &&
                          districts.districts.map((elem) => (
                            <Dropdown.Item
                              onClick={() => {setDistrictSet("yes");
                                setSelectedDistrict(elem["district_name"]);
                                setDistrict_id(elem["district_id"])
                              }}
                            >
                              {elem["district_name"]}
                            </Dropdown.Item>
                          ))}
                      </Dropdown.Menu>
                    </Dropdown>

                    {districtSet=="no"? (<></>): (<div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",margin:"20px"}}><Calendar onChange={setDate} value={date} /><button onClick={()=>{setDispState('flex'); getAppointmentsByDistrict(date)}} style={{margin:"20px",backgroundColor:"#23374D",color:"white",fontFamily:"Krona One, sans-serif"}}>GET APPOINTMENTS</button> {console.log("jbjb",appointments)}</div>)}
                    
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="vaccination__body__right">
          <img className="vaccine_img" src="vaccine.gif" alt="" />
        </div>
      </div>

      {appointments.appointments?(<SessionsList dispState={dispState} appointments={appointments}/>):(<></>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.districts);
  return {
    countryStates: state.countryStates,
    districts: state.districts,
    appointments: state.appointments
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountryStates: () => dispatch(fetchCountryStates()),
    fetchDistricts: (state_id) => dispatch(fetchDistricts(state_id)),
    fetchAppointmentsByPin: (pin_number, date) =>
      dispatch(fetchAppointmentsByPin(pin_number, date)),
    fetchAppointmentsByDistrict: (district_id, date)=>dispatch(fetchAppointmentsByDistrict(district_id,date)),
    fetchAppointmentsByPin7Days: (pin_number,date)=> dispatch(fetchAppointmentsByPin7Days(pin_number,date))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Vaccination);
