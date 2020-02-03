const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');
const skillsRouter = require('../users/skills-router.js');

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

server.use('/api/auth', authRouter);
server.use('/api/users/:user_id/skills', skillsRouter);
server.use('/api/users', usersRouter);
//server.use('/api/companies', companiesRouter);
//server.use('/api/employees', employeesRouter);

server.get('/', (req, res) => {
	res.send('up!');
});

module.exports = server;