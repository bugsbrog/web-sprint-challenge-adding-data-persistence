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
    const [task_id] = await db('tasks').insert(task)
    const t = await db('tasks').where('task_id', task_id).first()

    if (t.task_completed === 0) {
        return {
            task_id: t.task_id,
            task_description: t.task_description,
            task_notes: t.task_notes,
            task_completed: false,
            project_id: t.project_id
        }
    } else {
        return {
            task_id: t.task_id,
            task_description: t.task_description,
            task_notes: t.task_notes,
            task_completed: true,
            project_id: t.project_id
        }
    }
}

module.exports = {
    getAllTasks,
    create
}