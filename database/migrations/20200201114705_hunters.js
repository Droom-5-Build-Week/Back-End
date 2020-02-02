
exports.up = function(knex) {
	return knex.schema.createTable('hunters', tbl => {
			tbl.increments();
			tbl.string('first_name', 80).notNullable();
			tbl.string('last_name', 80).notNullable();
			tbl.string('profile_picture', 255).notNullable();
			tbl.string('current_job').notNullable().defaultTo('NA');
			tbl.string('bio').notNullable().defaultTo("");
			tbl.integer('user_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('users')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');

		})
		.createTable('hunter_experiences', tbl => {
			tbl.increments();
			tbl.string('title', 40);
			tbl.string('company_name', 50);
			tbl.integer('hunter_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('hunters')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})

		.createTable('hunter_interests', tbl => {
			tbl.increments();
			tbl.string('interest')
			tbl.integer('hunter_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('hunters')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})

		.createTable('hunter_skills', tbl => {
			tbl.increments();
			tbl.string('skill').notNullable();
			tbl.integer('hunter_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('hunters')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})
};

exports.down = function(knex) {
	return knex.schema
		.dropTableIfExists('hunter_skills')
		.dropTableIfExists('hunter_interests')
		.dropTableIfExists('hunter_experiences')
		.dropTableIfExists('hunters');
};
