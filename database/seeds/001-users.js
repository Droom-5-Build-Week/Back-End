const faker = require('faker');

const createFakerAccount = () => ({
  email: faker.internet.email(),
  password: faker.commerce.color(),
  name: faker.name.findName(),
  location: faker.address.city(),
  personal_skills: faker.hacker.adjective(),
  personal_interests: faker.hacker.abbreviation()
});

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      const fakeUsers = [];
      const desiredFakeUsers = 50;
      for(let i = 0; i < desiredFakeUsers; i++) {
        fakeUsers.push(createFakerAccount());
      }

      return knex('users').insert(fakeUsers);
    });
};
