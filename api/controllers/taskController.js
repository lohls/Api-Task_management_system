const TaskServices = require('../services/taskServices')
const taskServices = new TaskServices()

const database = require('../models')

class TaskController {
    static async register(req, res) {
        const { title, description, userId } = req.body
        try {
            const task = await taskServices.registerTasks({ title, description, userId })
            res.status(201).json(task)
        } catch (error) {
            res.status(500).send({ message: error.message })
        }
    }

    static async searchAllTasks(req, res) {
        try {
            const tasks = await taskServices.searchForAllThoseResponsibleForAllTasks()
            res.status(200).json(tasks)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

    static async getTasksById(req, res) {
        const { id } = req.params
        try {
            const taskById = await taskServices.searchResponsibleForTask(id)

            if (!taskById) {
                throw new Error('Task not registered in our system!')
            } else {
                res.status(200).json(taskById)
            }

        } catch (error) {
            res.status(200).json({ message: error.message })
        }
    }
    static async deleteTask(req, res) {
        const { id } = req.params
        try {
            await taskServices.deleteRecords(id)
            res.status(200).json('User deleted successfully')
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async updateTask(req, res) {
        const { id } = req.params
        const newDados = req.body

        try {
            await taskServices.updateRecord(newDados, id)
            const getUser = await taskServices.getRecordsById(id)
            res.status(200).json(getUser)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = TaskController;