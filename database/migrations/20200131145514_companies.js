
exports.up = function (knex) {
	return knex.schema
		.createTable('companies', tbl => {
			tbl.increments();
			tbl.string('email')
				.unique()
				.notNullable();
			tbl.string('password')
				.notNullable();
			tbl.string('name', 150)
				.notNullable();
			tbl.string('location')
				.notNullable()
				.defaultTo("unknown");
		})

		.createTable('jobs', tbl => {
			tbl.increments();
			tbl.string('position_name').notNullable();
			tbl.string('type').notNullable();
			tbl.string('job_bio').notNullable();
			tbl.string('duration').notNullable();
			tbl.string('skills').notNullable();
			tbl.integer('company_id')
				.unsigned()
				.notNullable()
				.references('id')
				.inTable('companies')
				.onDelete('CASCADE')
				.onUpdate('CASCADE');
		})

};

exports.down = function (knex) {
	return knex.schema
		.dropTableIfExists('job')
		.dropTableIfExists('companies');
};


// .enum(['Finance',
// 'Research',
// 'Accounting',
// 'Relations',
// 'Construction',
// 'Transportation',
// 'Software Development', 
// 'Marketing', 
// 'Sales', 
// 'Music', 
// 'Film-Making',   
// 'Design',
// 'Admin',
// 'Wearer of Many Hats'
// ]).defaultTo('Admin');