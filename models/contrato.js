'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contrato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Docente, { foreignKey: 'docenteId' });
      this.belongsTo(models.Asignatura, { foreignKey: 'asignaturaId' });
    }
  }
  Contrato.init({
    docenteId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    asignaturaId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'Contrato',
    tableName: 'Contratos'
  });
  return Contrato;
};