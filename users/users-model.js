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
	return db('interests')
		.where('user_id', id)
		.select('topic')
		.then(interests => {
			return db('experiences as e')
				.where('e.user_id', id)
				.select('e.company_name', 'e.job_title')
				.then(experiences => {
					return db('skills as s')
						.where('s.user_id', id)
						.select('s.skill_name')
						.then(skills => {

							return db('users')
								.where('id', id)
								.select('email', 'name', 'location')
								.first()
								.then(user => {
									return {
										...user,
										experiences,
										interests,
									}
								})

						})
				})
		})
}

// function getProjectById(id) {
// 	return db('tasks')
// 		.where('project_id', id)
// 		.select('id', 'description', 'notes', 'completed')
// 		.then(tasks => {
// 			return db('resources-projects as rp')
// 				.where('project_id', id)
// 				.join('resources as r', 'rp.resource_id', 'r.id')
// 				.select('r.id', 'r.name', 'r.description')
// 				.then(resources => {
// 					return db('projects')
// 						.where('id', id)
// 						.first()
// 						.then(project => {
// 							return {
// 								...project,
// 								tasks,
// 								resources
// 							}
// 						})
// 				})
// 		})
// }