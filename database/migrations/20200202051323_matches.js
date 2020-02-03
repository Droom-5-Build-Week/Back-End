
exports.up = function(knex) {
	return knex.schema.createTable('matches', tbl => {
	  	tbl.increments();
	  	tbl.boolean('hunter_likes_company').defaultTo(false);
		tbl.boolean('company_likes_hunter').defaultTo(false);
		tbl.boolean('matched').defaultTo(false);

	  	tbl.integer('job_id')
	  		.unsigned()
			.notNullable()
			.references('id')
			.inTable('jobs')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

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
  
};
