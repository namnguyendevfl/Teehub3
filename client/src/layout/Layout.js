import React, { useEffect, useState } from "react";
import "./Layout.css"
import SignedIn from "./SignedIn";
import SigningIn from "./SigningIn";
import { useNavigate } from "react-router-dom";
import Errors from "../errors/errors";
import { accounts } from "../utils/icons/accounts/accounts";
import { listAccs } from "../utils/api/accountApi";

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
        firstName: "",
        surName: "",
        userId : "",
        password : "",
        ageDay: "",
        ageMonth:"",
        ageYear: "",
        gender: "",
        acceptTerm: "",
        rememberPass:"",
        guestMode:"",
    }
    
    const [found, setFound ] = useState(false);
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(0);
    // const [userLogedIn, setUserLogedIn] = useState(matchUser?matchUser[0]:initialUser);
    const [ displayCreateAcc, setDisplayCreateAcc ] = useState(false)
    const [ displayLoginPopup, setDisplayLoginPopup ] = useState(false)
    const [userLoggingIn, setUserLoggingIn] = useState(initialUser);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect (() => {
        const abortController = new AbortController();
        navigate("/")
        listAccs(abortController.signal)
        .then(setUsers)
        .catch(setError)
        return () => abortController.abort()
    }, [count]);
    useEffect (() => {setUserLoggingIn(() => initialUser)},[displayLoginPopup])
    return(
        <>
        <Errors error = {error}/>
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