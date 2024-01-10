import { useState } from 'react';
import logo from '../utils/logo.png';

const Header = () => {

    //Powerful local variable : useState
    //Whenever the btnName will be changed using setBtnName, React will re render the whole component 
    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='login' onClick={() => {
                       btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;