import React, { useEffect, useState } from 'react'
import './styles/resultsComponent.css'

function ResultsComponent({inputList,visibleResultComp}) {
    //const [visibleResultComp,setVisible]=useState("none")
    // const setVisibleCall=()=>{
    //     setVisible("visible")
    // }
    //console.log("NANA",visibleResultComp)
    return (
        <div id="resultsComp" style={{height:"auto",maxHeight:"500px", backgroundColor:"white",overflow:"scroll",overflowX:"hidden",display:`${visibleResultComp}`,width:"500px",marginTop:"30px"}}>
            
            <div className="userDivWrapper" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
            {!inputList?(<h1>LOADING...</h1>):(<></>)}
            {inputList && inputList.map((elem)=>{
                return(
                <div className="userDiv" style={{height:"150px",width:"200px",backgroundColor:"grey",margin:"10px",borderRadius:"5px", display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div className="dispField name" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:"10px"}}><span style={{fontWeight:"600"}}>{elem.name}</span></div>
                    <div className="dispField name" style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}><span style={{fontWeight:"600"}}>Address:</span><span>{elem.address}</span></div>
                    <div className="dispField name" style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}><span style={{fontWeight:"600"}}>Contact:</span><span>+91-{elem.contactno}</span></div>
                </div>
                )
            }
                
            )}

           </div> 
        </div>
    )
}

export default ResultsComponent
