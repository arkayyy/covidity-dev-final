import React from 'react'
import './mbutton.css'

function Mbutton(text, href) {
    return (
        <div>
            <div className="button_medium">
                    <span style={{color:"white"}}>{text}</span>
            </div>
        </div>
    )
}

export default Mbutton
