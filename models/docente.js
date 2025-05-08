'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Docente extends Model {
    static associate(models) {
      // Docente pertenece a una Persona
      this.belongsTo(models.Persona, {
        as: "personas",
        foreignKey: "personaId"
      });

      // Docente pertenece a una Categoría de Empleado
      this.belongsTo(models.CategoriaEmpleado, {
        as: "categoriaEmpleados",
        foreignKey: "categoriaEmpleadoId"
      });

      // Docente tiene muchas asignaturas a través de Contrato
      this.belongsToMany(models.Asignatura, {
        as: "asignaturas",
        through: "Contratos",
        foreignKey: "docenteId"
      });
    }
  }

  Docente.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    numEmpleado: {
      type: DataTypes.INTEGER,
      unique: true,
      allowNull: false
    },
    personaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoriaEmpleadoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Docente',
    tableName: 'Docentes',
  });

  return Docente;
};