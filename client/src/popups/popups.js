import React from "react";
import Login from "../accounts/AccLoginPopup";
import Signup from "../accounts/AccSignupPopup";
export default function Popups() {
    let login = true;
    // login = false;
    return (
        <>
        {login
        ? <Login /> 
        : <Signup />
        }
       
      
        </>
    )
}