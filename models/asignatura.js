'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asignatura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Docente,
        {as: 'docentes',
          through: 'Contratos',
        foreignKey: 'asignaturaId',
      });
      this.belongsToMany(models.Estudiante,
        {
          as: 'estudiantes',
          through: 'Inscripciones',
          foreignKey: 'asignaturaId', 
        }
      );
    }
  }
  Asignatura.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: false,
      allowNull: false
    },
    clave: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    creditos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Asignatura',
    tableName: 'Asignaturas'  
  });

  return Asignatura;
};
