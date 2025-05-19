'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estudiante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Persona, {
        as: "personas",
        foreignKey: "personaId"
      });
      this.belongsToMany(models.Asignatura,
        {as: "asignaturas",
          through: 'Inscripciones',
          foreignKey: 'estudianteId'
        }
      );
    }
  }
  Estudiante.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    matricula: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true
    },
    personaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Estudiantes',
    modelName: 'Estudiante',
  });
  return Estudiante;
};
