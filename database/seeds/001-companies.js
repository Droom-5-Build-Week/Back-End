const faker = require('faker');

const createFakerCompanyAccount = () => ({
  email: faker.internet.exampleEmail(),
  password: faker.company.catchPhraseAdjective(),
  name: faker.company.companyName(),
  location: faker.address.city(),
});

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('companies').truncate()
    .then(function () {
      // Inserts seed entries
      const fakeCompanies = [];
      const desiredFakeCompanies = 50;
      for(let i = 0; i < desiredFakeCompanies; i++) {
        fakeCompanies.push(createFakerCompanyAccount());
      }

      return knex('companies').insert(fakeCompanies);
    });
};
