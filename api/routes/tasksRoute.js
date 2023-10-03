const { Router } = require('express')
const TaskController = require('../controllers/taskController')
const authentication = require('../middleware/authentication')

const router = Router()
router.use(authentication)

router
    .post('/task', TaskController.register)
    .get('/tasks', TaskController.searchAllTasks)
    .get('/task/:id', TaskController.getTasksById)
    .delete('/task/:id', TaskController.deleteTask)
    .put('/task/:id', TaskController.updateTask)

module.exports = router;