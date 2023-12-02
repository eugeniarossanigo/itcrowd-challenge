import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const Guitar = db.define('guitar', {
  id_guitar: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  stock: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  shipment: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
});

export default Guitar
