const accs = [{
    firstName: "",
    surName: "",
    userId : '8134202585',
    password : 'Superkid990',
    ageDay: "",
    ageMonth:"",
    ageYear: "",
    gender: "",
    acceptTerm: "",
    rememberPass:"",
    guestMode:"",
},
{
    firstName: "",
    surName: "",
    userId : "hoainamdk3512@gmail.com",
    password : "Superkid",
    ageDay: "",
    ageMonth:"",
    ageYear: "",
    gender: "",
    acceptTerm: "",
    rememberPass:"",
    guestMode:"",
},
{
    firstName: "",
    surName: "",
    userId : "8134202585",
    password : "khongve",
    ageDay: "",
    ageMonth:"",
    ageYear: "",
    gender: "",
    acceptTerm: "",
    rememberPass:"",
    guestMode:"",
}
]

export const createAcc = async(newAcc) => {
    // const url = ""
    // const create = {
    //     method:"POST",
    //     headers,
    //     signal,
    //     body: JSON.stringify({data:newAcc})
    // }
    accs.push(newAcc)
    return newAcc
}

export const listAccs = async() => {
    return accs
}