
exports.up = function (knex) {
	return knex.schema
		.createTable('user-likes-job', tbl => {
			tbl.increments();
			tbl.integer("user_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("users")
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.integer("job_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("jobs")
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.boolean("likes")
				.defaultTo(false)
			tbl.boolean("seen_before")
				.defaultTo(false)
		})
		.createTable('users-interested-in-job', tbl => {
			tbl.increments();
			tbl.integer("user_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("users")
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
			tbl.integer("job_id")
				.unsigned()
				.notNullable()
				.references("id")
				.inTable("jobs")
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('user-interested-in-job')
		.dropTableIfExists('user-likes-job');
};


