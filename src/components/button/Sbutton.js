import React from 'react'
import './sbutton.css'

function Sbutton({text, href}) {
    return (
        <div>
            <div className="button_small">
                    <span style={{color:"white"}}>{text}</span>
            </div>
        </div>
    )
}

export default Sbutton
