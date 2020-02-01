
exports.up = function(knex) {
  return knex.schema
  .createTable('users', tbl => {
  	tbl.increments();
  	tbl.string('first_name').notNullable();
  	tbl.string('last_name').notNullable();
  	tbl.string('current_occupation').notNullable().defaultTo('NA');
  	tbl.string('bio')
  })

  .createTable('previous_experiences', tbl => {
  	tbl.increments();
  	tbl.string('title', 40);
  	tbl.string('company_name', 50);
  	tbl.increment('user_id')
  		.unsigned()
  		.notNullable()
  		.references('id')
  		.inTable('users')
  		.onDelete('CASCADE')
  		.onUpdate('CASCADE');
  })

  .createTable('interests', tbl => {
  	tbl.increments();
  	tbl.string('name')
  	tbl.integer('user_id')
  		.unsigned()
  		.notNullable()
  		.references('id')
  		.inTable('users')
  		.onDelete('CASCADE')
  		.onUpdate('CASCADE');
  })

  .createTable('users-likes', tbl => {
  	tbl.increments();
  	tbl.integer('user_id')
  		.unsigned()
  		.notNullable()
  		.references('id')
  		.inTable('companies')
  		.onDelete('CASCADE')
  		.onUpdate('CASCADE');
  	tbl.integer('company_id')
  		.unsigned()
  		.notNullable()
  		.references('id')
  		.inTable('companies')
  		.onDelete('CASCADE')
  		.onUpdate('CASCADE');
  })

  .createTable('users-likes-company', tbl => {
  	tbl.increments();
  	tbl.integer('user_id')
  		.unsigned()
  		.notNullable()
  		.references('id')
  		.inTable('companies')
  		.onDelete('CASCADE')
  		.onUpdate('CASCADE');
  	tbl.integer('company_id')
  		.unsigned()
  		.notNullable()
  		.references('id')
  		.inTable('companies')
  		.onDelete('CASCADE')
  		.onUpdate('CASCADE');
  	tbl.boolean('likes')
  		.defaultTo(false)
  		.notNullable();
  })
};

exports.down = function(knex) {
	knex.schema
		.dropTableIfExists('interests')
		.dropTableIfExists('previous_experiences')
		.dropTableIfExists('users');
};
