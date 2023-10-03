const bodyParser = require('body-parser')
const users = require('./usersRoute')
const tasks = require('./tasksRoute')
const auth = require('./authRoute')

module.exports = app => {
    app.use(
        bodyParser.json(),
        auth,
        users,
        tasks,
    )
};