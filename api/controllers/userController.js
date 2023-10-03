const UserService = require('../services/userServices')
const userService = new UserService()

class UserController {
    static async register(req, res) {
        const { name, email, functions, password } = req.body
        try {
            const user = await userService.register({ name, email, functions, password })
            res.status(201).send(user)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
    static async getUsers(req, res) {
       const users = await userService.getAllUsersAndTasks()
       res.status(200).json(users)
        }

    static async getUserAndTasks(req, res) {

        const { id } = req.params
        try {
            const user = await userService.getUserAndTask(id)
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params
        try {
            await userService.deleteRecords(id)
            res.status(200).json('User deleted successfully!')
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }

    static async updateUser(req, res) {
        const { id } = req.params
        const newDados = req.body
        try {
            await userService.updateRecord(newDados, id)
            const getTask = await userService.getRecordsById(id)
            res.status(200).json(getTask)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
   
}



module.exports = UserController;