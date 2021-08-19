import React from 'react'
import Iframe from 'react-iframe'
import Header from './Header'

function CowinScreen() {
    return (
        <div style={{height:"100vh"}}>
            <Header/>
            <Iframe url="https://www.cowin.gov.in/home" width="100%" height="100%" display="initial"/>
        </div>
    )
}

export default CowinScreen
