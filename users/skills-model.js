const db = require('../database/db-config');
module.exports = {
	add,
	find,
	findById,
	update,
	remove
};
// MARK: -- Add Skill to hunter
async function add(id, skill) {
	//let user_id = db('users').where('id', id).select('id').first();
	return db('skills').insert({ "user_id": id, "skill_name": skill })
		.then(() => {
			return db('skills').where("user_id", id)
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
async function update(user_id, id, skill) {
	return await db('skills')
		.where('id', id)
		.update({ "skill_name": skill, "user_id": user_id })
		.then(() => {
			return db('skills').where('id', id).first();
		})
}
// MARK: -- Delete
async function remove(id) {
	return await db('skills').where('id', id).del()
}