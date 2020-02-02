const db = require('../database/dbConfig');

module.exports = {
	add,
	find,
	findById,
	update,
	remove,
	findHunter
};

// MARK: -- Add Skill to hunter
async function add(userId, hunter_skills) {
	let hunter_id = db('hunters').where('user_id', userId).select('id').first();

	const updated = hunter_skills.map(skill => {
		return { hunter_id, skill: skill }
	})

	return db('hunter_skills').insert(updated)
		.then(() => {
			return db('hunter_skills').where('hunter_id', hunter_id)
	})
}

// MARK: -- Find all skills for hunter
function find(userId) {
	let hunter_id = db('hunters').where('user_id', userId).select('id').first();
	return db('hunters_skills').where('hunter_id', hunter_id)
}

// MARK: -- Find by id
function findById(id) {
	return db('hunter_skills').where('id', id).first();
}

// MARK: -- Update
async function update(id, skill) {
	return await db('hunters_skills')
		.where('id', id)
		.update(skill)
		.then(() => {
			return db('hunter_id').where('id', id).first();
		})

}

// MARK: -- Delete
async function remove(id) {
	return await db('hunter_skills').where('id', id).del()
}

function findHunter(id) {
	return db('hunters_skills').where('user_id', id).first();
}