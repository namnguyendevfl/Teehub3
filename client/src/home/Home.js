import React, { useState, useEffect } from "react";
import { listAccs } from "../utils/api/accountApi";

export default function Home () {
    const [accs, setAccs] = useState()
    useEffect(() => {
        listAccs()
        .then((res) =>
        setAccs(() => res))
    },[])
    console.log(accs);
    return (
        <div>
            This is home
        </div>
    )
}