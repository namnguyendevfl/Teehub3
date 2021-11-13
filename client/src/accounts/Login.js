import "./Login.css"
import React from "react";
import AccLogin from "./AccLogin";
import ComplementaryLogin from "./complementaryLogin";

export default function Login() {
    return (
        <div className = "loginBg w-100" >
        <div className = "loginBox" >
        <div className = "loginBoxTop d-flex justify-content-center align-items-center" >

            <h2 className = "text-center"> Teehub </h2>
        </div>
        <div className = "loginBoxMiddle row mx-2">
 
            <div className = "col-6 m-0 p-0 position-relative">
                <ComplementaryLogin />
            </div>
            <div className = "col-6 m-0 p-0">
                <AccLogin />
            </div>
        </div>
        <div className ="loginBoxBottom w-100">
        </div>
        </div>

    </div>
    )
}