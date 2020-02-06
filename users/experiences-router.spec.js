const request = require('supertest');
const server = require('../api/server.js');
const db = require('../database/db-config.js');

describe('experience-router', function () {

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

	// MARK: -- EXPERIENCES
	describe('/api/users/:user_id/experiences', function () {

		it('POST experience to user', async function () {
			await request(server).post('/api/auth/register').send(user)
			await request(server).post('/api/auth/login').send(user)
				.then(async user => {
					const res = await request(server)
						.post('/api/users/1/experiences')
						.set('authorization', user.body.token)
						.send({'company_name': 'Grass Roots Inc', 'job_title': 'Junior Seed Scientist' })
					expect(res.status).toBe(201);
				})
		})

		it('POST experience status code 401 to get because not setting token', async function () {
			await request(server).post('/api/auth/register').send(user)
			await request(server).post('/api/auth/login').send(user)
				.then(async user => {
					const res = await request(server)
						.post('/api/users/1/experiences')
						.send({'company_name': 'Tidy Features', 'job_title': 'Architect' })
					expect(res.status).toBe(401);
				})
		})

		it('GET experiences for user', async function () {
			let token;
			await request(server).post('/api/auth/register').send(user)
			await request(server).post('/api/auth/login').send(user)
				.then(async user => {
					token = user.body.token
					await request(server)
						.get('/api/users/1/experiences')
						.set('authorization', token)
						.then(res => {
							expect(res.status).toBe(200);
						})
				})
		})

	})

	// MARK: -- ONE EXPERIENCE
	describe('/api/users/:user_id/experiences/:id', function () {

		it('GET one experience for user', async function () {
			let token;
			await request(server).post('/api/auth/register').send(user)
			await request(server).post('/api/auth/login').send(user)
				.then(async user => {
					token = user.body.token
					await request(server)
						.get('/api/users/1/experiences/115')
						.set('authorization', token)
						.then(res => {
							expect(res.body.company_name).toBe('Grass Roots Inc');
						})
				})
		})

		it('GET one experience for user', async function () {
			let token;
			await request(server).post('/api/auth/register').send(user)
			await request(server).post('/api/auth/login').send(user)
				.then(async user => {
					token = user.body.token
					const res = await request(server)
						.put('/api/users/1/experiences/115')
						.set('authorization', token)
						.send({'company_name': 'Bamboo United'})
					console.log(res.body.message)
					expect(res.body.company_name).toBe('Bamboo United');
				})
		})
	})
});

	// describe('/api/users/:user_id/experiences/:id', function () {
	// 	it('Get exp by id', async function () {
	// 		await request(server).post('/api/auth/register').send(user)
	// 		await request(server).post('/api/auth/login').send(user)
	// 			.then(async user => {
	// 				const res = await request(server).get('/api/users/1').set('authorization', user.body.token)
	// 				expect(res.body.id).toBe(1);
	// 			})
	// 	})

	// 	it('Get user by id', async function () {
	// 		await request(server).post('/api/auth/register').send(user)
	// 		await request(server).post('/api/auth/login').send(user)
	// 			.then(async user => {
	// 				const res = await request(server).get('/api/users/1').set('authorization', user.body.token)
	// 				expect(res.status).toBe(200);
	// 			})
	// 	})

	// 	it('Put user by id ', async function () {
	// 		await request(server).post('/api/auth/register').send(user)
	// 		await request(server).post('/api/auth/login').send(user)
	// 			.then(async user => {
	// 				const res = await request(server)
	// 					.put('/api/users/1')
	// 					.set('authorization', user.body.token)
	// 					.send({'name': 'Rachel Next'})
	// 				expect(res.status).toBe(201)
	// 			})
	// 	})

	// 	it('Delete user by id', async function () {
	// 		await request(server).post('/api/auth/register').send(user)
	// 		await request(server).post('/api/auth/login').send(user)
	// 			.then(async user => {
	// 				const res = await request(server)
	// 					.delete('/api/users/1')
	// 					.set('authorization', user.body.token)
	// 				expect(res.status).toBe(200);
	// 			})
	// 	})

	// })