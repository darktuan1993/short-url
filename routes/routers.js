const express = require('express')
const {urlRouter} = require("./url-short.router");


const rootRouter = express.Router();


rootRouter.use('/', urlRouter)


module.exports = {rootRouter}