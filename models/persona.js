'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasOne(models.Estudiante, {
        as: 'estudiantes',
        foreignKey: 'personaId'
      });
    
      this.hasOne(models.Docente, {
        as: 'docentes',
        foreignKey: 'personaId'
      });
    }
  }
  Persona.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Persona',
    tableName: 'Personas'
  });
  return Persona;
};