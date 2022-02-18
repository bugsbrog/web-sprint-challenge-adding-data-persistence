const db = require('../../data/dbConfig')

async function getAllResources() {
    await db('resources')
}

async function create(resource) {
    const [resource_id] = await db('resources').insert(resource)
    return db('resources').where('resource_id', resource_id).first()
}

module.exports = {
    getAllResources,
    create
}