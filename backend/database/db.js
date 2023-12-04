import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.DB_HOST)
const db = new Sequelize('guitarsdb', 'root', 'Eugenia.12345', {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
  port: '3306',
  connectionLimit: 10,
  define: {
    timestamps: false
  }
})

export default db
