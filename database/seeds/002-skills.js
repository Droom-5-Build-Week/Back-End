const faker = require('faker');

const random_id = () => {
  return Math.floor((Math.random() * 50) + 1)
}

const createFakerSkills = () => ({
  skill_name: faker.hacker.abbreviation(),
  user_id: random_id()
});


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('skills').truncate()
    .then(function () {
      // Inserts seed entries
      const fakeSkills = [];
      const desiredSkills = 100;
      for(let i = 0; i < desiredSkills; i++) {
        fakeSkills.push(createFakerSkills());
      }
      return knex('skills').insert(fakeSkills);
    });
};
