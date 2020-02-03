const db = require('../database/db-config.js');

module.exports = {
	find,
	findBy,
	findById,
	update,
	remove,
	findUserDetails
};

function find() {
	return db('companies').select('id', 'email', 'name');
}

function findBy(filter) {
	return db('companies').where(filter);
}

function findById(id) {
	return db('companies').where('id', id).first();
}

function update(id, changes) {
	return db('companies')
		.where('id', id)
		.update(changes, 'id')
		.then(() => {
			return findById(id);
		});

}

function remove(id) {
	return db('companies').where('id', id).del()
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