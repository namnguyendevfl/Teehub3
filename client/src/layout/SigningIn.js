import React, { useState, useEffect } from "react";
import Popups from "../popups/popups";
import Login from "../accounts/Login";

export default function SigningIn(props) {
    const {
        users, 
        setFound, 
        found, 
        userLoggingIn,
        setUserLoggingIn,
        count, 
        setCount,
        userId,
        displayLoginPopup,
        setDisplayLoginPopup,
        displayCreateAcc,
        setDisplayCreateAcc,
    } = props
 
    return( !userId && !found &&
        <>
        {/* <Errors /> */}
        <div>
         <Login 
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
            {/* <div className = "popup-background w-100"></div>
                <div className = "popup"> */}
        {(displayCreateAcc || displayLoginPopup) && 
            <Popups
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
        }
        </div>
        </>
    )
}