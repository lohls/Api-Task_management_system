const database = require('../models')

class Services {
    constructor(modelName) {
        this.modelName = modelName
    }

    async searchAllRecords() {
        return database[this.modelName].findAll()
    }
    async getRecordsById(id) {
        return database[this.modelName].findOne({ where: { id: id } })
    }

    async deleteRecords(id) {
        return database[this.modelName].destroy({ where: { id: id } })
    }

    async updateRecord(newDados, id) {
        return database[this.modelName].update(newDados, { where: { id: id } })
    }
}


module.exports = Services;