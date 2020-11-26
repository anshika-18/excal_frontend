import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'

export default class Navbar extends Component{
    
    render(){
    return (
        <div className="nav-side" >
    <nav className="navbar">

     <div className="logo"><img className="logo"src="https://www.educationevolving.org/sites/all/themes/eetheme/images/ee-logo-og.png"></img></div>
        <ul className="nav-links">
            <li>
                <Link to="/" className="nav-link">HOME</Link>
            </li>
            <li>
                <Link to="/society" className="nav-link">SOCIETIES</Link>
            </li>
            <li>
                <Link to="/clubs" className="nav-link">CLUBS</Link>
            </li>
            <li>
                <Link to="/about" className="nav-link">About</Link>
            </li>
            <li>
                <Link to="/contact" className="nav-link">Contact</Link>
            </li>
        </ul>
       <Link to="/signin" className="sign_in"> <button className="sign">Sign in</button></Link>
      
    </nav>

    </div>
    )}
}  