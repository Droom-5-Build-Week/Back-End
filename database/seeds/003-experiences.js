const faker = require('faker');

const random_id = () => {
  return Math.floor((Math.random() * 50) + 1)
}

const createFakerExperiences = () => ({
  company_name: faker.company.companyName(),
  job_title: faker.name.jobType(),
  user_id: random_id()
});

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('experiences').truncate()
    .then(function () {
      // Inserts seed entries
      const fakeExperiences = [];
      const desiredExperiences = 100;
      for(let i = 0; i < desiredExperiences; i++) {
        fakeExperiences.push(createFakerExperiences());
      }
      return knex('experiences').insert(fakeExperiences);
    });
};
