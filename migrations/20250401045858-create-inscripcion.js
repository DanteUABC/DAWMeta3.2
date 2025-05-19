'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      'Inscripciones',
      {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        estudianteId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Estudiantes',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        asignaturaId: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references: {
            model: 'Asignaturas',
            key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE'
        },
        semestre: {
          type: Sequelize.INTEGER
        },
        calificacion: {
          type: Sequelize.FLOAT
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      },
      {
        indexes: [
          {
            unique: true,
            fields: ['estudianteId', 'asignaturaId', 'semestre']
          }
        ]
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Inscripciones');
  }
};
