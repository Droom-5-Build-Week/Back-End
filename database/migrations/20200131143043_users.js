// for registration
exports.up = function (knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('email', 50).notNullable().unique();
            tbl.string('password', 250).notNullable();
            tbl.string('name', 50)
                .notNullable()
            tbl.string('location', 150)
                .notNullable()
        })
        .createTable('interests', tbl => {
            tbl.increments();
            tbl.string('topic', 100)
                .notNullable()
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
        .createTable('skills', tbl => {
            tbl.increments();
            tbl.string('skill_name', 100)
                .notNullable()
            tbl.integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
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
        .dropTableIfExists('skills')
        .dropTableIfExists('interests')
        .dropTableIfExists('users')
};
