const db = require('../database/db-config.js');

module.exports = {
	find,
	findById,
	update,
	remove,
	findCompanyDetails
};

function find() {
	return db('companies').select('id', 'email', 'name');
}

function findById(id) {
	return db('companies').where('id', id).select("name", "location").first();
}

function update(id, changes) {
	return db('companies')
		.where('id', id)
		.update(changes)
		.then(() => {
			return findById(id);
		});
}

function remove(id) {
	return db('companies').where('id', id).del()
}

function findCompanyDetails(id) {
	return db('jobs')
		.where('company_id', id)
		.select('position_name', 'type', 'duration', 'job_bio', 'jobs.id')
		.then(jobs => {
			return db('companies as c')
				.where('c.id', id)
				.select('c.name', 'c.location', 'c.email')
				.first()
				.then(company => {
					return {
						...company,
						jobs
					}					
				})
		})
}