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

function find() {
	return db('users').select('id', 'email');
}

function findBy(filter) {
	return db('users').where(filter);
}

async function add(user) {
	const [id] = await db('users').insert(user);
	return findById(id);
}

function findById(id) {
	return db('users').where('id', id).first();
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


function findUserDetails(id) {
	return db('users')
		.where('id', id)
		.select('name', 'email', 'location')
		.first()
		.then(users => {
			return db('interests')
				.where('interests.user_id', id)
				.select('interests.topic')
				.then(interests => {
					return db('skills')
						.where('skills.user_id', id)
						.select('skill_name')
						.then(skills => {
							return db('experiences')
								.where('experiences.user_id', id)
								.select('job_title', 'company_name')
								.then(experiences => {

									const sk = skills.flatMap(object => Object.values(object))
									const int = interests.flatMap(object => Object.values(object))

									return {
										...users,
										skills: sk,
										interests: int,
										experiences
									}

								})
						})
				})
		})
}