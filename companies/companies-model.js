const db = require('../database/db-config.js');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove,
	findCompanyDetails
};

async function add(company) {
	const [id] = await db('companies').insert(company);
	return findById(id);
}


async function find() {
	const id = db('companies').select('id', 'email', 'name').orderBy('id')
	const arrId = id.map(id => { return id.id });
	return await arrId.map(id => findCompanyDetails(id))
}

function findBy(filter) {
	return db('companies').where(filter);
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
		.select('jobs.id', 'position_name', 'type', 'duration', 'job_bio')
		.then(jobs => {
			return db('companies as c')
				.where('c.id', id)
				.select('c.id', 'c.name', 'c.location', 'c.email')
				.first()
				.then(company => {
					return {
						...company,
						jobs
					}					
				})
		})
}