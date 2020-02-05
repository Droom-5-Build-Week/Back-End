// for registration
exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('email', 50)
                .notNullable()
                .unique();
            tbl.string('password', 250)
                .notNullable();
            tbl.string('name', 50)
                .notNullable()
            tbl.string('location', 150)
                .notNullable()
                .defaultTo("unknown")
            tbl.string('personal_interests')
                .defaultTo("")
            tbl.string('personal_skills')
                .defaultTo("")
        })
        .createTable('experiences', tbl => {
            tbl.increments();
            tbl.string('company_name', 100)
                .notNullable()
            tbl.string('job_title', 100)
                .notNullable()
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('experiences')
        .dropTableIfExists('users')
};
