import React, { useEffect } from "react";
import  useState  from 'react-usestateref'
import "./Layout.css"
import SignedIn from "./SignedIn";
import SigningIn from "./SigningIn";
import { useNavigate } from "react-router-dom";
import Errors from "../errors/errors";
import { readUserLoggingIn } from "../utils/api/accounts";
import { login } from "../utils/localStorage/accounts";

export default function Layout() {
    let userId = null;
    //Test windoeStorage
    // let deckId = window.localStorage.getItem('deckId');
    // deckId = JSON.parse(deckId);
    // userId = window.localStorage.getItem('userId');
    // userId = JSON.parse(userId);
    // let matchUser = window.localStorage.getItem('login');
    // matchUser = JSON.parse(matchUser);


    const initialUser = {
        first_name: "",
        sur_name: "",
        user_name : "",
        password : "",
        age_day: "",
        age_month:"",
        age_year: "",
        gender: "",
        acceptTerm: "",
        remember_pass:"",
        guest_mode:"",
        birthday:"",
        is_active:"",
    }
    
    const [ found, setFound ] = useState(false);
    const [ users, setUsers] = useState([]);
    const [ count, setCount] = useState(0);
    const [ displayCreateAcc, setDisplayCreateAcc ] = useState(false)
    const [ displayLoginPopup, setDisplayLoginPopup ] = useState(false)
    const [ userLoggingIn, setUserLoggingIn] = useState(initialUser);
    const [ error, setError] = useState(null);
    const navigate = useNavigate();
    const [ test, setTest ] = useState()
    useEffect (() => {
        const abortController = new AbortController();
        navigate("/")
        // readUserLoggingIn(abortController.signal)
        // .then(setTest)
        // .catch(setError)
        return () => abortController.abort()
    }, [count]);
    console.log(test)
    

    useEffect (() => {setUserLoggingIn(() => initialUser)},[displayLoginPopup])
    return(
        <>
        {/* <Errors error = {error}/> */}
        <SignedIn 
            userId = {userId}
            found = {found}
            setFound = {setFound}
            userLoggingIn = {userLoggingIn}
            setUserLoggingIn = {setUserLoggingIn}
            displayCreateAcc = {displayCreateAcc}
            setDisplayCreateAcc = {setDisplayCreateAcc}
            displayLoginPopup = {displayLoginPopup}
            setDisplayLoginPopup = {setDisplayLoginPopup}               
        />
        <SigningIn 
            users = {users} 
            setFound = {setFound}
            userId = {userId}
            found = {found}
            userLoggingIn = {userLoggingIn}
            setUserLoggingIn = {setUserLoggingIn}
            count = {count}
            setCount = {setCount}
            displayCreateAcc = {displayCreateAcc}
            setDisplayCreateAcc = {setDisplayCreateAcc}
            displayLoginPopup = {displayLoginPopup}
            setDisplayLoginPopup = {setDisplayLoginPopup}
        />
        </>
    )
}