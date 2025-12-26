import {LOGO_URL} from "../utils/Constants";
import {useState} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header=()=>{
    const [btn,setbtn]=useState("Login");

    const onlineStatus = useOnlineStatus();
    return(
        <div className="flex justify-between items-center bg-white shadow-sm px-8 py-4 sticky top-0 z-50 border-b border-gray-100">
            <div className="logo-container">
                <img className="w-16 h-16" src={LOGO_URL} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul className="flex items-center gap-10 text-sm font-medium text-gray-700">
                    <li className="flex items-center gap-2 text-gray-500">
                        <span className="w-2 h-2 rounded-full" style={{backgroundColor: onlineStatus ? '#48c479' : '#ef4444'}}></span>
                        <span>{onlineStatus ? "Online" : "Offline"}</span>
                    </li>
                    <li className="hover:text-[#fc8019] transition-colors cursor-pointer">
                        <Link to="/">Home</Link>
                    </li>  
                    <li className="hover:text-[#fc8019] transition-colors cursor-pointer">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="hover:text-[#fc8019] transition-colors cursor-pointer">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="hover:text-[#fc8019] transition-colors cursor-pointer">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="hover:text-[#fc8019] transition-colors cursor-pointer">
                        🛒 Cart
                    </li>
                    <button 
                        className="px-6 py-2 bg-[#fc8019] text-white font-semibold rounded hover:bg-[#e87316] transition-colors" 
                        onClick={() => setbtn(btn === "Login" ? "Logout" : "Login")}
                    >
                        {btn}
                    </button>
                </ul>
            </div>
        </div>
    )
}
export default Header;