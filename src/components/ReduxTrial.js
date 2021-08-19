import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import { fetchCountryStates } from '../redux'
import countryStatesReducer from '../redux/countryStates/countryStatesReducer'

function ReduxTrial({countryStates, fetchCountryStates}) {

    useEffect(()=>{
        fetchCountryStates()
    },[])

    return countryStates.loading?(<h1>LOADING...</h1>):countryStates.error?(<h1> ERROR : {countryStates.error}</h1>): (
        <div>
        <h1> USERS:---</h1>
        <div>
            <select>
            {countryStates && countryStates.countryStates && countryStates.countryStates.map(user => <option>{user["state_name"]}</option>)}
            </select>
        </div>

        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        countryStates: state.countryStates
    }
    
}

const mapDispatchToProps=(dispatch)=>{
    return {
        fetchCountryStates: ()=>dispatch(fetchCountryStates())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ReduxTrial)
