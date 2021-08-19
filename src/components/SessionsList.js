import React,{useState} from 'react'
import {connect} from 'react-redux'
import { useHistory } from 'react-router'
import {setCoords} from '../redux/index'
import { ButtonGroup,Dropdown,ToggleButton } from "react-bootstrap";
//import './styles/sessionsList.css'

function SessionsList(state) {
    const radios = [
        { name: 'Search by District', value: '1' },
        { name: 'Search by Pincode', value: '2' }
      ];
    const [radioValue, setRadioValue] = useState('2');
    let history=useHistory();
    return (<div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <h2 style={{display:`${state.dispState}`,fontFamily:"Krona One,sans-serif",fontWeight:"600",marginTop:"30px"}}>AVAILABLE SESSIONS</h2>
        <div className="display_area" style={{display:`${state.dispState}`,boxShadow:"inset 5px 5px 5px rgba(0,0,0,0.2),inset -5px -5px 15px rgba(255,255,255,0.1),5px 5px 15px rgba(0,0,0,0.3),-5px -5px 15px rgba(255,255,255,0.1)",height:"400px",width:"70%",margin:"30px",borderRadius:"15px", flexDirection:"column",alignItems:"center", overflowY:"scroll"}}>
            <div style={{marginTop:"0px",display:"flex",flexDirection:"column", minWidth:"100%"}}>
            {state.appointments && state.appointments.appointments && state.appointments.appointments.map((elem)=>{ return (
            <div className="everyAppointment" style={{minWidth:"90%",margin:"10px",border:"1px solid black",borderRadius:"10px", display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between"}}>
                <div style={{display:"flex",flexDirection:"column",flex:"0.6",flexWrap:"wrap"}}>
                    <p style={{fontFamily:"Krona One,sans-serif", margin:"10px"}}>{elem.name}</p>
                    <p style={{fontFamily:"Krona One,sans-serif", margin:"10px"}}>Address: {elem.address}</p>
                    <p style={{fontFamily:"Krona One,sans-serif", margin:"10px"}}>Available Capacity: DOSE 1 - <span style={{color:"red"}}>{elem.available_capacity_dose1}</span> DOSE 2 - <span style={{color:"red"}}>{elem.available_capacity_dose2}</span></p>
                    <p style={{fontFamily:"Krona One,sans-serif", margin:"10px",marginTop:"10px",marginBottom:"0px"}}>AVAILABLE SLOTS:</p>
                    <div style={{display:"flex",flexDirection:"row", flexWrap:"wrap", maxWidth:"60%"}}>
                        <div style={{margin:"20px"}}>
                        <ButtonGroup toggle>
        {elem.slots.map((radio) => (
          <ToggleButton
            key={radio}
            type="radio"
            variant="secondary"
            name="radio"
            value={radio}
            checked={radioValue === radio}
            onChange={(e) => {
              setRadioValue(e.currentTarget.value); 
          }}
          >
            {radio}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </div>
                    </div>
                </div>
                
                <div style={{float:"right",right:"0%",flex:"0.4",height:"100%",display:"flex",justifyContent:"center"}}>
                <button style={{height:"40px",margin:"10px"}} onClick={()=>{state.setCoordinates(elem.lat,elem.long); history.push("/maps")}}>GET DIRECTIONS</button>
                <button style={{height:"40px",margin:"10px"}} onClick={()=>{window.location.replace('https://www.cowin.gov.in/home')}}>BOOK SLOT</button>
                </div>
                
            </div>
            )}
            
                
            )}
            </div>
        </div>

        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        coordinates: state.coordinates
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        setCoordinates: (lat,long)=>dispatch(setCoords(lat,long))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SessionsList)
