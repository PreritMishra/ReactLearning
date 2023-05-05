import { useState } from "react";
import Title from "./Title"
import { Link } from "react-router-dom";

const loggedInUser = () => {
    //API call to check authentication
    return false;
} 

const Header = () => {

    const [isLoggedIn, setIsLoggeddIn] = useState(true);
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to = "/about">
                        <li>About</li>
                    </Link>
                    <Link to = "/contact">
                        <li>Contact</li>
                    </Link>
                    <li>Cart</li>
                </ul>
            </div>
            {
                isLoggedIn ? (
                    <button onClick={() => setIsLoggeddIn(false)}>Logout</button>
                ) : (
                    <button onClick={() => setIsLoggeddIn(true)}>Login</button>
                )
            }
            
        </div>
    );
};

export default Header;