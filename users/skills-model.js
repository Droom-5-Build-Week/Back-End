const db = require('../database/db-Config');

module.exports = {
	add,
	find,
	findById,
	update,
	remove,
	findHunter
};

// MARK: -- Add Skill to hunter
async function add(id, skill) {
	let id = db('users').where('id', id).select('id').first();

	return db('skills').insert(skill)
		.then(() => {
			return db('skills').where('user_id', id)
		})
}

// MARK: -- Find all skills for hunter
function find(userId) {
	return db('skills').where('user_id', userId)
}

// MARK: -- Find by id
function findById(id) {
	return db('skills').where('id', id).first();
}

// MARK: -- Update
async function update(id, skill) {
	return await db('skills')
		.where('id', id)
		.update(skill)
		.then(() => {
			return db('skills').where('id', id).first();
		})

}

// MARK: -- Delete
async function remove(id) {
	return await db('skills').where('id', id).del()
}

function findHunter(id) {
	return db('hunters_skills').where('user_id', id).first();
}