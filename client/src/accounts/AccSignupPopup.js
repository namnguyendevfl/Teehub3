import "./AccountSignup.css"
import React, { useEffect } from "react";
import  useState  from 'react-usestateref'
import { complementary } from "../utils/icons/complementary/Complementary";
import { accounts } from "../utils/icons/accounts/accounts";
import { useNavigate } from "react-router-dom";
import { createUser } from "../utils/api/accounts";
import Errors from "../errors/errors";
import { boxStyle } from "../utils/styles/boxStyle";
export default function SignupPopup(props){
    const {
        users, 
        setFound, 
        found, 
        userLoggingIn,
        setUserLoggingIn,
        setCount,
        userId,
        displayCreateAcc,
        setDisplayCreateAcc,
        displayLoginPopup,
        setDisplayLoginPopup
    } = props

    const initialUser = {
        first_name: "",
        sur_name: "",
        user_name : "",
        password : "",
        age_day: null,
        age_month: null,
        age_year: null, 
    }

    const ids = ['first_name', 'sur_name', 'user_name', 'password', 'month' ,'day', 'year' ]
    const [clickedId, setClickId, clickedIdRef] = useState("")
    const handleClick = (e) => {
        setClickId(() => e.target.id)
        if (ids.includes(clickedIdRef.current)) boxStyle.focus(e.target.id)
    }
    useEffect(() => {
        ids.forEach((id, idx) => (id !== clickedId) && boxStyle.unFocus(id) )
    }, [clickedId, displayCreateAcc])

    const [month, setMonth, monthRef] = useState()
    const [day, setDay, dayRef] = useState()
    const [year, setYear, yearRef] = useState()
    const [ birthday, setBirthday, birthdayRef ] = useState()
    const [ user, setUser, userRef ] = useState(initialUser);
    const [ error, setError] = useState(null);
    const handleChange = ({target: {name, value, type, checked}}) => {
        value = type === "checkbox" ? checked : value
        if (name === "age_month") setMonth(() => value)
        if (name === "age_day") setDay(() => value)
        if (name === "age_year") setYear(() => value)
        const date = new Date(`${monthRef.current}/${dayRef.current}/${yearRef.current}`)
        if (Object.prototype.toString.call(date) === "[object Date]"){
            if (isNaN(date.getTime())) {
                console.log("this is not valud")
            } else {
                console.log("this is valid")
                setBirthday(() => date.toLocaleDateString())
                
            }
        } else {
            console.log("this is not a date")
        }
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
            birthday: birthdayRef.current, 
        }))
    }
    console.log(user.birthday)
    // const newUserTest = {
    //     first_name: user.first_name,
    //     sur_name: user.sur_name,
    //     user_name : user.user_name,
    //     password : user.password,
    //     birthday : user.birthday,
    // }

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            first_name: user.first_name,
            sur_name: user.sur_name,
            user_name : user.user_name,
            password : user.password,
            birthday : user.birthday,
        }
        console.log(newUser)
        createUser(newUser)
        .then((result) => {
            // setDisplayCreateAcc(() => !displayCreateAcc)
            setFound(() => true);
            setUser(() => result);
            navigate("/");
            console.log(newUser)
        })
        .catch(setError)
        // createUser(user)
        // .then(() => {
        //     // history.push("/");
        //     setCount(() => count++);
        // })
        // .catch(setError);
    }
    const handleHome = () => {
        // history.push("/");
    };


    
    const now = new Date();
    const currentYear = now.getFullYear()

    const dayList = (month) => {
        const months30 = ["April","June","September","November"]
        const dayNum = (() => {
            if (months30.includes(month)) return 30
            return 31
        })()
        const days = []
        for (let i = 1; i<(dayNum + 1); i++) days.push(i)
        return days.map((day,idx) => <option value = {day}>{day}</option>)
    } 

    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];
    const monthList = months.map((month,idx) => <option value = {month}>{month}</option>)

    const years = []
    for (let i = 1900; i<currentYear-12; i++) years.push(i)
    const yearList = years.map((year,idx) => <option value = {year}>{year}</option>)
    
    return ( displayCreateAcc &&
        <>
        <div className ="accSignupPopup">
            <Errors error = {error}/>
            <div className ="row mt-3 mx-0 d-flex align-items-center justify-content-between">
                <div className = "col-2"></div>
                <h4  className ="col text-center"> Create your account</h4>
                <div  className = "col-2 d-flex justify-content-end">
                    <div className ="btn">
                        <button className ="btn"
                        onClick = {(e) => setDisplayCreateAcc(() => !displayCreateAcc)}
                        >
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
                            id = "first_name"
                            name = "first_name"
                            type = "text"
                            placeholder = "First name"
                            value = {user.first_name}
                            onChange = {handleChange}
                            onClick = {handleClick}
                            onKeyUp = {handleClick}
                            // required = "true"
                            >
                        </input>
                    </div>
                    <div className = "ps-1">
                        <input
                            className = " accountSignupInput nameInput px-2 "
                            id = "sur_name"
                            name = "sur_name"
                            type = "text"
                            placeholder = "Last name"
                            value = {user.sur_name}
                            onChange = {handleChange}
                            onClick = {handleClick}
                            onKeyUp = {handleClick}
                            // required = "true"
                            >
                        </input>
                    </div>
                </div>
            </div>
            <div className = "my-2"> </div>
            <div className = "d-flex px-3 pt-3">
                <input
                className = "accountSignupInput px-2 w-100"
                id = "user_name"
                name = "user_name"
                placeholder = "Phone or email"
                type = "text"
                value = {user.user_name}
                onChange = {handleChange}
                onClick = {handleClick}
                onKeyUp = {handleClick}
                // required = "true"
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
                onKeyUp = {handleClick}
                // required = "true"
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
                            name = "age_month"
                            type ="date"
                            value = {user.age_month}
                            onClick = {handleClick}
                            onChange = {handleChange}
                            onKeyUp = {handleClick}
                            >
                            <option> Month </option>
                            {monthList}
                        </select>
                        <div className ="birthday-arrowDown">
                            {accounts.downChevron()}
                        </div>
                    </div>
                    <div className = "pe-1 position-relative"> 
                        <select
                            className = "accountSignupInput birthday-select text-start ps-2"
                            id = "day"
                            name = "age_day"
                            type ="date"
                            value = {user.age_day}
                            onClick = {handleClick}
                            onChange = {handleChange}
                            onKeyUp = {handleClick}
                            >
                            <option> Day </option>
                            {dayList(user.age_month)}
                        </select>
                        <div className ="birthday-arrowDown">
                            {accounts.downChevron()}
                        </div>
                    </div>
                    <div className = "pe-1 position-relative"> 
                        <select
                            className = "accountSignupInput birthday-select text-start ps-2"
                            id = "year"
                            name = "age_year"
                            type ="date"
                            value = {user.age_year}
                            onClick = {handleClick}
                            onChange = {handleChange}
                            onKeyUp = {handleClick}
                            // required = "true"
                            >
                            <option> Year </option>
                            {yearList}                          
                        </select>
                        <div className = "my-2"> </div>
                        <div className ="birthday-arrowDown">
                            {accounts.downChevron()}
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-start px-2 d-flex justify-content-start align-items-center"
                    style = {{height: "0px"}}
                >
                    <input
                        style = {{
                            width:"0px",
                            color:"white",
                        }}
                        onKeyUp = {handleClick}
                        id = "none"
                    ></input>
                </div>
            {/* testing  */}
            <div className = "m-3">
                <button 
                    className = "signupBtn w-100 p-2"
                    type = "submit"
                    id = "submit"
                    onClick = {handleClick}
                    tabIndex = "-1"
                >
                    <span className = "signupBtnFont"> Sign up </span>
                </button>
            </div>
 
            </form>
            </div>
        </div>
        </>
    )
}