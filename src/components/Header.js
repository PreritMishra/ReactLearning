import { useState } from "react";
import Title from "./Title"

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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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