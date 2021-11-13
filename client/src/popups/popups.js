import React from "react";
import "./popups.css"
import SignupPopup from "../accounts/AccSignupPopup";
import { CentralizeElement} from "../utils/styles/dimensions";
import AccLogin from "../accounts/AccLogin";

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
    console.log(displayLoginPopup)
    const centralize = (()=> {
        if (displayCreateAcc) return CentralizeElement(530,49,500,50)
        if (displayLoginPopup) return CentralizeElement(380,50,500,50)
    })()
    

    return ( 
    <>
        <>
        <div className = "popup-offsetBackground w-100"></div>
        <div className = "popup-background"
                style = {centralize.bgStyle}
        >
        <div 
                style = {centralize.elementStyle}
            >
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
        <div 
        style ={{
            height:`${centralize.offsetElementHeight}px`, 
            width: `${centralize.offsetElementWidth}px`
        }}></div>
        </div>
        </>
    </>
    )
}