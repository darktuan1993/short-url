const express = require('express');
const {getHtmlFormInput, forwardUrlToDirect, checkUrlIntoMongo} = require("../controller/url-short.controller");

const urlRouter = express.Router();

urlRouter.get('/', getHtmlFormInput)
urlRouter.post('/', checkUrlIntoMongo)
urlRouter.get('/:shortId', forwardUrlToDirect)

module.exports = {
    urlRouter
}