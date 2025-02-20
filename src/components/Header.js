
import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import  useOnlineStatus  from "../utils/useOnlineStatus";

const Header = ()=>{
  const  [btnName, setBtnName] = useState("login");
  const OnlineStatus = useOnlineStatus();
    return(
        <div className= "flex justify-between bg-emerald-200 shadow-lg mb-4" >
           <div className="logo-container">
            <img className="w-48" src = {LOGO_URL}/> 
            </div>
           <div className="flex items-center">
            <ul className= "flex p-4 m-4 list-none text-lg">
                <li className="px-4">Online Status :{OnlineStatus ? "✅" :"❌"}</li>
                <li className="px-4 ">
                  <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                  <Link to="/Grocery">Grocery</Link>
                </li>
                <li className="px-4">
                   <Link to="/about">About Us</Link>
                </li>
                <li className="px-4">
                   <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-4">Cart</li>
                <button
                  className="btnName"
                  onClick={()=>{
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                  }}
                >
                    {btnName}
                </button>
            </ul>
          </div>
        </div>
    )
};

export default Header;