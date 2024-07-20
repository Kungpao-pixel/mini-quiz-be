'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const questions = await queryInterface.sequelize.query(
      'SELECT id FROM "Questions";',
      { type: Sequelize.QueryTypes.SELECT }
    );

    await queryInterface.bulkInsert('Answers', [
      {
        question_id: questions[0].id, // ID dari pertanyaan pertama
        answer_text: 'Merah',
        is_correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_id: questions[0].id,
        answer_text: 'Hijau',
        is_correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_id: questions[1].id, // ID dari pertanyaan kedua
        answer_text: 'Durian',
        is_correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_id: questions[1].id,
        answer_text: 'Nangka',
        is_correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_id: questions[2].id, // ID dari pertanyaan ketiga
        answer_text: 'Merah',
        is_correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_id: questions[2].id,
        answer_text: 'Hijau',
        is_correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_id: questions[3].id, // ID dari pertanyaan keempat
        answer_text: 'Durian',
        is_correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_id: questions[3].id,
        answer_text: 'Jambu',
        is_correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_id: questions[4].id, // ID dari pertanyaan kelima
        answer_text: 'Jeruk',
        is_correct: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question_id: questions[4].id,
        answer_text: 'Salak',
        is_correct: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Answers', null, {});
  }
};
