
//Create validation
const validator = require("validator");
const service = require("./accounts.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const argon2 = require("argon2");
const hashPw = require("../validators/hash")






function hasData(req,res,next) {
    if (req.body.data) {
        res.locals.data = req.body.data;
        return next();
    };
    next ({
        status: 400,
        message: "body must have data property"
    });
}

function passwordIsValid (req,res,next) {
    const password = req.body.data.password;
    if ( password.length >=8 ) return next();
    return next({
        status: 400,
        message: "password is too short"
    });
}


function user_nameIsValid (req, res, next) {
    const id = req.body.data.user_name;
    if  (validator.isEmail(id)) return next()
    if (validator.isEmpty(id) || isNaN(id))
    return next({
        status: 400,
        message: "userName must be a phone number or an email address"
    }) 
    if(!isNaN(id)) return next()
 
}

//UserId
async function userLoggingInExists(req, res, next) {
    const { user_name, password } = usersLogginIn;
    const foundUser = users.find((user,udx) => user.user_name === user_name);
    if (foundUser){

        // const found = await argon2.verify(password, foundUser.password)
        // if (found) {
        //     res.locals.foundUser = foundUser;
        //     next();
        // } else return {
        //     status:404,
        //     message: `wrong password`   
        // }
    } else return {
        status:404,
        message: `userId is not found: ${req.params.userId}`
    }
}



const create = async (req, res) => {
    const rawNewUser = req.body.data;
    rawNewUser.password = res.locals.pwHashed;
    const hashedNewUser = await service.create(rawNewUser);
    res.status(201).json({data: hashedNewUser});    
}

const listUsers = async (req, res) => {
    const users = await service.list()
    res.locals.users = users
    res.json({
        data: users
    })
}


//login validation 

let userLoggingIn
const createUserLoggingIn = (req, res) => {
    userLoggingIn = req.body.data
    res.status(201).json({})
}

const usersLoggedIn = []
const readUserLoggingIn = async (req, res, next) => {
    const { user_name, password } = userLoggingIn
    const users =  await service.list()
    const foundUser = users.find((user,idx) => user.user_name === user_name);
    if (foundUser){
        const found = await argon2.verify(foundUser.password, password)
        if (found) {
            if (!usersLoggedIn.includes(foundUser.user_name)) usersLoggedIn.push(foundUser.user_name)
            return res.json({data:foundUser.user_name})
        } else return next({
            status:404,
            message: `wrong password`   
        })
    } else return next({
        status:404,
        message: `userId is not found: ${req.params.userId}`
    })
    
}

module.exports = {
    create: [hasData, user_nameIsValid, passwordIsValid, hashPw, asyncErrorBoundary(create)],
    createUserLoggingIn: [asyncErrorBoundary(createUserLoggingIn)],
    listUsers: [asyncErrorBoundary(listUsers)],
    readUserLoggingIn: [asyncErrorBoundary(readUserLoggingIn)],
}