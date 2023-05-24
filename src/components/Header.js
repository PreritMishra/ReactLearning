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
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-blue-50">
            <Title />
            <div className="nav-items">
                <ul className="flex py-10">
                    <Link to="/">
                        <li className="px-2">Home</li>
                    </Link>
                    <Link to = "/about">
                        <li className="px-2">About</li>
                    </Link>
                    <Link to = "/contact">
                        <li className="px-2">Contact</li>
                    </Link> 
                    <li className="px-2">Cart</li>
                    <Link to = "/instamart">
                        <li className="px-2">Instamart</li>
                    </Link>
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