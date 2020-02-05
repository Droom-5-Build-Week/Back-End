const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const experiencesRouter = require('../users/experiences-router.js');
const companyRouter = require('../companies/companies-router.js');
const companyAuthRouter = require('../auth/company-auth-router.js')
const jobsRouter = require('../companies/jobs-router.js');
const matchesRouter = require('../matches/matches-router.js');

const restricted = require('../auth/restricted-middleware.js');

const server = express();

server.use(helmet());
server.use(cors({
	credentials: true,
	origin: "http://localhost:3000"
}));

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
server.use('/api/users', restricted, experiencesRouter, usersRouter, matchesRouter);
server.use('/api/companies', restricted, companyRouter, jobsRouter)



server.get('/', (req, res) => {
	res.send('up!');
});

module.exports = server;