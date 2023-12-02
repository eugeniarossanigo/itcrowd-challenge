import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const Brand = db.define("brand", {
  id_brand: {
    type: DataTypes.TEXT,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  logo: {
    type: DataTypes.TEXT,
    allowNull: false
  }
});

export default Brand
