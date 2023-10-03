const AuthService = require('../services/authServices')
const authServices = new AuthService()

class AuthController {

    static async login(req, res) {
        const { email, password } = req.body

        try {
            const login = await authServices.login({ email, password})
            res.status(200).json(login)
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

}

module.exports = AuthController;