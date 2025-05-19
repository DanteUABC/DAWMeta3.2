'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Inscripciones', [
      { id: 1, estudianteId: 1, asignaturaId: 1, semestre: 1, calificacion: 8.8, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, estudianteId: 1, asignaturaId: 2, semestre: 1, calificacion: 7.3, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Inscripciones', null, {});
  }
};
