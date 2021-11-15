const chapters = [{
    userId : '8134202585',
    bookId: '1',
    id: "1",
    title : 'Superkid990',
},
{
    userId : "hoainamdk3512@gmail.com",
    bookId: '2',
    id: "2",
    title : 'hello',
},
{
    userId : "khong-ve",
    id: '3',
    bookId: "3",
    title : 'hello you',
}
]

const hasTitle = require("../../validators/validators")

function chapExists (req, res, next) {
    const { userId, bookId } = req.params

    const foundChaps = chapters.filter((chap, idx) => Number(chap.bookId) === Number(bookId) && chap.userId == userId) 
    if (foundChaps) {
        res.locals.foundChaps = foundChaps;
        // res.locals.foundChaps = bookId;
        return next();
    }
    return next({
        status:400,
        message: 'userId is not found: ${req.params.userId}'
    })
}


const list = (req, res, next) => {
    res.json({data: res.locals.foundChaps});
}


const create = (req, res, next) => {
    const newChap = req.body.data;
    res.status(201).json({data: newChap})
}
module.exports = {
    list: [chapExists, list],
    create
}