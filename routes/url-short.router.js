const express = require('express');
const {getHtmlFormInput, forwardUrlToDirect, checkUrlIntoMongo} = require("../controller/url-short.controller");

const urlRouter = express.Router();

urlRouter.get('/dev', getHtmlFormInput)
urlRouter.post('/dev', checkUrlIntoMongo)
urlRouter.get('/:shortId', forwardUrlToDirect)

module.exports = {
    urlRouter
}