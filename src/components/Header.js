import { useEffect, useState } from 'react';
import logo from '../utils/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {

    //Powerful local variable : useState
    //Whenever the btnName will be changed using setBtnName, React will re render the whole component 
    const [btnName, setBtnName] = useState("Login");

    //If no dependency array => useEffect is called on every render
    //If the dependency array is empty = [] => useEffect will be called on initial render(just once) when the component is rendered for the first timr
    //If dependency array is [btnName] => called everytime btnReact is updated
    useEffect(() => {

    });

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link>Cart</Link></li>
                    <button className='login' onClick={() => {
                       btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;