const db = require('../database/db-Config');

module.exports = {
	add,
	find,
	findById,
	update,
	remove
};

// MARK: -- Add interest to hunter
async function add(id, interest) {
	return db('interests')
	.insert({
		"topic": interest.topic, 
		"user_id": id 
	})
		.then(() => {
			return db('interests').where("user_id", id)
		})
}

// MARK: -- Find all interests for hunter
function find(userId) {
	return db('interests').where('user_id', userId)
}

// MARK: -- Find by id
function findById(id) {
	return db('interests').where('id', id).first();
}

// MARK: -- Update
async function update(user_id, id, interest) {
	return await db('interests')
		.where('id', id)
		.update({
			"topic": interest.topic, 
			"user_id": user_id 
		})
		.then(() => {
			return db('interests').where('id', id).first();
		})

}

// MARK: -- Delete (look back to later)
async function remove(id) {
	return await db('interests').where('id', id).del()
}