const faker = require('faker');

const random_id = () => {
  return Math.floor((Math.random() * 50) + 1)
}

const createFakerInterests = () => ({
  topic: faker.hacker.adjective(),
  user_id: random_id()
});

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('interests').truncate()
    .then(function () {
      // Inserts seed entries
      const fakeInterests = [];
      const desiredInterests = 100;
      for(let i = 0; i < desiredInterests; i++) {
        fakeInterests.push(createFakerInterests());
      }
      return knex('interests').insert(fakeInterests);
    });
};
