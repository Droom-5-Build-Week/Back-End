const request = require('supertest');
const server = require('../api/server.js');
const db = require('../database/db-config.js');

describe('users-router', function () {

	const user = {
		email: 'Katz@utilzexample.com', 
		password: 'fortnight', 
		name: 'Katz Deli', 
		location: 'London',
		personal_interests: 'Reading Fictions, Yoyoing',
		personal_skills: 'analysis, research, management'
	}

	beforeEach(async function () {
		await db('users').truncate();
	})

	describe('test environment', function () {
		it('should be using test env', function () {
			expect(process.env.DB_ENV).toBe('testing');
		})
	})

	describe('/api/users', function () {

		it('GET all users and return 200 status code', async function () {
			await request(server).post('/api/auth/register').send(user)
			await request(server).post('/api/auth/login').send(user)
				.then(async user => {
					const res = await request(server).get('/api/users').set('authorization', user.body.token)
					expect(res.status).toBe(200);
				})
		})

		it('status code 401 to get because not setting token', async function () {
			await request(server).post('/api/auth/register').send(user)
			await request(server).post('/api/auth/login').send(user)
				.then(async user => {
					const res = await request(server).get('/api/users')
					expect(res.status).toBe(401);
				})
		})
	})

	describe('/api/users/:id', function () {
		it('Get user by id', async function () {
			await request(server).post('/api/auth/register').send(user)
			await request(server).post('/api/auth/login').send(user)
				.then(async user => {
					const res = await request(server).get('/api/users/1').set('authorization', user.body.token)
					expect(res.body.id).toBe(1);
				})
		})

		it('Get user by id', async function () {
			await request(server).post('/api/auth/register').send(user)
			await request(server).post('/api/auth/login').send(user)
				.then(async user => {
					const res = await request(server).get('/api/users/1').set('authorization', user.body.token)
					expect(res.status).toBe(200);
				})
		})

		it('Put user by id ', async function () {
			await request(server).post('/api/auth/register').send(user)
			await request(server).post('/api/auth/login').send(user)
				.then(async user => {
					const res = await request(server)
						.put('/api/users/1')
						.set('authorization', user.body.token)
						.send({'name': 'Rachel Next'})
					expect(res.status).toBe(201)
				})
		})

		it('Delete user by id', async function () {
			await request(server).post('/api/auth/register').send(user)
			await request(server).post('/api/auth/login').send(user)
				.then(async user => {
					const res = await request(server)
						.delete('/api/users/1')
						.set('authorization', user.body.token)
					expect(res.status).toBe(200);
				})
		})

	})
});