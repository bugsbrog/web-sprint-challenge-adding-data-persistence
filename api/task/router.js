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
        const createTask = await Task.create(req.body)
        res.status(201).json(createTask)
    } catch (err) {
        next(err)
    }
})

module.exports = router