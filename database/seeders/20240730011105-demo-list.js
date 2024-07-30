'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const lists = [];
    for (let i = 0; i < 100; i++) {
      lists.push({
        title: `List_${i}`,
        description:  `description_${i}`,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return queryInterface.bulkInsert('Lists', lists, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Lists', null, {
      truncate: true
    });
  }
};
