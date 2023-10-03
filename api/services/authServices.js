const database = require('../models')
const {compare} = require('bcryptjs')
const {sign} = require('jsonwebtoken')
const jsonSecret = require('../config/jsonSecret')

class AuthService {

    async login(dto) {

        const users = await database.users.findOne({
            attributes: ['id', 'email', 'password'],
            where: {
                email: dto.email
            }
        })
        if(!users) {
            throw new Error('User not registered in our system!')
        }
        const passwords = await compare(dto.password, users.password)
        if(!passwords) {
            throw new Error('Invalid username or password!')
        }
        const acessToken = sign({
            id: users.id,
            email: users.email
        },
        jsonSecret.secret, {
            expiresIn: 864000
        })
        return {acessToken}
    }

}

module.exports = AuthService;