import "./Login.css"
import React from "react";
import AccLogin from "./AccLogin";
import ComplementaryLogin from "./ComplementaryLogin";
import { Centralize } from "../utils/styles/centralize";

export default function Login(props) {
    const {
        users,
        setFound,
        found,
        userLoggingIn,
        setUserLoggingIn,
        count,
        setCount,
        userId,
        displayCreateAcc,
        setDisplayCreateAcc,
        displayLoginPopup,
        setDisplayLoginPopup
    } = props
    const { bgStyle, elementStyle,offsetElementStyle} = Centralize(530,49,700 ,50)
    return ( (!displayLoginPopup && !displayCreateAcc) &&
        <div className = "loginBg w-100" style = {bgStyle} >
            <div className = "loginBox" style = {elementStyle}>
                <div className = "loginBoxTop d-flex justify-content-center align-items-center" >
                    <h2 className = "text-center"> Teehub </h2>
                </div>
                <div className = "loginBoxMiddle row mx-2">
                    <div className = "col-6 m-0 p-0 position-relative">
                        <ComplementaryLogin 
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
                    <div className = "col-6 m-0 p-0">
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
                </div>
                <div className ="loginBoxBottom w-100">
                </div>
            </div>
            <div style ={offsetElementStyle}></div>
        </div>
    )
}