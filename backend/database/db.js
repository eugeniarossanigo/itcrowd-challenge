import { Sequelize } from 'sequelize'
import database from '../config.js' 

const db = new Sequelize(
  database.database,
  database.username,
  database.password, {
    host: database.host,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

export default db
