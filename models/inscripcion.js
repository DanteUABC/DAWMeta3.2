'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inscripcion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Estudiante, { foreignKey: 'estudianteId' });
      this.belongsTo(models.Asignatura, { foreignKey: 'asignaturaId' });
    }
  }
  Inscripcion.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    estudianteId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    asignaturaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    semestre: DataTypes.INTEGER,
    calificacion: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Inscripcion',
    tableName: 'Inscripciones'
  });
  return Inscripcion;
};
