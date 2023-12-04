import { Sequelize } from 'sequelize'
// import database from '../config.js' 

const db = new Sequelize('guitarsdb', 'root', 'Eugenia.12345', {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3306,
  define: {
    timestamps: false
  }
})

export default db
