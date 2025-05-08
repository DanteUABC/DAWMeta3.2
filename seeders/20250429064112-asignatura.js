'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Asignaturas', [
      { id: 1, clave: 101, nombre: 'Matemáticas', creditos: 6, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, clave: 102, nombre: 'Física', creditos: 5, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Asignaturas', null, {});
  }
};