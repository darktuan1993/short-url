const {ShortUrl} = require("../model/url.model");
const shortId = require("shortid");


const getHtmlFormInput = async (req, res) => {
    res.render("home", {})
}

// HÀM CHECK URL CÓ TRONG MONGO DB VÀ TẠO SHORT
const checkUrlIntoMongo = async (req, res, next) => {
    // check xem có trong db hay không

    try {
        const {url} = req.body
        if (url) {
            const urlExist = await ShortUrl.findOne({url})
            if (!urlExist) {
                console.log('ko co url')
                // không có thì lưu vào db
                const shortUrl = new ShortUrl({url: url, shortId: shortId.generate()})
                await shortUrl.save()
                res.status(200).render('home', {
                    short_url: `${req.headers.host}/${shortUrl.shortId}`,
                })
            } else {
                console.log('co url')
                res.status(201).render('home', {
                    short_url: `${req.headers.host}/${urlExist?.shortId}`,
                })
            }
        } else {
            console.log('lam j co url')
            res.status(404).render('home', {
                non_short_url: `Vui lòng nhập url cần rút ngắn !!!`,
            })
        }
    } catch (e) {
        res.status(500).render('home', {
            non_short_url: e,
        })
    }
}

// HÀM CHUYỂN HƯỚNG LINK

const forwardUrlToDirect = async (req, res) => {
    // check có trong db hay không
    try {
        const {shortId} = req.params
        console.log('shortId', shortId)
        const redirectURL = await ShortUrl.findOne({shortId})
        if (shortId) {
            res.redirect(redirectURL?.url)
        }
    } catch (e) {
        console.log('e', e)
    }

}


module.exports = {
    getHtmlFormInput,
    checkUrlIntoMongo,
    forwardUrlToDirect
}