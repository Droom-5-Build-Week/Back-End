const db = require('../database/db-config');

module.exports = {
    getInterestedUsers
};

async function getInterestedUsers(id) {
    return db("jobs as j")
        .join("user-likes-job as ulj", "ulj.job_id", "j.id")
        .where("j.company_id", id)
        .join("users as u", "u.id", "ulj.user_id")
        .select("u.name", "u.email", "j.position_name", "j.type")
}