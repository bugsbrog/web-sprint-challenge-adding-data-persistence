const Task = require('./model')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
    try {
        const getTask = await Task.getAllTasks()
        res.json(getTask)
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