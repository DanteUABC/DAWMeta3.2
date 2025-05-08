'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Docentes', [
      { id: 1, personaId: 2, numEmpleado: 1001, categoriaEmpleadoId: 1, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Docentes', null, {});
  }
};