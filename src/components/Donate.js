import React from 'react'
import './styles/donate.css'
import './styles/fonts.css'
import Header from './Header'
import Tilt from 'react-tilt'

function Donate() {
    return (
        <div>
            <Header/>

            <div className="donate__body">

            <div className="donate__heading">
            <span className="donate__heading__text" style={{fontFamily:""}}>What do you want to donate?</span>
            </div>

        <div style={{alignItems:"center",justifyContent:"center",position:"relative"}}>
            <div className="donate__cascade">

            <Tilt className="Tilt" options={{ max : 25 }}  >
                <a href="donate_oxygen" style={{textDecoration:"none"}}>
                <div className="donate__card 1">
                    <span className="donate__card__text">Oxygen</span>
                </div>
                </a>
            </Tilt>

            <Tilt className="Tilt" options={{ max : 25 }}  >
                <a href="donate_medicines" style={{textDecoration:"none"}}>
                <div className="donate__card 2">
                <span className="donate__card__text">Medicines</span>
                </div>
                </a>

                </Tilt>

                <Tilt className="Tilt" options={{ max : 25 }}  >
                    <a href="donate_blood" style={{textDecoration:"none"}}>
                <div className="donate__card 3">
                    <span className="donate__card__text">Blood/Plasma</span>
                </div>
                </a>
                </Tilt>

                <Tilt className="Tilt" options={{ max : 25 }}  >
                    <a href="donate_food" style={{textDecoration:"none"}}>
                <div className="donate__card 4">
                    <span className="donate__card__text">Food</span>
                </div>
                </a>
                </Tilt>

                <Tilt className="Tilt" options={{ max : 25 }}  >
                    <a href="donate_funds" style={{textDecoration:"none"}}>
                <div className="donate__card 5">
                    <span className="donate__card__text">Funds</span>
                </div>
                </a>
                </Tilt>

                <Tilt className="Tilt" options={{ max : 25 }}  >
                    <a href="donate_gadgets" style={{textDecoration:"none"}}>
                <div className="donate__card 6">
                    <span className="donate__card__text">Gadgets</span>
                </div>
                </a>
                </Tilt>

                <Tilt className="Tilt" options={{ max : 25 }}  >
                    <a href="donate_resources" style={{textDecoration:"none"}}>
                <div className="donate__card 7">
                <span className="donate__card__text">Resources</span>
                </div>
                </a>
                </Tilt>

                <Tilt className="Tilt" options={{ max : 25 }}  >
                <a href="donate_others" style={{textDecoration:"none"}}>
                <div className="donate__card 8">
                <span className="donate__card__text">Others</span>
                </div>
                </a>
                </Tilt>
            </div>

            <div style={{position:"relative"}}><img className="donate__image"src="donate.gif" alt=""/></div>
            </div>
            </div>
        </div>
    )
}

export default Donate
