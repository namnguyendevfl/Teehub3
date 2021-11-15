import React from "react";
import "./popups.css"
import SignupPopup from "../accounts/AccSignupPopup";
import AccLogin from "../accounts/AccLogin";
import { Centralize } from "../utils/styles/centralize";

export default function Popups(props) {
    const {
        users,
        setFound,
        found,
        userLoggingIn ,
        setUserLoggingIn,
        count,
        setCount,
        userId,
        displayCreateAcc,
        setDisplayCreateAcc,
        displayLoginPopup,
        setDisplayLoginPopup

    } = props
    const { bgStyle, elementStyle,offsetElementStyle} = (()=> {
        if (displayCreateAcc) return Centralize(530,49,500,50)
        if (displayLoginPopup) return Centralize(380,50,500,50)
    })()
    return ( 
    <>
        <>
        <div className = "popup-offsetBackground w-100"></div>
        <div className = "popup-background" style = {bgStyle} >
            <div style = {elementStyle}>
                <SignupPopup 
                    users = {users} 
                    setFound ={setFound} 
                    found = {found} 
                    userLoggingIn = {userLoggingIn}
                    setUserLoggingIn = {setUserLoggingIn}
                    count = {count}
                    setCount = {setCount}
                    userId = {userId}
                    displayCreateAcc = {displayCreateAcc}
                    setDisplayCreateAcc = {setDisplayCreateAcc}
                    displayLoginPopup = {displayLoginPopup}
                    setDisplayLoginPopup = {setDisplayLoginPopup}
                />
                <AccLogin
                    users = {users} 
                    setFound ={setFound} 
                    found = {found} 
                    userLoggingIn = {userLoggingIn}
                    setUserLoggingIn = {setUserLoggingIn}
                    count = {count}
                    setCount = {setCount}
                    userId = {userId}
                    displayCreateAcc = {displayCreateAcc}
                    setDisplayCreateAcc = {setDisplayCreateAcc}
                    displayLoginPopup = {displayLoginPopup}
                    setDisplayLoginPopup = {setDisplayLoginPopup}    
                />
            </div>
            <div style ={offsetElementStyle}></div>
        </div>
        </>
    </>
    )
}