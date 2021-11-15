const express = require("express");
const cors = require("cors")
const morgan = require("morgan");

const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");

const accRouter = require("./accounts/accounts.router");
const ntbkRouter = require("./writings/notebooks/notebooks.router");
const chapRouter = require("./writings/chapters/chapters.router");


const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"))

app.use('/users', accRouter);
app.use('/notebooks', ntbkRouter);
app.use('/chapters',chapRouter)

app.use(notFound);
app.use(errorHandler);
module.exports = app;
