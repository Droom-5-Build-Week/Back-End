
exports.up = function(knex) {
    return knex.schema.createTable('employers', tbl => {
    	tbl.increments();
    	tbl.string('company_name')
    		.unique()
    		.notNullable()
    	tbl.string('sector')
    		.notNullable();
    	tbl.string('bio')
    		.notNullable();
    })
    .createTable('jobs', tbl => {
    	tbl.increments();
    	tbl.string('title')
    		.notNullable();
    	tbl.string('type')
    		.notNullable();
    	tbl.string('years_of_experience')
    		.notNullable();
    	tbl.string('job_bio')
    		.notNullable();
    	tbl.integer('company_id')
    		.unsigned()
    		.notNullable()
    		.references('id')
    		.inTable('companies')
    		.onDelete('CASCADE')
    		.onUpdate('CASCADE');
    })
    .createTable('skills', tbl => {
    	tbl.increments();
    	tbl.string('name')
    		.notNullable();
    	tbl.integer('company_id')
    		.unsigned()
    		.notNullable()
    		.references('id')
    		.inTable('companies')
    		.onDelete('CASCADE')
    		.onUpdate('CASCADE');
    })
    .createTable('company-likes-user', tbl => {
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
		.dropTableIfExists('skills')
		.dropTableIfExists('job')
		.dropTableIfExists('companies');
};
