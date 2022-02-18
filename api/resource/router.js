const Resource = require('./model')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
    try {
        const getRes = await Resource.getAllResources()
        res.json(getRes)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

module.exports = router