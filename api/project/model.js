const db = require('../../data/dbConfig')

async function getAllProjects() {
    const projs = await db('projects')

    const result = projs.map(proj => {
        if (proj.project_completed === 0) {
            return {
                project_id: proj.project_id,
                project_name: proj.project_name,
                project_description: proj.project_description,
                project_completed: false
            }
        } else {
            return {
                project_id: proj.project_id,
                project_name: proj.project_name,
                project_description: proj.project_description,
                project_completed: true
            }
        }
    })

    return result
}

async function create(project) {
    const [project_id] = await db('projects').insert(project)
    return db('projects').where('project_id', project_id).first()
}

module.exports = {
    getAllProjects,
    create
}