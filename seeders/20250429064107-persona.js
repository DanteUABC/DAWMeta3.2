'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Personas', [
      { id: 1, nombre: 'Ana Torres', email: 'ana@example.com', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, nombre: 'Carlos Pérez', email: 'carlos@example.com', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, nombre: 'Laura Díaz', email: 'laura@example.com', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Personas', null, {});
  }
};