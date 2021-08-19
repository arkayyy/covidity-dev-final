import React, { useState } from 'react'
import axios from 'axios'
import {postDonators} from '../redux/index'
import {connect} from 'react-redux'


function MongoTrial({donatorRefNo,submitDonator}) {
    const [titlee, setTitle]=useState(null)
    const [desc,setDesc]=useState(null)

    const submit=(titleee,descc)=>{
        
        
        const payload={
            title: titlee,
            description: desc
        };

        submitDonator()
        console.log("output:", donatorRefNo.refno)

        // axios({
        //     url:'http://localhost:8080/api/save',
        //     method: 'POST',
        //     data: payload
        // })
        // .then(()=>{
        //     console.log("Entered data has been saved succesfully!")
        //     setTitle('')
        //     setDesc('')
        // })
        // .catch((err)=>{
        //     console.log("Internal server error!",err.message)
        // })
    }

    return (
        <div>
            <input type="text" placeholder="Hii bc" onChange={(event)=>{setTitle(event.target.value)}} value={titlee}/>
            <textarea rows="10" cols="30" placeholder="say something bc" onChange={(event)=>{setDesc(event.target.value)}} value={desc}></textarea>
            <button onClick={()=>{submit(titlee,desc)}}>SUBMIT</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        donatorRefNo: state.donatorRefNo
    }
    
}

const mapDispatchToProps=(dispatch)=>{
    return {
        submitDonator: ()=>dispatch(postDonators())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MongoTrial)
