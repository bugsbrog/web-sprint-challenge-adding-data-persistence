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
        const createRes = await Resource.create(req.body)
        res.status(201).json(createRes)
    } catch (err) {
        next(err)
    }
})

module.exports = router