import Sequelize from 'sequelize';

import User from '../app/models/User';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, Appointment];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig)

        models.map(model => model.init(this.connection))
    }
}


export default new Database();