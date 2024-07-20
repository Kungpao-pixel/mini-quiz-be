'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [
      {
        question_text: 'Apa warna utama dari buah apel?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_text: 'Buah apa yang memiliki kulit berduri?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_text: 'Apa warna dari bagian dalam buah semangka?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_text: 'Buah apa yang dikenal sebagai "king of fruits"?',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_text: 'Buah apa yang kaya akan vitamin C dan sering digunakan dalam jus?',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
