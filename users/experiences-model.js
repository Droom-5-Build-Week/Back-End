const db = require('../database/db-config.js');

module.exports = {
	add,
	find,
	findById,
	findByIdInUser,
	update,
	remove
};

// MARK: -- Add experience to hunter
async function add(id, experience) {
	return db('experiences')
	.insert({
		"company_name": experience.company_name, 
		"job_title": experience.job_title, 
		"user_id": id 
	})
		.then(() => {
			return db('experiences').where("user_id", id)
		})
}

// MARK: -- Find all experiences for hunter
function find(user_id) {
	return db('experiences').where('user_id', user_id)
}

// MARK: -- Find by id
function findById(id) {
	return db('experiences').where('id', id).first();
}

function findByIdInUser(experience_id, user_id) {
    return db('experiences').where('experiences.user_id', user_id).where("id", experience_id).first();
}

// MARK: -- Update
async function update(user_id, id, experience) {
	return await db('experiences')
		.where('id', id)
		.update({
			"company_name": experience.company_name, 
			"job_title": experience.job_title, 
			"user_id": user_id 
		})
		.then(() => {
			return db('experiences').where('id', id).first();
		})

}

// MARK: -- Delete (look back to later)
async function remove(user_id, id) {
	return await db('experiences').where('id', id).del()
}