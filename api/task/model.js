const db = require('../../data/dbConfig')

async function getAllTasks() {
    const task = await db('tasks as t')
        .join('projects as p', 'p.project_id', 't.project_id')
        .select('p.*', 't.*')

    const taskResult = task.map(tk => {
        if (tk.task_completed === 0) {
            return {
                task_id: tk.task_id,
                task_description: tk.task_description,
                task_notes: tk.task_notes,
                task_completed: false,
                project_name: tk.project_name,
                project_description: tk.project_description
            }
        } else {
            return {
                task_id: tk.task_id,
                task_description: tk.task_description,
                task_notes: tk.task_notes,
                task_completed: true,
                project_name: tk.project_name,
                project_description: tk.project_description
            }
        }
    })

    return taskResult
}

async function create(task) {

}

module.exports = {
    getAllTasks,
    create
}