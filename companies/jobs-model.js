const db = require('../database/db-Config');
module.exports = {
    add,
    find,
    findById,
    update,
    remove
};

// tbl.string('position_name').notNullable();
// 			tbl.string('type').notNullable();
// 			tbl.string('job_bio').notNullable();
// 			tbl.string('duration').notNullable();
// 			tbl.integer('company_id')
// MARK: -- Add Skill to hunter
async function add(id, job) {
    //let user_id = db('users').where('id', id).select('id').first();
    return db('jobs').insert({ "position_name": job.position_name, "type": job.type, "job_bio": job.job_bio, "duration": job.duration, "company_id": id })
        .then(() => {
            return db('jobs').where("company_id", id)
        })
}
// MARK: -- Find all skills for hunter
function find(companyId) {
    return db('jobs').where('company_id', companyId)
}
// MARK: -- Find by id
function findById(id) {
    return db('jobs').where('id', id).first();
}
// MARK: -- Update
async function update(id, job) {
    return await db('jobs')
        .where('id', id)
        .update({ "position_name": job.position_name, "type": job.type, "job_bio": job.job_bio, "duration": job.duration, "company_id": job.company_id })
        .then(() => {
            return db('jobs').where('id', id).first();
        })
}
// MARK: -- Delete
async function remove(id) {
    return await db('jobs').where('id', id).del()
}