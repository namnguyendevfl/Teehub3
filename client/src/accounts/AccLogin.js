import "./AccountSignup.css"
import React, { useEffect, useState } from "react";
import { complementary } from "../utils/icons/complementary/Complementary";

import { listAccs } from "../utils/api/accountApi";
import { login } from "../utils/localStorage/accounts";
import Errors from "../errors/errors";

export default function AccLogin(props){
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
    const ids = ['userId', 'password']
    const [clickedId, setClickId] = useState()
    const handleClick = (e) => {
        setClickId(() => e.target.id)
        const box = document.querySelector(`#${e.target.id}`)
        box.style.border = "1px solid blue"
        box.style.boxShadow = "0px 0px 2px 0.1px blue"
    }
    useEffect(() => {
        ids.forEach((id, idx) => {
            const box = document.querySelector(`#${id}`)
            if (id !== clickedId) {
                box.style.border = "1px solid #adb5bd"
                box.style.boxShadow = "none"
            }
        })
    }, [clickedId])
    const [error, setError] = useState(null);
    const handleChange = ({target: {name, value, type, checked}}) => {
        value = type === "checkbox" ? checked : value
        setUserLoggingIn((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const matchUser = users.find((user) => user.userId === userLoggingIn.userId && user.password === userLoggingIn.password)
        if(matchUser){
            // setUserLoggingIn(() => matchUser);
            // logedInUser.push(matchUser);
            setFound(() => true);
            login.saveState(true);
            login.saveId(matchUser.userId)
        } else {
            setError(() => ({
                message: "wrong credentials",
                }));
        };
    }
    const handleHome = () => {
        // history.push("/");
    };
    const loginBoxStyle = (() => {
        if (displayLoginPopup) return {
            position: "absolute",
            width: "500px",
            height: "380px",
            zIndex: "7",
            backgroundColor: "white",
            borderRadius:"8px",
            boxShadow: "0px 0px 5px 0.7px #6c757d",  
            paddingTop:"20px"          
        }
    })()
    return (
        <div className =""
            style = {loginBoxStyle}
        >
            <Errors error = {error}/>
            <div className ="row mx-0 d-flex align-items-center justify-content-between">
                <div className = "col-2"></div>
                <h4  className ="col text-center"> Log in</h4>
                <div  className = "col-2 d-flex justify-content-end">
                    <div className ="btn">
                        {displayLoginPopup &&
                            <button className ="btn"
                                onClick = {(e) => setDisplayLoginPopup (() => !displayLoginPopup)}
                            >
                                {complementary.escape()}
                            </button>
                        }                       
                    </div>
                </div>
            </div>
            <div className = "signupBox">
            <form onSubmit = {handleSubmit}> 
                <div className = "d-flex px-3 pt-3">
                    <input
                    className = "accountSignupInput px-2 w-100"
                    id = "userId"
                    name = "userId"
                    placeholder = "Phone or email"
                    type = "text"
                    value = {userLoggingIn.userId}
                    onChange = {handleChange}
                    onClick = {handleClick}
                    // required = "true"
                    >
                    </input>
                </div>
                <div className = "d-flex px-3 pt-3">
                    <label htmlFor = " password"> </label>
                    <input
                    className = "accountSignupInput px-1 w-100 px-2"
                    id = "password"
                    name = "password"
                    type = "password"
                    placeholder = "Password"
                    value = {userLoggingIn.password}
                    onChange = {handleChange}
                    onClick = {handleClick}
                    // required = "true"
                    >
                    </input>
                </div>
                <div className = "pb-1"> 
                </div>
                {displayLoginPopup && <div style = {{ margin: "5px" }}> </div>}
                <div className="text-start px-2 d-flex justify-content-start align-items-center"
                    style = {{height: "25px"}}
                >
                    <input
                        style = {{
                            width:"32px"
                        }}
                        type = "checkbox"
                        id = "rememberPass"
                        name = "rememberPass"
                        onChange={handleChange}
                        checked={userLoggingIn.rememberPass}
                        value="rememberPass"
                     
                    ></input>
                    <label className = "px-2" htmlFor = "rememberPass">Remeber password</label>
                </div>
                {displayLoginPopup && <div style = {{ margin: "5px" }}> </div>}
                <div className="text-start px-2 d-flex justify-content-start align-items-center"
                    style = {{height: "20px"}}
                >
                    <input
                        style = {{
                            width:"32px"
                        }}
                        type = "checkbox"
                        id = "guestMode"
                        name = "guestMode"
                        onChange={handleChange}
                        checked={userLoggingIn.guestMode}
                        value="guestMode"
               
                    ></input>
                    <label className = "px-2" htmlFor = "guestMode">Guest mode</label>
                </div>

                <div className = "my-3">
                </div>
                {displayLoginPopup && <div style = {{ margin: "30px" }}> </div>}
                <div className = "my-2"> </div>
                <div className ="d-flex justify-content-center" >
                    <a href = "" >
                        <span className ="text-center"> Forgot password</span>
                    </a>
                </div>

                
                <div className = "m-3 mt-1 d-flex justify-content-center">
                    <button 
                    className = "signupBtn w-100 p-2"
                    type = "submit">
                        <span className = "signupBtnFont"> Log in</span>
                    </button>
                </div>

            </form>
            </div>
        </div>
    )
}