const db = require('../database/db-config.js');

module.exports = {
	add,
	find,
	findBy,
	findById,
	update,
	remove
};

function find() {
	return db('hunters').select('id', 'user_id');
}

function findBy(filter) {
	return db('hunters').where(filter);
}

// MARK: -- Add to hunter db
async function add(user) {
	const { user_id } = user;
	const [id] = await db('hunters').insert(user);
	return findById(id);
}

function findById(id) {
	return db('hunters').where('id', id).first();
}

function update(id, changes) {
	return db('hunters')
		.where('id', id)
		.update(changes, 'id')
		.then(() => {
			return findById(id);
		});

}

function remove(id) {
	return db('hunters').where('id', id).del()
}