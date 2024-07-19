'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [{
      question_text: 'Apa warna utama dari buah apel?',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});

    await queryInterface.bulkInsert('Answers', [
      {
        question_id: 1,
        answer_text: 'Merah',
        is_correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_id: 1,
        answer_text: 'Biru',
        is_correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_id: 1,
        answer_text: 'Kuning',
        is_correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_id: 1,
        answer_text: 'Hijau',
        is_correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Answers', null, {});
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
