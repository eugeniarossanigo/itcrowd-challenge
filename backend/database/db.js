import { Sequelize } from 'sequelize'

const db = new Sequelize('guitarsdb', 'root', 'Eugenia.12345', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  define: {
    timestamps: false
  }
})

export default db
