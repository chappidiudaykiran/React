import {LOGO_URL} from "../utils/Constants";
import {useState,useEffect} from "react";
const Header=()=>{
    const [btn,setbtn]=useState("Login");

    useEffect(()=>{
        console.log("Header Mounted");
    },[]);

    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>  
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={() => setbtn(btn === "Login" ? "Logout" : "Login")}>{btn}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;