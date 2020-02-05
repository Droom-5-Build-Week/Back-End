const faker = require('faker');

const random_id = () => {
  return Math.floor((Math.random() * 50) + 1)
}

const random_type = () => {
  let i = Math.floor((Math.random() * 3))
  const arr = ['long-term', 'short-term', 'contract']
  return arr[i];
}

const createFakerJobs = () => ({
  position_name: faker.name.jobTitle(),
  type: random_type(),
  job_bio: faker.lorem.paragraph(),
  duration: "",
  skills: faker.hacker.adjective(),
  company_id: random_id()
});

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jobs').truncate()
    .then(function () {
      // Inserts seed entries
      const fakeJobs = [];
      const desiredJobs = 100;
      for(let i = 0; i < desiredJobs; i++) {
        fakeJobs.push(createFakerJobs());
      }
      return knex('jobs').insert(fakeJobs);
    });
};