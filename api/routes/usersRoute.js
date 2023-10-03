const { Router} = require('express')
const UserController = require('../controllers/userController')
const authentication = require('../middleware/authentication')

const router = Router()
router.use(authentication)

router
    .post('/user', UserController.register)
    .get('/users',  UserController.getUsers)
    .get('/user/:id', UserController.getUserAndTasks)
    .delete('/user/:id', UserController.deleteUser)
    .put('/user/:id', UserController.updateUser)

module.exports = router;