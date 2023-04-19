import React from 'react';
import { Link } from 'react-router-dom'
import '../header.css'
import './connexion.css'
import logo from './log.png'


export default function Connexion() {
    return (
        <nav>
            <div className='div-NavBar'>
                <div>
                    <Link to="/login" className='div-link'>Login</Link>
                </div>
                <div className="div-signin">
                    <Link to="/signin" className='div-link'><button className='div-signup'><img class='div-logo-link' src={logo}/>SignUp</button></Link>
                </div>
            </div>
        </nav>
    );
}