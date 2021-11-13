import "./AccountSignup.css"
import React, { useEffect, useState } from "react";
import { complementary } from "../utils/icons/complementary/Complementary";
import { accounts } from "../utils/icons/accounts/accounts";

export default function LoginPopup({count, setCount}){
    const initialUser = {
        firstName: "",
        surName: "",
        userId : "",
        password : "",
        ageDay: "",
        ageMonth:"",
        ageYear: "",
        gender: "",
        acceptTerm: "",
    }
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
    console.log(clickedId)
    const [user, setUser] = useState(initialUser);
    const [error, setError] = useState(null);

    const handleChange = ({target: {name, value, type, checked}}) => {
        value = type === "checkbox" ? checked : value
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // createUser(user)
        // .then(() => {
        //     // history.push("/");
        //     setCount(() => count++);
        // })
        // .catch(setError);
    }
    // console.log(user);

    const handleHome = () => {
        // history.push("/");
    };


    
    const now = new Date();
    const currentYear = now.getFullYear()
    const days = []
    for (let i = 1; i<32; i++) days.push(i)
    const day = days.map((day,idx) => <option value = {day}>{day}</option>)
    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    const month = months.map((month,idx) => <option value = {month}>{month}</option>)

    const years = []
    for (let i = 1900; i<currentYear-12; i++) years.push(i)
    const year = years.map((year,idx) => <option value = {year}>{year}</option>)
    
    return (
        <div className ="accLoginPopup">
            {/* <Errors error = {error}/> */}
            <div className ="row mt-3 mx-0 d-flex align-items-center justify-content-between">
                <div className = "col-2"></div>
                <h4  className ="col text-center"> Log in</h4>
                <div  className = "col-2 d-flex justify-content-end">
                    <div className ="btn">
                        <button className ="btn">
                            {complementary.escape()}
                        </button>
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
                    value = {user.userId}
                    onChange = {handleChange}
                    onClick = {handleClick}
                    required = "true"
                    >
                    </input>
                </div>
                <div className = "my-2"> </div>
                <div className = "d-flex px-3 pt-3">
                    <label htmlFor = " password"> </label>
                    <input
                    className = "accountSignupInput px-1 w-100 px-2"
                    id = "password"
                    name = "password"
                    type = "password"
                    placeholder = "Password"
                    value = {user.password}
                    onChange = {handleChange}
                    onClick = {handleClick}
                    required = "true"
                    >
                    </input>
                </div>
                <div className = "pb-1"> 
                </div>
                <div className="text-start px-2 d-flex justify-content-start align-items-center"
                    style = {{height: "40px"}}
                >
                    <input
                        style = {{
                            width:"32px"
                        }}
                        type = "checkbox"
                        id = "rememberPass"
                        name = "rememberPass"
                        onChange={handleChange}
                        checked={user.acceptTerm}
                        value="rememberPass"
                        required = "true"
                    ></input>
                    <label className = "px-2" htmlFor = "rememberPass">Remeber password</label>
                </div>

                <div className = "py-3">
                </div>

                <div className ="d-flex justify-content-center" >
                    <a href = "" >
                        <span className ="text-center"> Forgot password</span>
                    </a>
                </div>

                <div className = "my-3"> </div>
                <div className = "m-3">
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