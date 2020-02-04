const db = require('../database/db-config');
const Jobs = require('../companies/jobs-model');
const Companies = require('../companies/companies-model');
const Users = require('../users/users-model');

module.exports = {
	userMatches,
	companyMatches,
	userMatch,
	jobMatch
};

async function userMatches(id) {
	let user = await User.findById(id);
	let jobs = await Jobs.find();

	let matches = await db('matches').where({ user_id: user.id, matched: true })

	let mappedMatches = matches.map(match => match.job_id);

	let filteredJobs = jobs.filter(job => {
		return !mappedMatches.includes(job.id);
	});

	return filteredJobs;
}

async function companyMatches(id) {
	let company = await Companies.findById(id);
	let users = await Users.find();

	let matches = await db('matches').where({ matched: true })

	for (let i = 0 ; i < matches.length ; i++) {
		let unmatched = [];
	}

}