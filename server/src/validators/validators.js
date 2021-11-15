const validator = require("validator")
function hasTitle(req, res, next) {
    const {data: {title}} = req.body;
    if (validator.isEmpty(title)) return next ({
        status: 400,
        message: `the notebook must have the title`
    })
    return next()
}

module.exports = hasTitle