const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const skillsRouter = require('../users/skills-router.js');
const experiencesRouter = require('../users/experiences-router.js');
const interestsRouter = require('../users/interests-router.js');
const companyRouter = require('../companies/companies-router.js');
const companyAuthRouter = require('../auth/company-auth-router.js')
const jobsRouter = require('../companies/jobs-router.js');
const jobSkillsRouter = require('../companies/jobs_skills-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(logger);

function logger(req, res, next) {
	const date = new Date(Date.now());
	console.log(`METHOD: ${req.method}`);
	console.log(`URL: ${req.originalUrl}`);
	console.log(`DATE: ${date.toDateString()}, ${date.toTimeString()}`);
	next();
}

server.use('/api/auth', authRouter, companyAuthRouter);
server.use('/api/users', skillsRouter, experiencesRouter, interestsRouter, usersRouter);
server.use('/api/companies', companyRouter, jobsRouter, jobSkillsRouter)


server.get('/', (req, res) => {
	res.send('up!');
});

module.exports = server;