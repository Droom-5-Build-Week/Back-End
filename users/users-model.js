const db = require('../database/db-config.js');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove,
	findUserDetails
};

async function find() {
	const id = db('users').select('id').orderBy('id')
	const arrId = id.map(id => { return id.id });
	return await arrId.map(id => findUserDetails(id))
}

function findBy(filter) {
	return db('users').where(filter);
}

async function add(user) {
	const [id] = await db('users').insert(user);
	return findById(id);
}

function findById(id) {
	return db('users').where('id', id).select("id", "name", "location").first();
}

function update(id, changes) {
	return db('users')
		.where('id', id)
		.update(changes, 'id')
		.then(() => {
			return findById(id);
		});

}

function remove(id) {
	return db('users').where('id', id).del()
}


async function findUserDetails(id) {
	const user = await findById(id)
	if(user == undefined){
		return
	} else {
		return db('users')
			.where('id', id)
			.select('id', 'name', 'email', 'location', 'personal_skills', 'personal_interests')
			.first()
			.then(users => {
				return db('experiences')
					.where('experiences.user_id', id)
					.select('job_title', 'company_name')
					.then(experiences => {
						return {
							...users,
							experiences
						}

					})
			})
	}
}
