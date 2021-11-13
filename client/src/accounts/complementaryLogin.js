import React from "react";
export default function ComplementaryLogin() {
    const accs = ['acc1', 'acc2', 'acc3', 'acc3','acc3','acc3']
    accs.push("new acc")
    const accList = accs.map((acc,idx) => (
        <li className = "list-group-item m-0 p-0">
            <button className = "list-group-item py-3 w-100 d-flex">
                <h6> {acc} </h6>
            </button>
        </li>
    ))

    return (
        <>
        <div className ="mt-2">
            <span className ="d-flex justify-content-center"
                style = {{
                    fontWeight:"600",
                    lineHeight:"40px",
                }}
            >Recent Logins</span>
            <hr className = "d-flex justify-content-center mb-3"
                style = {{
                    margin:"auto"
                }}
            />
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
                    type = "submit">
                        <span className = "signupBtnFont">Sign all out</span>
                    </button>
                </div>
                <div className = "col-6 "
                    style = {{
                        color: "#219ebc"
                    }}
                >
                    <button 
                    className = "createAccBtn w-100 p-2"
                    type = "submit">
                        <span className = "signupBtnFont">Create account</span>
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}