const faker = require('faker');

const random_id = () => {
  return Math.floor((Math.random() * 50) + 1)
}

const createFakerJobSkills = () => ({
  name: faker.hacker.abbreviation(),
  job_id: random_id()
});

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('job_skills').truncate()
    .then(function () {
      // Inserts seed entries
      const fakeJobSkills = [];
      const desiredJobSkills = 100;
      for(let i = 0; i < desiredJobSkills; i++) {
        fakeJobSkills.push(createFakerJobSkills());
      }
      return knex('job_skills').insert(fakeJobSkills);
    });
};