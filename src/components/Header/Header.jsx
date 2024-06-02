import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <div className='container'>
                <div className='box'>
                <div className='label'>
                    <Link to="/" className='title'><span>Darlen</span></Link>
                </div>

                <div className='menu'>
                    <Link to="/Specialists" className='Link'>Specialists</Link>
                    <Link to="/Reviews" className='Link'>Reviews</Link>
                   <div className='button'>
                    <Link to="/Registr"><button className='btn'>Registration</button></Link>
                   </div> 
                </div>
                </div>
            </div>
        );
    }
}

export default Header;