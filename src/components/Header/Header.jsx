import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./Header.css"

class Header extends Component {
    render() {
        return (
            <div className='container'>
                <div className='box'>
                {/* <div className='label'> */}
                    
                {/* </div> */}

                <div className='menu'>
                <Link to="/" className='title'><span>Darlen</span></Link>
                    <Link to="/Specialists" className='link'>Specialists</Link>
                    <Link to="/Reviews" className='link'>Reviews</Link>
                   <div className='button'>
                    <Link to="/Registr"><button className='btn'>Registration</button></Link>
                   </div> 
                </div>
                </div>
            </div>
            // Registration
        );
    }
}

export default Header;