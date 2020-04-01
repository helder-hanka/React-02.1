import React from 'react'
import "./Contact.css"

const oneline = true;

const Contact = () => {
    return (
        <div className="Contact">
                <img className ="avatar" src="https://randomuser.me/api/portraits/women/85.jpg" alt="photo"/>
            <div>
                <div className="name">Kim Sanchez</div>
                <div className="status">
                    <div className={oneline ? 'status-online' : 'status-offline'}></div>
                    <p className="status-text">{oneline ? 'Oneline' : 'status-offline'}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact