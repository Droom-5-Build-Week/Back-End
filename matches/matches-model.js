const db = require('../database/db-config');
const Jobs = require('../companies/jobs-model');
const Companies = require('../companies/companies-model');
const Users = require('../users/users-model');

module.exports = {
	getUserLikes,
	getUserLikesById,
	postUserLikes
};

async function getUserLikes(id) {
	return db("user-likes-job as ulj").where("ulj.user_id", id)
		.join("jobs as j", "j.id", "ulj.job_id")
		.join("companies as c", "c.id", "j.company_id")
		.select("c.name", "j.position_name", "j.type", "j.job_bio", "j.skills")
}

async function getUserLikesById(id) {
	return db("user-likes-job as ulj").where("ulj.id", id)
		.join("jobs as j", "j.id", "ulj.job_id")
		.join("companies as c", "c.id", "j.company_id")
		.select("c.name", "j.position_name", "j.type", "j.job_bio", "j.skills")
}

async function postUserLikes(data, id) {
	return db("user-likes-job").insert(data)
		.then(like => {
			return getUserLikes(id)
		})
}