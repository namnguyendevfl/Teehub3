import React, { useState, useEffect } from "react";
import { listUsers } from "../utils/api/accounts";

export default function Home () {
    const [users, setUsers] = useState()
    useEffect(() => {
        listUsers()
        .then((res) =>
        setUsers(() => res))
    },[])
    
    return (
        <div>
            This is home
        </div>
    )
}