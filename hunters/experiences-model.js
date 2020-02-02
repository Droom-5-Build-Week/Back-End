const db = require('../database/db-config.js');

module.exports = {
	findHunter
	add,
	find,
	findById,
	update,
	remove,
};

// MARK: -- Find hunter_id
function findHunter(id) {
	return db('hunters')
		.where('user_id', id)
		.select('id')
		.first();
}

// MARK: -- Add experience to hunter profile
async function add(user_id, hunter_experience) {
	const id = await findHunter(user_id);
	const update = hunter_experience.map(experience => {
		return { id, ...experience };
	});

	return db('experience').insert(update)
		.then(() => {
			return db('experience').where('id', id);
		})
}

// MARK: -- Find all experience for hunter profile
async function find(user_id) {
	const id = await findHunter(user_id)
	return db('experience').where('hunter_id', id)
}

// MARK: -- Find by experience identifier
function findById(id) {
	return db('experience').where('id', id).first();
}

// MARK: -- Update an experience
async function update(id, experience) {
	return await db('experience').where('id', id).update(experience)
		.then(() => {
			return db('experience').where('id', id).first();
		})
}

// MARK: -- remove an experience
async function remove(id) {
	return await db('experience').where('id', id).del()
}