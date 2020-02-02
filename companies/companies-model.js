const db = require('../database/db-config.js');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

// MARK: - CREATE
async function add(user_id, company) {
	const new_company = {
		user_id,
		...company
	}

	const [id] = await db('companies').insert(new_company).select('id')
	return findById(id);
}

// MARK: - GET ALL
function find() {
	return db('companies')
}

// MARK: - GET BY ID
function findById(company_id) {
	return db('companies')
			.where('id', company_id)
			.select('name', 'profile_picture', 'sector' 'bio')
			.then(company => {
				return db('jobs')
					.where('company_id', company_id)
					.select('title', 'type', 'job_bio', 'experience_preference')
					.then(jobs => {
						return db('job_skills')
							.join('jobs', 'job_skills.job_id', 'jobs.id')
							.then(skills => {
								return {
									...company,
									jobs
								};
							})
					})
			})

}

function update(id, changes) {
	return db('companies')
		.where('id', id)
		.update(changes, 'id')
		.then(() => {
			return findById(id);
		});

}

function remove(id) {
	return db('companies').where('id', id).del()
}