const Services = require('./Services')
const database = require('../models')
const { v4: uuidv4 } = require('uuid')
const { hash } = require('bcryptjs')

class UserService extends Services {
    constructor() {
        super('users')
    }
    async register(dto) {
        const user = await database.users.findOne({
            where: {
                email: dto.email
            }
        })
        if (user) {
            throw new Error('Employee already registered with our bank!')
        }
        try {
            const passwordHash = await hash(dto.password, 8)

            const newUser = await database.users.create({
                id: uuidv4(),
                name: dto.name,
                email: dto.email,
                functions: dto.functions,
                password: passwordHash
            })
            return newUser
        } catch (error) {
            throw new Error('Error registering new Employee!')
        }
    }

    async getAllUsersAndTasks() {
        const user = await database.users.findAll({

            include: [{
                model: database.tasks,
                as: 'tasks',
                attributes: ['id', 'title', 'description']
            }]
        })
        return user
    }

    async getUserAndTask(id) {

        const user = await database.users.findOne({
            where: {
                id: id
            },
            include: [{
                model: database.tasks,
                as: 'tasks',
                attributes: ['id', 'title', 'description']
            }]
        })
        return user

    }

}

module.exports = UserService;