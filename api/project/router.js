const Project = require('./model')

const router = require('express').Router()

router.get('/', async (req, res, next) => {
    try {
        const proj = await Project.getAllProjects()
        res.json(proj)
    } catch (err){
        next(err)
    }
})

router.post('/', async (req, res, next) => {
        try {
            const createProj = await Project.create(req.body)
            if (createProj.project_completed === 0) {
                res.status(201).json({
                    project_id: createProj.project_id,
                    project_name: createProj.project_name,
                    project_description: createProj.project_description,
                    project_completed: false
                })
            } else {
                res.status(201).json({
                    project_id: createProj.project_id,
                    project_name: createProj.project_name,
                    project_description: createProj.project_description,
                    project_completed: true
                })
            }
        } catch (err) {
            next(err)
        }
})

module.exports = router