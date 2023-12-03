import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const User = db.define('user', {
  id_user: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  logged: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

export default User
