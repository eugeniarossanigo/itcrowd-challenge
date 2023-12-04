import { Sequelize } from 'sequelize'
// import database from '../config.js' 

const db = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  define: {
    timestamps: false
  },
  database: 'guitarsdb',
  username: 'root',
  password: 'Eugenia.12345'
})

export default db
