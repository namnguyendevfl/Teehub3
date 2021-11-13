import "./AccountSignup.css"
import React, { useEffect, useState } from "react";
import { complementary } from "../utils/icons/complementary/Complementary";
import { accounts } from "../utils/icons/accounts/accounts";

export default function SignupPopup({count, setCount}){
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
    const ids = ['firstName', 'surName', 'userId', 'password', 'month' ,'day', 'year' ]
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
        <div className ="accSignupPopup">
            {/* <Errors error = {error}/> */}
            <div className ="row mt-3 mx-0 d-flex align-items-center justify-content-between">
                <div className = "col-2"></div>
                <h4  className ="col text-center"> Create your account</h4>
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
                <div className = "d-flex justify-content-between w-100">
                    <div className = "pe-1 ">
                        <input
                            className = "accountSignupInput nameInput px-2 "
                            id = "firstName"
                            name = "firstName"
                            type = "text"
                            placeholder = "First name"
                            value = {user.firstName}
                            onChange = {handleChange}
                            onClick = {handleClick}
                            required = "true"
                            >
                        </input>
                    </div>
                    <div className = "ps-1">
                        <input
                            className = " accountSignupInput nameInput px-2 "
                            id = "surName"
                            name = "surName"
                            type = "text"
                            placeholder = "Last name"
                            value = {user.surName}
                            onChange = {handleChange}
                            onClick = {handleClick}
                            required = "true"
                            >
                        </input>
                    </div>
                </div>
            </div>
            <div className = "my-2"> </div>
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
            <div className = "my-3"> </div>
            <div className="text-start px-3 pt-2">
                <h6>Birthday</h6>
                <p
                    style = {{
                        color: "#343a40",
                        lineHeight: "20px",
                        fontWeight: "400",
                    }}
                > This will not be shown publicly unless you set to do so. Confirm your age to help make sure you get the appropriate content</p>
                <div className = "d-flex justify-content-between">
                    <div className = "pe-1 position-relative"> 
                        <select
                            className = "accountSignupInput birthday-select text-start ps-2"
                            id = "month"
                            name = "ageMonth"
                            value = {user.ageMonth}
                            onClick = {handleClick}
                            onChange = {handleChange}
                            >
                            <option> Month </option>
                            {month}
                        </select>
                        <div className ="birthday-arrowDown">
                            {accounts.downChevron()}
                        </div>
                    </div>
                    <div className = "pe-1 position-relative"> 
                        <select
                            className = "accountSignupInput birthday-select text-start ps-2"
                            id = "day"
                            name = "ageDay"
                            value = {user.ageDay}
                            onClick = {handleClick}
                            onChange = {handleChange}
                            >
                            <option> Day </option>
                            {day}
                        </select>
                        <div className ="birthday-arrowDown">
                            {accounts.downChevron()}
                        </div>
                    </div>
                    <div className = "pe-1 position-relative"> 
                        <select
                            className = "accountSignupInput birthday-select text-start ps-2"
                            id = "year"
                            name = "ageYear"
                            value = {user.ageYear}
                            onClick = {handleClick}
                            onChange = {handleChange}
                            required = "true"
                            >
                            <option> Year </option>
                            {year}                          
                        </select>
                        <div className = "my-2"> </div>
                        <div className ="birthday-arrowDown">
                            {accounts.downChevron()}
                        </div>
                    </div>
                </div>
            </div>
                    <div className = "m-3">
                    <button 
                    className = "signupBtn w-100 p-2"
                    type = "submit">
                        <span className = "signupBtnFont"> Sign up </span>
                    </button>
                    </div>
 
            </form>
            </div>
        </div>
    )
}