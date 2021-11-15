let notebooks = [{
    userId : '8134202585',
    id: '1',
    title : 'Superkid990',
},
{
    userId : "hoainamdk3512@gmail.com",
    id: '2',
    title : 'hello',
},
{
    userId : "khong-ve",
    id: '3',
    title : 'hello you',
}
]

const hasTitle = require("../../validators/validators")
function ntbksExists(req, res, next) {
    const userName = req.params.userName;
    const foundNtbks = notebooks.filter((ntbk,udx) => ntbk.user_name == userName);
    if (foundNtbks) {
        res.locals.foundNtbks = foundNtbks;
        next();
    } else return {
        status:404,
        message: `userId is not found: ${req.params.userId}`
    }
}

const list = async (req, res, next) => {
    res.json({data: res.locals.foundNtbks})
 
}

const create = async (req, res, next) => {
    const newNtbk = req.body.data
    res.status(201).json({
        data: newNtbk
    })
}

module.exports = {
    list : [ntbksExists, list],
    create : [hasTitle, create]
}