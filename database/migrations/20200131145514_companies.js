
exports.up = function(knex) {
    return knex.schema.createTable('companies', tbl => {
        	tbl.increments();
        	tbl.string('name').unique().notNullable();
            tbl.string('profile_picture').notNullable();
        	tbl.string('sector').notNullable();
        	tbl.string('bio').notNullable();
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');    
        })
    
        .createTable('jobs', tbl => {
        	tbl.increments();
        	tbl.string('title').notNullable();
        	tbl.string('type').notNullable();
            tbl.string('job_bio').notNullable();
        	tbl.string('experience_preference').notNullable();
        	tbl.integer('company_id')
        		.unsigned()
        		.notNullable()
        		.references('id')
        		.inTable('companies')
        		.onDelete('CASCADE')
        		.onUpdate('CASCADE');
        })

        .createTable('job_skills', tbl => {
        	tbl.increments();
        	tbl.string('name').notNullable();
        	tbl.integer('job_id')
        		.unsigned()
        		.notNullable()
        		.references('id')
        		.inTable('jobs')
        		.onDelete('CASCADE')
        		.onUpdate('CASCADE');
        })
};

exports.down = function(knex) {
	knex.schema
		.dropTableIfExists('job_skills')
		.dropTableIfExists('job')
		.dropTableIfExists('companies');
};
