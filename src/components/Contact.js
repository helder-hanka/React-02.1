import React from 'react'
import "./Contact.css"
const Contact = () => {
    return (
        <div className="contact">
            <div className ="clearfix">
                <img src="https://randomuser.me/api/portraits/women/85.jpg" alt="avatar"/>
                <div className="about">
                    <div className="message">Salut je m'appelle</div>
                    <div className="name">Kim Sanchez</div>
                </div>
                <i className="fa fa-star"></i>
            </div>
        </div>
    )
}

export default Contact