const request = require('supertest');
const server = require('../api/server.js');
const db = require('../database/db-config.js');

describe('auth-router', function () {

	beforeEach(async function () {
			await db('users').truncate();
	})

	describe('test environment', function () {
		it('should be using test env', function () {
			expect(process.env.DB_ENV).toBe('testing');
		})
	})

	describe('registration', function () {

		it('should return 201 when posting', async function () {
			const user = { email: 'Katz@utilzexample.com', password: 'fortnight', name: 'Katz Deli', location: 'London'}
			await request(server).post('/api/auth/register').send(user)
				.then(res => {
					expect(res.status).toBe(201)
				})
		})

		it('should return user', async function () {
			const user = { email: 'Remi@examplemail.com', password: 'fortnight', name: 'Remi Deli', location: 'Provo'}
			await request(server).post('/api/auth/register').send(user)
				.then(res => {
					expect(res.body.name).toBe('Remi Deli');
				})
		})
	})

	describe('login', function () {

		it('should return a token', async function () {
			const user = { email: 'Katz@utilzexample.com', password: 'fortnight', name: 'Katz Deli', location: 'London' }
			await request(server).post('/api/auth/register').send(user)
				.then(async res => {
					const loginUser = { email: 'Katz@utilzexample.com', password: 'fortnight' }
					await request(server).post('/api/auth/login').send(loginUser)
						.then(res => {
							expect(res.body.token).toBe(`${res.body.token}`)
					})
				})
		})

		it('should return a 201', async function () {
			const user = { email: 'Katz@utilzexample.com', password: 'fortnight', name: 'Katz Deli', location: 'London' }
			await request(server).post('/api/auth/register').send(user)
				.then(async res => {
					const loginUser = { email: 'Katz@utilzexample.com', password: 'fortnight' }
					await request(server).post('/api/auth/login').send(loginUser)
						.then(res => {
							expect(res.status).toBe(200)
					})
				})
		})
	})
});