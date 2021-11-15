import React, { useState } from "react";
export default function ComplementaryLogin(props) {
    const {
        displayCreateAcc,
        setDisplayCreateAcc,
        displayLoginPopup,
        setDisplayLoginPopup
    } = props
    const accs = ['acc1', 'acc2', 'acc3', 'acc3','acc3','acc3']
    accs.push("new acc")

    const accList = accs.map((acc,idx) => (
        <li className = "list-group-item m-0 p-0">
            <button className = "list-group-item py-3 w-100 d-flex"
                    onClick = {(e) => {
                        if (acc === "acc1") {
                            setDisplayLoginPopup(() => !displayLoginPopup)
                            // setDisplayCreateAcc(() => false)
                        }
                    }}
            >
                <h6> {acc} </h6>
            </button>
        </li>
    ))
    

    return (
        <>
        <div className ="">
            <div className = "mb-4 ">
                <span className ="d-flex justify-content-center"
                    style = {{
                        fontWeight:"600",
                        // lineHeight:"50px",
                    }}
                >Recent Logins</span>
            </div>
            {/* <hr className = "d-flex mt-2 justify-content-center mb-3"
                style = {{
                    margin:"auto"
                }}
            /> */}
            <ul className = "list-group accLoginListBox"
                style = {{
                    // border:"1px solid",           
                }}
            >
                {accList}
            </ul>
      
            <div className = "row d-flex w-100"
                style = {{
                    position:"absolute",
                    left:"12px",
                    bottom:"16px",

                }}
            >
            <hr className = " d-flex justify-content-center mt-3 mb-1"
                style = {{
                    margin:"auto"
                }}
            />
                <div className = "col-6 ">
                    <button 
                    className = " signAllOutBtn w-100 p-2"

                    >
                        <span className = "signupBtnFont">Sign all out</span>
                    </button>
                </div>
                <div className = "col-6 "
                    style = {{
                        color: "#219ebc"
                    }}
                >
                    <button className = "createAccBtn w-100 p-2"
                            onClick = {(e) => setDisplayCreateAcc(() => !displayCreateAcc)}
                    
                    >
                        <span className = "signupBtnFont">Create account</span>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}