import { Sequelize } from 'sequelize'
// import database from '../config.js' 

const db = new Sequelize({
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  },
  database: 'guitarsdb',
  username: 'root',
  password: 'Eugenia.12345'
})

export default db
