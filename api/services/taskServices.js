const Services = require('./Services')
const database = require('../models')
const { v4: uuidv4 } = require('uuid')


class TaskService extends Services {
    constructor() {
        super('tasks')
    }

    async registerTasks(dto) {
        const checkTasks = await database.tasks.findOne({
            where: {
                title: dto.title
            }
        })
        if (checkTasks)
            throw new Error('Task already registered in our bank')
        const tasks = await database.tasks.create({
            id: uuidv4(),
            title: dto.title,
            description: dto.description,
            userId: dto.userId
        })
        return tasks;
    }

    async searchForAllThoseResponsibleForAllTasks() {
        const task = await database.tasks.findAll({
            include: [{
                model: database.users,
                as: 'user',
                attributes: ['id', 'name', 'email', 'password']
            }]
        })
        return task
    }


    async searchResponsibleForTask(id) {

        const task = await database.tasks.findOne({

            where: { id: id},

            include: [{
                model: database.users,
                as: 'user',
                attributes: ['id', 'name', 'email', 'password']
            }]
        })
        return task
    }
}

module.exports = TaskService;